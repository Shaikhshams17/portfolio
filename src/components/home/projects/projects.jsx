import React, { useState } from "react";
import {
  Code, FileCode, Server, Database, PanelRight, Workflow, Laptop, Github,
  Users, ShoppingCart, Briefcase, MessageSquare, StickyNote, Film, Target,
  Gamepad, Car, ExternalLink
} from "lucide-react";

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const projectList = [
    {
      title: "Bounce Game",
      description: "A classic 2D ball bouncing game built using Python and Pygame on Pydroid3, featuring smooth controls and fun physics.",
      image: "/bouncegame.png",
      tech: ["Python", "Pygame", "Pydroid3", "Panda3D"],
      icon: <Gamepad className="w-6 h-6" />,
      github: "https://github.com/Shaikhshams17/Bounce-Game"
    },
    {
      title: "Social Media Platform",
      description: "A full-featured social media platform with real-time updates, user profiles, and content sharing built with MERN stack.",
      image: "/socialmedia.png",
      tech: ["MongoDB", "Express.js", "React", "Node.js", "Socket.io"],
      icon: <Users className="w-6 h-6" />,
      github: "https://github.com/Shaikhshams17/socialmedia"
    },
    {
      title: "Ghost Shooter",
      description: "A fast-paced 2D shooter game where players shoot ghosts and survive waves using Python and Pygame on Pydroid3.",
      image: "/shooter.png",
      tech: ["Python", "Pygame", "Pydroid3", "Panda3D"],
      icon: <Target className="w-6 h-6" />,
      github: "https://github.com/Shaikhshams17/Ghost-shooter"
    },
    {
      title: "AI Chatbot",
      description: "Intelligent chatbot with natural language processing capabilities built with Python and machine learning libraries.",
      image: "/projectchatbot.png",
      tech: ["Python", "NLTK", "TensorFlow", "Flask"],
      icon: <MessageSquare className="w-6 h-6" />,
      github: "https://github.com/Shaikhshams17/chatbot"
    },
    {
      title: "2D Racing Game",
      description: "Exciting 2D racing game built in Python using Pygame and Pydroid3, complete with lap tracking and responsive controls.",
      image: "/cargame.png",
      tech: ["Python", "Pygame", "Pydroid3", "Cocos3D"],
      icon: <Car className="w-6 h-6" />,
      github: "https://github.com/Shaikhshams17/2d-car-game"
    },
    {
      title: "Movie Platform",
      description: "Streaming platform with movie catalog, user ratings, watchlists, and recommendation engine.",
      image: "/movie.jpg",
      tech: ["MongoDB", "Express.js", "React", "Node.js", "TMDB API"],
      icon: <Film className="w-6 h-6" />,
      github: "https://github.com/Shaikhshams17/movie-platform"
    },
    {
      title: "Task Manager",
      description: "A powerful task and project management system designed for global collaboration, built using the MERN stack.",
      image: "/project1.png",
      tech: ["MongoDB", "Express.js", "React", "Node.js"],
      icon: <Workflow className="w-6 h-6" />,
      github: "https://github.com/Shaikhshams17/Task-manager-froentend"
    },
    {
      title: "Fire Detection System",
      description: "A real-time AI-based fire detection system using Python and OpenCV, capable of early fire detection and alerting.",
      image: "/project2.jpg",
      tech: ["Python", "OpenCV", "AI", "Computer Vision"],
      icon: <Code className="w-6 h-6" />,
      github: "https://github.com/Shaikhshams17/fire-detection-system"
    },
    {
      title: "My Portfolio",
      description: "I built my personal portfolio using Next.js 15 with the App Router, ensuring a modern, high-performance web experience.",
      image: "/project3.png",
      tech: ["Next.js", "React-icons", "Framer-Motion","Three.js","Gsap"],
      icon: <Laptop className="w-6 h-6" />,
      github: "https://github.com/Shaikhshams17/portfolio"
    }
  ];

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
    "Tailwind CSS": <PanelRight className="w-4 h-4" />,
    "Pygame": <Gamepad className="w-4 h-4" />,
    "Pydroid3": <Code className="w-4 h-4" />,
    "Panda3D": <Code className="w-4 h-4" />,
    "Cocos3D": <Code className="w-4 h-4" />
  };

  const handleGithubClick = (url) => {
    setIsLoading(true);
    window.open(url, '_blank', 'noopener,noreferrer');
    setTimeout(() => setIsLoading(false), 800);
  };

  return (
    <div 
      className="min-h-screen py-20 px-4 relative"
      style={{ 
        background: `linear-gradient(135deg, #1c2638 0%, #0f1419 50%, #1c2638 100%)` 
      }}
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Professional Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            A comprehensive showcase of technical expertise across full-stack development, 
            game development, and AI-powered solutions.
          </p>
        </div>

        {/* Professional Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Card Container */}
              <div 
                className="relative h-full rounded-2xl overflow-hidden border transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
                style={{ 
                  backgroundColor: hoveredProject === index ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.02)',
                  borderColor: hoveredProject === index ? 'rgba(59, 130, 246, 0.3)' : 'rgba(255,255,255,0.1)',
                  boxShadow: hoveredProject === index ? '0 25px 50px -12px rgba(0, 0, 0, 0.5)' : '0 10px 15px -3px rgba(0, 0, 0, 0.3)'
                }}
              >
                
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
                  <img
                    src={project.image || "/api/placeholder/400/320"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  
                  {/* Professional Icon */}
                  <div 
                    className="absolute top-4 left-4 z-20 p-3 rounded-xl shadow-lg transition-all duration-300 group-hover:scale-110"
                    style={{ backgroundColor: '#3b82f6' }}
                  >
                    <div className="text-white">
                      {project.icon}
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-5 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border transition-all duration-300 hover:scale-105"
                        style={{ 
                          backgroundColor: 'rgba(255,255,255,0.05)',
                          borderColor: 'rgba(255,255,255,0.1)',
                          color: '#e2e8f0'
                        }}
                      >
                        {techIcons[tech]}
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Professional Action Button */}
                  <button
                    onClick={() => handleGithubClick(project.github)}
                    disabled={isLoading}
                    className="group/btn relative w-full py-3 px-4 rounded-xl font-medium text-white transition-all duration-300 hover:shadow-lg active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                    style={{ 
                      backgroundColor: '#3b82f6',
                      boxShadow: hoveredProject === index ? '0 10px 25px rgba(59, 130, 246, 0.3)' : 'none'
                    }}
                  >
                    {/* Button hover effect */}
                    <div 
                      className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover/btn:opacity-100"
                      style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                    ></div>
                    
                    <span className="relative flex items-center justify-center gap-2.5">
                      {isLoading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Loading...
                        </>
                      ) : (
                        <>
                          <Github className="w-4 h-4" />
                          View Source Code
                          <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                        </>
                      )}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Professional Footer */}
        <div className="text-center mt-16">
          <div 
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full border text-gray-300 text-sm"
            style={{ 
              backgroundColor: 'rgba(255,255,255,0.02)',
              borderColor: 'rgba(255,255,255,0.1)'
            }}
          >
            <Github className="w-4 h-4" />
            <span>Explore more projects on GitHub</span>
          </div>
        </div>
      </div>
    </div>
  );
}