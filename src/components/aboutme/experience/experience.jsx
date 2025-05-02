"use client";
import React from "react";
import { motion } from "framer-motion";

const experienceData = [
  // ... (keep your existing experienceData array)
  {
    id: 1,
    company: "Nexcore Alliance LLP",
    role: "Project Manager",
    year: "2024 - Present",
    description:
      "Led international projects, managing cross-functional teams to deliver scalable solutions. Oversaw the Exam Portal development, optimizing UI/UX, workflows, and DevOps for seamless deployment. Ensured stakeholder alignment and on-time delivery.",
  },
  {
    id: 2,
    company: "Nexcore Alliance LLP",
    role: "Mern Stack Developer || DevOps Engineer",
    year: "2024 - Present",
    description:
      "Contributed to various international projects, leveraging the MERN stack to build scalable and high-performance applications. Led the development of an Exam Portal, focusing on responsive UI/UX enhancements, API optimizations, and DevOps integrations for seamless deployment and scalability.",
  },
  {
    id: 3,
    company: "MarketIQ Junction",
    role: "UI/UX Designer",
    year: "2023 - 2024",
    description:
      "Worked on UI/UX design using Canva and Figma, creating visually appealing and user-friendly designs. Focused on enhancing user experiences and designing intuitive interfaces for various projects.",
  },
  {
    id: 4,
    company: "ISRC",
    role: "Web Developer Intern",
    year: "2022 - 2023",
    description:
      "Developed various projects using Next.js, Tailwind CSS, and Node.js, focusing on responsive and dynamic web applications.",
  },
];

const Experience = () => {
  return (
    <div className="py-20 bg-gradient-to-b from-[#1a2a32] to-[#284049] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/5"
            initial={{
              x: Math.random() * 100,
              y: Math.random() * 100,
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              opacity: 0.1
            }}
            animate={{
              x: [null, Math.random() * 100 - 50],
              y: [null, Math.random() * 100 - 50],
              opacity: [0.1, 0.15, 0.1]
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          className="text-5xl font-bold text-center text-white mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Professional Journey
          </span>
        </motion.h2>

        <div className="relative">
          {/* Timeline center line */}
          <div className="absolute left-1/2 h-full w-1 bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent hidden lg:block transform -translate-x-1/2"></div>

          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="relative mb-16 lg:mb-28"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div
                className={`flex flex-col lg:flex-row items-start gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Animated year indicator */}
                <motion.div
                  className="lg:w-1/4 relative"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 p-6 rounded-2xl border border-cyan-400/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10"></div>
                    <p className="text-cyan-300 text-lg font-medium">{exp.year}</p>
                    <p className="text-white/80 text-sm mt-1">{exp.company}</p>
                    <div className="absolute -right-2 -top-2 h-4 w-4 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/30"></div>
                  </div>
                </motion.div>

                {/* Main experience card */}
                <motion.div
                  className={`lg:w-3/4 relative group ${
                    index % 2 === 0 ? "lg:pr-8" : "lg:pl-8"
                  }`}
                  whileHover={{ y: -5 }}
                >
                  <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 p-8 rounded-2xl border border-gray-700/50 shadow-2xl relative overflow-hidden">
                    {/* Decorative elements */}
                    <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-500/10 blur-xl"></div>
                    <div className="absolute -left-10 -bottom-10 h-32 w-32 rounded-full bg-cyan-500/10 blur-xl"></div>
                    
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold text-white mb-3 flex items-center">
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                          {exp.role}
                        </span>
                        <motion.span
                          className="ml-3 text-cyan-400"
                          animate={{ rotate: [0, 15, 0] }}
                          transition={{
                            repeat: Infinity,
                            repeatType: "mirror",
                            duration: 2,
                            delay: index * 0.5
                          }}
                        >
                          →
                        </motion.span>
                      </h3>
                      
                      <motion.p
                        className="text-gray-300 leading-relaxed"
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1 }}
                      >
                        {exp.description}
                      </motion.p>
                      
                      {/* <motion.div
                        className="mt-6 flex flex-wrap gap-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        <span className="px-3 py-1 bg-cyan-900/30 text-cyan-300 rounded-full text-xs border border-cyan-800/50">
                          Leadership
                        </span>
                        <span className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-xs border border-blue-800/50">
                          Development
                        </span>
                        <span className="px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full text-xs border border-purple-800/50">
                          Innovation
                        </span>
                      </motion.div> */}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;