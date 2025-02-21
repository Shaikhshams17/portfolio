"use client";
import React from "react";

const experienceData = [
  {
    id: 1,
    company: "Nexcore Alliance LLP",
    role: "Frontend Developer",
    year: "2024 - Present",
    description:
      "Working on the Exam Portal project using the MERN stack, building responsive user interfaces and enhancing user experience.",
  },
  {
    id: 2,
    company: "MarketIQ Junction",
    role: "Bootcamp Trainer",
    year: "2023 - 2024",
    description:
      "Conducted bootcamps on Canva, Figma, SEO, video editing, and social media management while providing 1-on-1 consulting sessions.",
  },
  {
    id: 3,
    company: "Freelance",
    role: "Web Developer",
    year: "2022 - 2023",
    description:
      "Developed various projects using Next.js, Tailwind CSS, and Node.js, focusing on responsive and dynamic web applications.",
  },
];

const Experience = () => {
  return (
    <div className="py-10 bg-black h-96">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-10">
          Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experienceData.map((exp) => (
            <div
              key={exp.id}
              className="bg-red-600 rounded-2xl shadow-xl overflow-hidden p-6 hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-2xl font-semibold text-white mb-2">
                {exp.role}
              </h3>
              <p className="text-white/80">{exp.company}</p>
              <p className="text-white/70">{exp.year}</p>
              <p className="text-white mt-3">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
