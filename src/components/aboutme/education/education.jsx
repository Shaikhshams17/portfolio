"use client";
import React from "react";

const educationData = [
  {
    id: 1,
    institution: "Gharda Institute of Technology",
    degree: "B.Tech in Computer Science",
    year: "2020 - 2024",
    description: "8.9 CGPI",
  },
  {
    id: 2,
    institution: "HDA Junior College of Arts, Commerce, and Science",
    degree: "Higher Secondary Certificate",
    year: "2018 - 2020",
    description: "72%",
  },
  {
    id: 3,
    institution: "Iqra English Medium School",
    degree: "Secondary School Certificate",
    year: "2016 - 2018",
    description: "75%",
  },
];

const Education = () => {
  return (
    <div className="py-10 bg-black h-80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-10">
          Education
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationData.map((edu) => (
            <div
              key={edu.id}
              className="bg-red-600 rounded-2xl shadow-xl overflow-hidden p-6 hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-2xl font-semibold text-white mb-2">
                {edu.degree}
              </h3>
              <p className="text-white/80">{edu.institution}</p>
              <p className="text-white/70">{edu.year}</p>
              <p className="text-white mt-3">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
