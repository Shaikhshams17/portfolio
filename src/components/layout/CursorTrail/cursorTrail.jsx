'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

export default function CursorTrail() {
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [text, setText] = useState('Shams Ali');
  const [cursorState, setCursorState] = useState('default');
  const [isHovering, setIsHovering] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const lastUpdate = useRef(0);

  const springConfig = { damping: 25, stiffness: 400, mass: 0.3 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const trailX = useSpring(mouseX, { damping: 40, stiffness: 200 });
  const trailY = useSpring(mouseY, { damping: 40, stiffness: 200 });

  const outerX = useSpring(mouseX, { damping: 50, stiffness: 150 });
  const outerY = useSpring(mouseY, { damping: 50, stiffness: 150 });

  const updateMouse = (e) => {
    const now = performance.now();
    if (now - lastUpdate.current < 10) return;
    lastUpdate.current = now;

    const { clientX, clientY } = e;
    mouseX.set(clientX + 16);
    mouseY.set(clientY + 16);

    const target = document.elementFromPoint(clientX, clientY);
    const cursorTextEl = target?.closest('[data-cursor-text]');
    const isInteractive = target?.matches('a, button, input, select, textarea, [role="button"]');

    if (cursorTextEl) {
      setText(cursorTextEl.dataset.cursorText);
      setCursorState('hover');
      setIsHovering(true);
    } else if (isInteractive) {
      setText('interact');
      setCursorState('hover');
      setIsHovering(true);
    } else {
      setText('Shams Ali');
      setCursorState('default');
      setIsHovering(false);
    }
  };

  const handleDown = () => setCursorState('click');
  const handleUp = () => setCursorState(isHovering ? 'hover' : 'default');

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    setIsMounted(true);
    if (!isMobile) {
      window.addEventListener('mousemove', updateMouse);
      window.addEventListener('mousedown', handleDown);
      window.addEventListener('mouseup', handleUp);
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', updateMouse);
      window.removeEventListener('mousedown', handleDown);
      window.removeEventListener('mouseup', handleUp);
    };
  }, [isMobile]);

  if (!isMounted || isMobile) return null;

  const getTextStyle = () => {
    const base = {
      fontWeight: 600,
      fontSize: '1.25rem',
      color: '#ffffff',
      filter: 'drop-shadow(0 0 4px rgba(255,255,255,0.15))',
    };
    if (cursorState === 'hover') {
      return { ...base, fontSize: '1.4rem', filter: 'drop-shadow(0 0 6px rgba(255,255,255,0.25))' };
    }
    if (cursorState === 'click') {
      return { ...base, fontSize: '1.6rem', filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.35))' };
    }
    return base;
  };

  return (
    <>
      {/* Text cursor */}
      <motion.div
        className="fixed top-0 left-0 z-50 pointer-events-none select-none"
        style={{ translateX: springX, translateY: springY }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={text}
            className="relative"
            initial={{ opacity: 0, scale: 0.5, rotateX: -90 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotateX: 0,
              y: cursorState === 'click' ? -4 : 0,
            }}
            exit={{ opacity: 0, scale: 0.5, rotateX: 90 }}
            transition={{
              opacity: { duration: 0.2 },
              scale: { type: 'spring', duration: 0.4, bounce: 0.3 },
              rotateX: { type: 'spring', duration: 0.3 },
              y: { type: 'spring', duration: 0.1 },
            }}
          >
            <motion.span
              className="relative text-white tracking-tight"
              style={getTextStyle()}
              animate={{
                textShadow:
                  cursorState === 'click'
                    ? '0 0 10px rgba(255,255,255,0.6)'
                    : '0 0 4px rgba(255,255,255,0.3)',
              }}
            >
              {text}
            </motion.span>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Magnetic trail */}
      <motion.div
        className="fixed top-0 left-0 z-40 pointer-events-none select-none"
        style={{ translateX: trailX, translateY: trailY }}
      >
        <motion.div
          className="w-6 h-6 border rounded-full border-white/20"
          animate={{
            scale: cursorState === 'hover' ? 1.5 : cursorState === 'click' ? 1.8 : 1,
            borderColor:
              cursorState === 'click'
                ? 'rgba(255,255,255,0.7)'
                : 'rgba(255,255,255,0.2)',
          }}
          transition={{ type: 'spring', duration: 0.2 }}
        />
      </motion.div>

      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 z-30 pointer-events-none select-none"
        style={{ translateX: outerX, translateY: outerY }}
      >
        <motion.div
          className="w-10 h-10 border border-white/10 rounded-full"
          animate={{
            scale: cursorState === 'hover' ? 1.8 : cursorState === 'click' ? 2.1 : 1.2,
            rotate: cursorState !== 'default' ? 360 : 0,
          }}
          transition={{
            scale: { type: 'spring', duration: 0.3 },
            rotate: { duration: 3, repeat: Infinity, ease: 'linear' },
          }}
        />
      </motion.div>
    </>
  );
}
