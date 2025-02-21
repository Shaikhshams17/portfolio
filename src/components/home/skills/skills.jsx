import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    { title: "MongoDB", img: "/7.png" },
    { title: "Express.js", img: "/expressjs.webp" },
    { title: "React.js", img: "/11.png" },
    { title: "Next.js", img: "/8.png" },
    { title: "Node.js", img: "/9.png" },
    { title: "Git & Github", img: "/6.png" },
    { title: "Docker", img: "/3.png" },
    { title: "AWS", img: "/2.png" },
    { title: "Tailwind CSS", img: "/12.png" },
    { title: "Figma", img: "/1.png" },
    { title: "Firebase", img: "/5.png" },
    { title: "Python", img: "/10.png" },
  ];

  return (
    <div className="bg-black min-h-screen py-16 flex flex-col items-center">
      <motion.h2
        className="text-5xl font-extrabold text-white mb-12 uppercase tracking-wide"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1 }}
      >
        My Skills
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
        }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-red-600 text-white p-8 rounded-3xl shadow-2xl flex flex-col items-center 
              transform transition-all duration-500 hover:scale-110 hover:-translate-y-2 hover:bg-white hover:text-black 
              backdrop-blur-lg bg-opacity-90 border border-red-700"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            <motion.img
              src={skill.img}
              alt={skill.title}
              className="w-24 h-24 object-contain mb-6"
              whileHover={{ scale: 1.2, rotate: 10 }}
            />
            <h3 className="text-2xl font-bold">{skill.title}</h3>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
