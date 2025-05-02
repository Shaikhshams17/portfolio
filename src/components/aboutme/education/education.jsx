"use client";
import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, School, BookOpen } from "lucide-react";

const educationData = [
  {
    id: 1,
    institution: "Gharda Institute of Technology",
    degree: "B.Tech in Computer Science",
    year: "2020 - 2024",
    description: "8.9 CGPI",
    Icon: GraduationCap,
    highlights: [
    "Skilled in MERN stack development",
    "Experienced in CI/CD and cloud DevOps",
    "Led developer team for campus app"
    ]
  },
  {
    id: 2,
    institution: "HDA Junior College",
    degree: "Higher Secondary Certificate",
    year: "2018 - 2020",
    description: "72%",
    Icon: School,
    highlights: [
      "Computer Science focus",
      "Mathematics Olympiad participant",
      "Developed first web projects"
    ]
  },
  {
    id: 3,
    institution: "Iqra English Medium School",
    degree: "Secondary School Certificate",
    year: "2016 - 2018",
    description: "75%",
    Icon: BookOpen,
    highlights: [
      "Early programming experiments",
      "Science fair robotics winner",
      "Mathematics proficiency awards"
    ]
  },
];

const Education = () => {
  return (
    <section className="py-24 bg-gray-800 relative overflow-hidden">
      {/* Floating tech elements */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className="absolute text-white"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 20 + 10}px`,
              opacity: 0.3
            }}
          >
            {['</>', '{ }', '();', '=>', '#'][i % 5]}
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-4">
            Code of Learning
          </h2>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto">
            How academic foundations shaped my technical evolution
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {educationData.map((edu, index) => {
            const { Icon } = edu;
            return (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Hexagonal card */}
                <div className="relative h-full before:absolute before:inset-0 before:bg-gradient-to-br before:from-cyan-900/30 before:to-blue-900/30 before:clip-hexagon">
                  <div className="relative z-10 p-8 h-full flex flex-col">
                    <div className="mb-6 flex items-center gap-4">
                      <div className="p-3 rounded-full bg-cyan-500/10 text-cyan-400">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                        <p className="text-blue-300 text-sm">{edu.year}</p>
                      </div>
                    </div>

                    <h4 className="text-lg font-medium text-cyan-200 mb-4">
                      {edu.institution}
                    </h4>

                    <div className="flex items-center mb-6">
                      <span className="text-2xl font-bold text-white mr-3">
                        {edu.description}
                      </span>
                      <div className="h-px flex-1 bg-blue-900/50"></div>
                    </div>

                    <ul className="space-y-3 flex-1">
                      {edu.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start">
                          <div className="flex-shrink-0 mt-1 mr-3 w-2 h-2 rounded-full bg-cyan-400"></div>
                          <span className="text-blue-100">{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech tag cloud */}
                    {/* <div className="mt-6 flex flex-wrap gap-2">
                      {[
                        'JavaScript',
                        'Python',
                        'ML',
                        'Cloud',
                        'Research'
                      ].map((tag, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 text-xs rounded-full bg-blue-900/30 text-blue-300 border border-blue-800/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div> */}
                  </div>
                </div>

                {/* Floating connection lines */}
                {index < educationData.length - 1 && (
                  <div className="hidden md:block absolute -right-8 top-1/2 w-16 h-1 bg-gradient-to-r from-cyan-400/30 to-transparent"></div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Interactive background */}
        <div className="absolute left-0 right-0 bottom-0 h-64 bg-gradient-to-t from-cyan-900/10 to-transparent pointer-events-none"></div>
      </div>

      {/* Custom shape clipping */}
      <style jsx global>{`
        .clip-hexagon {
          clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
        }
      `}</style>
    </section>
  );
};

export default Education;