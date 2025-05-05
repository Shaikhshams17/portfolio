// components/CursorTrail.jsx
'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

export default function CursorTrail() {
  const [isMounted, setIsMounted] = useState(false);
  const [currentText, setCurrentText] = useState('shams');
  const [isHovering, setIsHovering] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const lastUpdateTime = useRef(0);
  const requestRef = useRef();

  // Smoother spring physics
  const springX = useSpring(mouseX, { 
    damping: 20, 
    stiffness: 300,
    mass: 0.5
  });
  
  const springY = useSpring(mouseY, { 
    damping: 20, 
    stiffness: 300,
    mass: 0.5
  });

  // Optimized mouse move handler with throttling
  const updateMousePosition = (e) => {
    const now = performance.now();
    if (now - lastUpdateTime.current < 16) return; // ~60fps
    
    lastUpdateTime.current = now;
    mouseX.set(e.clientX + 15);
    mouseY.set(e.clientY + 15);
    
    // Detect hover state changes
    const elementUnderCursor = document.elementFromPoint(e.clientX, e.clientY);
    const sectionElement = elementUnderCursor?.closest('[data-cursor-text]');
    
    if (sectionElement) {
      const newText = sectionElement.dataset.cursorText;
      if (newText !== currentText) {
        setIsHovering(true);
        setCurrentText(newText);
      }
    } else if (currentText !== 'shams') {
      setIsHovering(false);
      setCurrentText('shams');
    }
  };

  // Animation loop for smoother updates
  const animate = () => {
    requestRef.current = requestAnimationFrame(animate);
    // Additional smoothing can be applied here if needed
  };

  useEffect(() => {
    window.addEventListener('mousemove', updateMousePosition);
    requestRef.current = requestAnimationFrame(animate);
    setIsMounted(true);
    
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      cancelAnimationFrame(requestRef.current);
    };
  }, [currentText]);

  if (!isMounted) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 select-none"
      style={{
        translateX: springX,
        translateY: springY,
      }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={currentText}
          className="text-transparent bg-clip-text bg-white text-xl md:text-2xl font-extrabold drop-shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            rotate: isHovering ? [0, 5, -5, 0] : 0
          }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{
            opacity: { duration: 0.2 },
            scale: { duration: 0.3, type: 'spring' },
            rotate: {
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
              repeatType: 'reverse'
            }
          }}
        >
          {currentText}
        </motion.span>
      </AnimatePresence>
    </motion.div>
  );
}