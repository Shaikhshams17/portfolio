import { motion } from "framer-motion";
import React from "react";

export default function Projects() {
  const projectList = [
    {
      title: "Task Manager",
      description:
        "A powerful task and project management system designed for global collaboration, built using the MERN stack.",
      image: "/project1.png", // Replace with actual image path
      tech: ["MongoDB", "Express.js", "React", "Node.js"],

    },
    {
      title: "Fire Detection System",
      description:
        "A real-time AI-based fire detection system using Python and OpenCV, capable of early fire detection and alerting.",
      image: "/project2.jpg", // Replace with actual image path
      tech: ["Python", "OpenCV", "AI", "Computer Vision"],

    },
    {
      title: "My-Portfolio",
      description:
        "I built my personal portfolio using Next.js 15 with the App Router, ensuring a modern, high-performance web experience..",
      image: "/project3.png", // Replace with actual image path
      tech: [ "Next.js", "React-icons", "Framer-Motion"],
    },
  ];

  return (
    <div className="bg-[#29414a]  min-h-screen py-16 flex flex-col items-center">
      <h2 className="text-5xl font-extrabold text-white mb-12 uppercase tracking-wide">
        My Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 max-w-6xl">
        {projectList.map((project, index) => (
          <motion.div
            key={index}
            className="bg-[#c9c8cb] text-black p-6 rounded-3xl shadow-xl flex flex-col items-center 
              transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.3 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-52 object-cover rounded-xl mb-6"
            />
            <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
            <p className="text-lg text-center mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-3 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-[#c0c81f] text-black px-4 py-2 rounded-lg font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
            {/* <a
              href={project.link}
              className="px-6 py-3 bg-red-600 text-white rounded-lg font-bold hover:bg-red-700 transition"
            >
              View Project
            </a> */}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
