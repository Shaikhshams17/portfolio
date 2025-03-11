"use client";
import React from "react";
import { motion } from "framer-motion";

const experienceData = [
  {
    id: 1,
    company: "Nexcore Alliance LLP",
    role: "Mern Stack Developer || DevOps Engineer",
    year: "2024 - Present",
    description:
      "Contributed to various international projects, leveraging the MERN stack to build scalable and high-performance applications. Led the development of an Exam Portal, focusing on responsive UI/UX enhancements, API optimizations, and DevOps integrations for seamless deployment and scalability.",
  },
  {
    id: 2,
    company: "MarketIQ Junction",
    role: "UI/UX Designer",
    year: "2023 - 2024",
    description:
      "Worked on UI/UX design using Canva and Figma, creating visually appealing and user-friendly designs. Focused on enhancing user experiences and designing intuitive interfaces for various projects.",
  },
  {
    id: 3,
    company: "ISRC",
    role: "Web Developer Intern",
    year: "2022 - 2023",
    description:
      "Developed various projects using Next.js, Tailwind CSS, and Node.js, focusing on responsive and dynamic web applications.",
  },
];

const Experience = () => {
  return (
    <div className="py-10 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-10">
          Experience
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {experienceData.map((exp) => (
            // Outer container with perspective
            <div
              key={exp.id}
              className="w-full h-64"
              style={{ perspective: "1000px" }}
            >
              <motion.div
                className="relative w-full h-full"
                style={{ transformStyle: "preserve-3d" }}
                whileHover={{ rotateY: 180 }}
                transition={{ duration: 0.6 }}
              >
                {/* Front side */}
                <div
                  className="absolute inset-0 bg-red-600 p-6 rounded-2xl shadow-xl"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {exp.role}
                  </h3>
                  <p className="text-white/80">{exp.company}</p>
                  <p className="text-white/70">{exp.year}</p>
                </div>
                {/* Back side */}
                <div
                  className="absolute inset-0 bg-black bg-opacity-75 p-6 rounded-2xl shadow-xl flex items-center justify-center"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <p className="text-white text-center">{exp.description}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
