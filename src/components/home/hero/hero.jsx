import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

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

TypewriterText.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  delay: PropTypes.number,
};

export default function HeroBanner() {
  const [isMobile, setIsMobile] = useState(false);
  
  // Detect if the device is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768); // Consider devices with width less than 768px as mobile
    };
    
    // Check on initial load
    checkIfMobile();
    
    // Add event listener to check on resize
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/7385841171", "_blank");
  };

  return (
    <div className="relative w-screen h-screen flex items-center justify-center px-4 sm:px-6 md:px-16 lg:px-24 overflow-hidden">
      {/* Background Video for desktop, Image for mobile */}
      {isMobile ? (
        <img 
          src="/home.jpg" 
          alt="Mobile Background" 
          className="absolute w-full h-full object-cover"
        />
      ) : (
        <video autoPlay loop muted className="absolute w-full h-full object-cover">
          <source src="/23.mp4" type="video/mp4" />
        </video>
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-10" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-center w-full h-full text-left pl-4 sm:pl-6 md:pl-16 lg:pl-24 text-white">
        <TypewriterText
          text="Hi,"
          className="text-3xl sm:text-4xl md:text-5xl font-bold"
          delay={0}
        />
        <TypewriterText
          text="I'm Shams Ali"
          className="mt-2 text-4xl sm:text-5xl md:text-6xl font-bold"
          delay={0.8}
        />
        <TypewriterText
          text="Mern Stack Developer || DevOps Engineer"
          className="mt-2 text-lg sm:text-xl md:text-2xl font-semibold"
          delay={1.6}
        />
        <motion.button
          className="mt-6 px-6 py-3 bg-[#c0c81f] text-black rounded-lg font-bold hover:bg-black transition"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.4 }}
          onClick={handleWhatsAppClick}
        >
          Contact
        </motion.button>
      </div>
    </div>
  );
}