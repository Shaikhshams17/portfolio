import { motion } from "framer-motion";
import React, { useState } from "react";
import { Code, FileCode, Server, Database, PanelRight, Workflow, Laptop, Github, Users, ShoppingCart, Briefcase, MessageSquare, StickyNote, Film } from "lucide-react";

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);
  
  const projectList = [
    {
      title: "Social Media Platform",
      description:
        "A full-featured social media platform with real-time updates, user profiles, and content sharing built with MERN stack.",
      image: "/social-media.jpg", 
      tech: ["MongoDB", "Express.js", "React", "Node.js", "Socket.io"],
      icon: <Users className="w-6 h-6" />,
      github: "#",
      demo: "#"
    },
    {
      title: "E-Commerce Website",
      description:
        "Complete e-commerce solution with product catalog, shopping cart, user authentication, and payment processing.",
      image: "/ecommerce.jpg",
      tech: ["MongoDB", "Express.js", "React", "Node.js", "Stripe"],
      icon: <ShoppingCart className="w-6 h-6" />,
      github: "#",
      demo: "#"
    },
    {
      title: "Job Portal",
      description:
        "Job search platform with advanced filtering, applicant tracking, and employer dashboards using Next.js and Django.",
      image: "/job-portal.jpg",
      tech: ["Next.js", "Django", "PostgreSQL", "Tailwind CSS"],
      icon: <Briefcase className="w-6 h-6" />,
      github: "#",
      demo: "#"
    },
    {
      title: "AI Chatbot",
      description:
        "Intelligent chatbot with natural language processing capabilities built with Python and machine learning libraries.",
      image: "/chatbot.jpg",
      tech: ["Python", "NLTK", "TensorFlow", "Flask"],
      icon: <MessageSquare className="w-6 h-6" />,
      github: "#",
      demo: "#"
    },
    {
      title: "Note Taking App",
      description:
        "Markdown-enabled note taking application with cloud sync, organization features, and rich text editing.",
      image: "/notes-app.jpg",
      tech: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
      icon: <StickyNote className="w-6 h-6" />,
      github: "#",
      demo: "#"
    },
    {
      title: "Movie Platform",
      description:
        "Streaming platform with movie catalog, user ratings, watchlists, and recommendation engine.",
      image: "/movie-platform.jpg",
      tech: ["MongoDB", "Express.js", "React", "Node.js", "TMDB API"],
      icon: <Film className="w-6 h-6" />,
      github: "#",
      demo: "#"
    },
    {
      title: "Task Manager",
      description:
        "A powerful task and project management system designed for global collaboration, built using the MERN stack.",
      image: "/project1.png", 
      tech: ["MongoDB", "Express.js", "React", "Node.js"],
      icon: <Workflow className="w-6 h-6" />,
      github: "#",
      demo: "#"
    },
    {
      title: "Fire Detection System",
      description:
        "A real-time AI-based fire detection system using Python and OpenCV, capable of early fire detection and alerting.",
      image: "/project2.jpg",
      tech: ["Python", "OpenCV", "AI", "Computer Vision"],
      icon: <Code className="w-6 h-6" />,
      github: "#",
      demo: "#"
    },
    {
      title: "My-Portfolio",
      description:
        "I built my personal portfolio using Next.js 15 with the App Router, ensuring a modern, high-performance web experience.",
      image: "/project3.png",
      tech: ["Next.js", "React-icons", "Framer-Motion"],
      icon: <Laptop className="w-6 h-6" />,
      github: "#",
      demo: "#"
    },
  ];

  // Icon mapping for tech stack
  const techIcons = {
    "MongoDB": <Database className="w-4 h-4" />,
    "Express.js": <Server className="w-4 h-4" />,
    "React": <Code className="w-4 h-4" />,
    "Node.js": <FileCode className="w-4 h-4" />,
    "Python": <Code className="w-4 h-4" />,
    "OpenCV": <PanelRight className="w-4 h-4" />,
    "AI": <Workflow className="w-4 h-4" />,
    "Computer Vision": <Code className="w-4 h-4" />,
    "Next.js": <Code className="w-4 h-4" />,
    "React-icons": <Code className="w-4 h-4" />,
    "Framer-Motion": <Code className="w-4 h-4" />,
    "Socket.io": <Workflow className="w-4 h-4" />,
    "Stripe": <FileCode className="w-4 h-4" />,
    "Django": <Server className="w-4 h-4" />,
    "PostgreSQL": <Database className="w-4 h-4" />,
    "NLTK": <Workflow className="w-4 h-4" />,
    "TensorFlow": <Workflow className="w-4 h-4" />,
    "Flask": <Server className="w-4 h-4" />,
    "TypeScript": <Code className="w-4 h-4" />,
    "Firebase": <Database className="w-4 h-4" />,
    "TMDB API": <Workflow className="w-4 h-4" />,
    "Tailwind CSS": <PanelRight className="w-4 h-4" />
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="bg-gradient-to-b from-[#1a2a31] to-[#29414a] min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="inline-block text-5xl font-bold text-white mb-4 relative">
            <span className="relative z-10">My Projects</span>
            <span className="absolute bottom-0 left-0 w-full h-3 bg-blue-500 opacity-30 rounded-md transform -rotate-1"></span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            A collection of my recent work and passion projects across various technologies
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectList.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              className="relative rounded-xl overflow-hidden group"
            >
              <div className="relative h-full bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:translate-y-2 border border-gray-700">
                {/* Card Header with Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                  <img
                    src={project.image || "/api/placeholder/400/320"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 z-10 bg-blue-600 p-2 rounded-lg">
                    {project.icon}
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-5 text-sm">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center text-xs gap-1 bg-gray-700 text-gray-200 px-3 py-1 rounded-full"
                      >
                        {techIcons[tech]}
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  {/* <div className="flex gap-3 pt-3 border-t border-gray-700">
                    {project.github && (
                      <motion.a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors"
                      >
                        <Github size={16} />
                        View Code
                      </motion.a>
                    )}
                    {project.demo && (
                      <motion.a 
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-sm font-medium transition-colors"
                      >
                        Live Demo
                      </motion.a>
                    )}
                  </div> */}
                </div>
                
                {/* Animated highlight effect */}
                <motion.div 
                  className="absolute inset-0 border-2 border-blue-500 rounded-xl opacity-0 z-0"
                  animate={{ 
                    opacity: hoveredProject === index ? 0.4 : 0,
                    scale: hoveredProject === index ? 1 : 0.95,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}