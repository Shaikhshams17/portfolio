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
        <source src="/17.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Hero Content Wrapper */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full h-full">
        {/* Profile Image (Left Side) */}
        <motion.div
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-60 md:h-60 lg:w-72 lg:h-72 bg-white bg-opacity-0 p-2 rounded-xl shadow-lg flex-shrink-0"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          {/* <Image
            src="/ali.jpg" // Replace with your actual image path
            alt="Shams"
            width={300}
            height={300}
            className="rounded-lg object-cover w-full h-full"
          /> */}
        </motion.div>

        {/* Hero Content (Right Side) */}
        <div className="flex-grow flex flex-col items-center md:items-end text-white text-center md:text-right w-full max-w-xl mt-6 md:mt-0">
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
            MERN Stack Developer || DevOps Engineer
          </motion.p>
          <motion.button
            className="mt-6 px-6 py-3 bg-red-600 text-white rounded-lg font-bold hover:bg-red-700 transition"
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
