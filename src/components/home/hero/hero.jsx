import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// TypewriterText component
const typingContainer = {
  hidden: { opacity: 1 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: delay,
    },
  }),
};

const typingLetter = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function TypewriterText({ text, className = "", delay = 0 }) {
  return (
    <motion.div
      className={`${className} inline-block overflow-hidden`}
      variants={typingContainer}
      initial="hidden"
      animate="visible"
      custom={delay}
    >
      {Array.from(text).map((char, i) => (
        <motion.span key={i} variants={typingLetter}>
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
}

// Interactive SVG Wave Background
function WaveBackground({ mousePosition }) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  
  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const createWavePath = (offset = 0, amplitude = 50, frequency = 0.005, mouseInfluence = 0.3) => {
    if (!dimensions.width) return "";
    
    let path = `M0,${dimensions.height * 0.7 + offset}`;
    
    for (let x = 0; x <= dimensions.width; x += 10) {
      const mouseDistance = Math.abs(mousePosition.x - x);
      const mouseEffect = Math.max(0, 100 - mouseDistance / 5) * mouseInfluence;
      
      const baseWave = Math.sin(x * frequency + Date.now() * 0.001) * amplitude;
      const mouseWave = Math.sin(mouseDistance * 0.01) * mouseEffect;
      
      const y = dimensions.height * 0.7 + offset + baseWave + mouseWave;
      path += ` L${x},${y}`;
    }
    
    path += ` L${dimensions.width},${dimensions.height} L0,${dimensions.height} Z`;
    return path;
  };

  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg 
        width="100%" 
        height="100%" 
        className="absolute inset-0"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(28, 38, 56, 0.9)" />
            <stop offset="100%" stopColor="rgba(28, 38, 56, 0.3)" />
          </linearGradient>
          <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(28, 38, 56, 0.7)" />
            <stop offset="100%" stopColor="rgba(28, 38, 56, 0.1)" />
          </linearGradient>
          <linearGradient id="waveGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(28, 38, 56, 0.5)" />
            <stop offset="100%" stopColor="rgba(28, 38, 56, 0.05)" />
          </linearGradient>
          <filter id="glow">
            <feMorphology operator="dilate" radius="2"/>
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Background waves */}
        <motion.path
          d={createWavePath(100, 40, 0.003, 0.2)}
          fill="url(#waveGradient1)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
        
        <motion.path
          d={createWavePath(50, 60, 0.004, 0.4)}
          fill="url(#waveGradient2)"
          filter="url(#glow)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
        />
        
        <motion.path
          d={createWavePath(0, 30, 0.006, 0.6)}
          fill="url(#waveGradient3)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
        />
      </svg>
    </div>
  );
}

// Main Hero Component
export default function SimplifiedHeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/7385841171", "_blank");
  };

  return (
    <div className="relative w-screen h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Interactive Wave Background */}
      <WaveBackground mousePosition={mousePosition} />
      
      {/* Main Content */}
      <div className="relative z-30 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen py-20">
          {/* Left Content */}
          <motion.div 
            className="flex flex-col justify-center space-y-6 lg:space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {/* Status Badge */}
            <motion.div 
              className="flex items-center space-x-4 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {/* <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#1c2638] to-transparent"></div>
              <span className="px-4 py-2 bg-[#1c2638]/10 border border-[#1c2638]/30 rounded-full text-[#1c2638] text-sm font-medium backdrop-blur-sm">
                Available for Work
              </span> */}
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#1c2638] to-transparent"></div>
            </motion.div>
            
            {/* Main Heading */}
            <div className="space-y-4">
              <TypewriterText
                text="Hello, I'm"
                className="text-2xl sm:text-3xl lg:text-4xl font-light text-white/80"
                delay={0.8}
              />
              
              <TypewriterText
                text="Shams Ali"
                className="text-3xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold bg-white bg-clip-text text-transparent"
                delay={1.2}
              />
              
              <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                {/* <div className="h-1 w-20 bg-gradient-to-r from-[#1c2638] to-transparent"></div> */}
                <TypewriterText
                  text="Full Stack Developer & DevOps Engineer"
                  className="text-xl sm:text-2xl lg:text-3xl font-medium text-white/90"
                  delay={1.8}
                />
              </div>
            </div>
            
            {/* Description */}
            <motion.p
              className="text-lg lg:text-xl text-gray-300 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.4 }}
            >
              Crafting exceptional digital experiences with modern technologies. 
              Specializing in React, Node.js, cloud architecture, and seamless DevOps workflows.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.8 }}
            >
              <motion.button
                className="group px-8 py-4 bg-gradient-to-r from-[#1c2638] to-[#243244] text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-[#1c2638]/25 transition-all duration-300 transform hover:scale-105"
                onClick={handleWhatsAppClick}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>Let's Connect</span>
                  <motion.span
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  >
                    →
                  </motion.span>
                </span>
              </motion.button>
              
              {/* <motion.button
                className="px-8 py-4 border-2 border-white/20 text-white font-bold rounded-xl hover:border-[#1c2638] hover:text-[#1c2638] hover:shadow-xl hover:shadow-[#1c2638]/10 transition-all duration-300 backdrop-blur-sm"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                View Portfolio
              </motion.button> */}
            </motion.div>
          </motion.div>
          
          {/* Right Content - Empty space for balance */}
          <div className="hidden lg:block"></div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className=" bottom-8 left-1/2 transform -translate-x-1/2 z-40 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 4 }}
      >
        {/* <motion.div
          className="text-white/60 text-sm mb-4 font-light tracking-wider"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          SCROLL TO EXPLORE
        </motion.div> */}
        
        <motion.div 
          className="w-6 h-12 rounded-full border-2 border-white/30 relative overflow-hidden cursor-pointer group hover:border-[#1c2638]/60 transition-colors duration-300"
          whileHover={{ scale: 1.1 }}
        >
          <motion.div 
            className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1 h-3 bg-gradient-to-b from-[#1c2638] to-transparent rounded-full"
            animate={{ 
              y: [0, 16, 0],
              opacity: [1, 0.3, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
        
        <motion.div
          className="w-px h-16 bg-gradient-to-b from-white/30 to-transparent mt-4"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, delay: 4.5 }}
        />
      </motion.div>
    </div>
  );
}