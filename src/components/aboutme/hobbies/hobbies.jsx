"use client";
import React from "react";

const hobbies = [
  "Web Development",
  "Reading Books",
  "E-sports & Gaming",
  "Circket",
  "Football",
  "MMA",
  "Boxing",
];

const Hobbies = () => {
  return (
    <div className="py-10 bg-gradient-to-b from-black to-gray-600 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-10">
          Hobbies/ Things I like
        </h2>
        <div className="flex flex-col items-center">
          <ul className="w-full max-w-3xl bg-gray-800 rounded-2xl shadow-xl p-6">
            {hobbies.map((hobby, index) => (
              <li
                key={index}
                className="bg-red-600 text-white text-lg font-medium py-3 px-5 rounded-xl mb-3 last:mb-0 hover:scale-105 transition-transform duration-300"
              >
                {hobby}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
