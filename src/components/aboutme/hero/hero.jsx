import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin, FaGithub, FaInstagram, FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const calculateTransform = (depth = 1) => {
    if (typeof window === 'undefined' || !isMounted) return { x: 0, y: 0 };
    
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    const moveX = (mousePosition.x - centerX) / (100 / depth);
    const moveY = (mousePosition.y - centerY) / (100 / depth);
    
    return { x: moveX, y: moveY };
  };

  const socialLinks = [
    { icon: FaLinkedin, url: "https://www.linkedin.com/in/shams-ali-shaikh-27194425a", color: "bg-blue-600" },
    { icon: FaGithub, url: "https://github.com/Shaikhshams17", color: "bg-gray-800" },
    { icon: FaInstagram, url: "https://www.instagram.com/shamsss_17", color: "bg-pink-600" },
  ];

  // Variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-indigo-950 to-purple-900 py-16 md:py-0 min-h-screen flex items-center justify-center">
      {/* Particle/Blob effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-indigo-600/10 filter blur-3xl mix-blend-overlay"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-purple-600/10 filter blur-3xl mix-blend-overlay"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-violet-800/5 to-transparent"></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>

      {/* Background Image with overlay */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Image
          src="/about-bg.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className="opacity-20 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-indigo-900/50 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <motion.div 
          className="w-full md:w-1/2 md:pr-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="inline-block mb-3 px-4 py-1.5 rounded-full bg-indigo-900/50 border border-indigo-500/20 backdrop-blur-sm"
            variants={itemVariants}
          >
            <span className="text-indigo-300 text-sm font-medium">Mern Stack Developer || DevOps Engineer</span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            variants={itemVariants}
          >
            Hello, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Shams Ali Shaikh
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-lg text-gray-300/90 leading-relaxed mb-8 max-w-xl"
            variants={itemVariants}
          >
            I specialize in modern web development as a MERN stack developer and DevOps engineer, building responsive websites and scalable web applications with clean architecture, efficient workflows, and cutting-edge technologies.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-3 mb-10"
            variants={itemVariants}
          >
            {socialLinks.map((social, index) => (
              <Link href={social.url} key={index} target="_blank" rel="noopener noreferrer">
                <motion.div 
                  className={`w-12 h-12 rounded-lg flex items-center justify-center ${social.color} hover:scale-110 transition-all duration-300 shadow-lg`}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={22} className="text-white" />
                </motion.div>
              </Link>
            ))}
          </motion.div>
          
          <motion.div 
            className="flex flex-wrap gap-4"
            variants={itemVariants}
          >
            <motion.a
              href="/contact"
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium flex items-center gap-2 hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me <FaArrowRight size={16} />
            </motion.a>
            
            {/* <motion.a
              href="/#projects"
              className="px-8 py-3 rounded-lg border border-indigo-500/30 bg-indigo-900/20 backdrop-blur-sm text-white font-medium hover:bg-indigo-800/20 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a> */}
          </motion.div>
        </motion.div>
        
        {/* Right Content - Image */}
        <motion.div 
          className="w-full md:w-1/2 flex justify-center mt-16 md:mt-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          style={{
            x: calculateTransform(2).x,
            y: calculateTransform(2).y,
          }}
        >
          <div className="relative">
            {/* Decorative elements */}
            <motion.div 
              className="absolute -z-10 w-80 h-80 rounded-full bg-gradient-to-r from-indigo-600/20 to-purple-600/20 filter blur-2xl"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.5, 0.8, 0.5],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              style={{
                x: calculateTransform(1).x * -0.5,
                y: calculateTransform(1).y * -0.5,
              }}
            />
          
            {/* Profile image container */}
            <div className="relative">
              {/* Rotating border effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 p-1 -m-1 blur-sm animate-spin-slow"></div>
              
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full border-2 border-indigo-500/30 overflow-hidden shadow-2xl shadow-indigo-500/20 backdrop-blur-sm bg-indigo-900/20">
                <Image
                  src="/shamsali.jpg" 
                  alt="Shams Ali Shaikh"
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                  priority
                  className="z-0"
                />
                
                {/* Glass reflection effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-60 z-10"></div>
              </div>
            </div>
            
            {/* Small decorative circles */}
            <motion.div 
              className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-indigo-600/30 border border-indigo-500/30 backdrop-blur-sm"
              animate={{
                y: [0, -10, 0],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              style={{
                x: calculateTransform(4).x,
                y: calculateTransform(4).y + 10,
              }}
            />
            
            <motion.div 
              className="absolute -top-6 -right-6 w-16 h-16 rounded-full bg-purple-600/30 border border-purple-500/30 backdrop-blur-sm"
              animate={{
                y: [0, 10, 0],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 1,
              }}
              style={{
                x: calculateTransform(4).x * -1,
                y: calculateTransform(4).y * -1 - 10,
              }}
            />
          </div>
        </motion.div>
      </div>
      
      {/* Code-inspired decorations */}
      <div className="absolute bottom-8 left-8 text-indigo-500/30 font-mono text-xs hidden md:block">
        &lt;hero&gt;
      </div>
      <div className="absolute bottom-4 left-8 text-indigo-500/30 font-mono text-xs hidden md:block">
        &lt;/hero&gt;
      </div>
    </section>
  );
};

// Add this to your global CSS
// .bg-grid-pattern {
//   background-image: 
//     linear-gradient(to right, rgb(99 102 241 / 10%) 1px, transparent 1px),
//     linear-gradient(to bottom, rgb(99 102 241 / 10%) 1px, transparent 1px);
//   background-size: 24px 24px;
// }
// 
// @keyframes spin-slow {
//   from {
//     transform: rotate(0deg);
//   }
//   to {
//     transform: rotate(360deg);
//   }
// }
// 
// .animate-spin-slow {
//   animation: spin-slow 12s linear infinite;
// }

export default Hero;