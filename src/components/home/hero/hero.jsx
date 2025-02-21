import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function HeroBanner() {
  return (
    <div className="relative w-screen h-screen flex items-center justify-center px-6 md:px-16 lg:px-24 overflow-hidden">
      {/* Background Video */}
      <video autoPlay loop muted className="absolute w-full h-full object-cover">
        <source src="/17.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Hero Content Wrapper */}
      <div className="relative z-10 flex items-center justify-between w-full h-full">
        {/* Profile Image (Left Side) */}
        <motion.div
          className="w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 lg:w-72 lg:h-72 bg-white bg-opacity-0  p-2 rounded-xl shadow-lg flex-shrink-0"
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
        <div className="flex-grow flex flex-col items-end text-white text-right w-full max-w-xl">
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
            className="text-lg sm:text-2xl md:text-2xl font-semibold mt-2"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.4 }}
          >
            MERN Stack Developer || DevOps Engineer
          </motion.p>
          <motion.button
            className="mt-6 px-6 py-3 bg-red-600 text-white rounded-lg font-bold hover:bg-red-600 transition"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.6 }}
          >
            Contact
          </motion.button>
        </div>
      </div>
    </div>
  );
}
