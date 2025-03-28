import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function HeroBanner() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/7385841171", "_blank");
  };

  return (
    <div className="relative w-screen h-screen flex items-center justify-center px-4 sm:px-6 md:px-16 lg:px-24 overflow-hidden">
      {/* Background Video */}
      <video autoPlay loop muted className="absolute w-full h-full object-cover">
        <source src="/23.mp4" type="video/mp4" />
      </video>

      {/* Overlay with reduced opacity for better video visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>

      {/* Hero Content Wrapper */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center">
        {/* Hero Content (Centered in the middle of the video) */}
        <div className="text-white">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Hi,
          </motion.h1>
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold mt-2"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            I'm <span className="text-red-600">Shams Ali</span>
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl font-semibold mt-2"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.4 }}
          >
            Mern Stack Developer || DevOps Engineer
          </motion.p>
          <motion.button
            className="mt-6 px-6 py-3 bg-red-600 text-white rounded-lg font-bold hover:bg-black transition"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.6 }}
            onClick={handleWhatsAppClick}
          >
            Contact
          </motion.button>
        </div>
      </div>
    </div>
  );
}
