import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative flex items-center justify-between py-20 px-10 text-white h-screen">
      {/* Background Image as Image Tag */}
      <img
        src="https://4kwallpapers.com/images/walls/thumbs_3t/791.jpg"
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      <div className="relative z-10 flex w-full items-center justify-between">
        {/* Left Section (Text Content) */}
        <div className="w-1/2">
          <motion.h1
            className="text-6xl font-extrabold leading-tight"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Hello, my name is <span className="text-red-600">Shams Ali Shaikh</span>
          </motion.h1>

          <motion.p
            className="mt-4 text-lg text-gray-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            I specialize in modern web development, crafting responsive websites and powerful web applications. Let’s build something amazing together.
          </motion.p>

          <div className="mt-6">
            {/* <motion.a
              href="#"
              className="mr-4 inline-block px-6 py-2 bg-red-500 text-white rounded-full hover:bg-gray-400 transition"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4 }}
            >
              Projects
            </motion.a> */}
            <motion.a
              href="https://www.linkedin.com/in/shams-ali-shaikh-27194425a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="inline-block px-6 py-2 bg-red-600 text-white rounded-full hover:bg-gray-400 transition"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.6 }}
            >
              LinkedIn
            </motion.a>
          </div>
        </div>

        {/* Right Section (Image) */}
        <motion.div
          className="w-1/3 flex justify-center items-center"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <img
            src="/ali.jpg"  // Replace with your image path
            alt="Shams Ali Shaikh"
            className="w-80 h-80 object-cover rounded-full shadow-xl border-4 border-white"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
