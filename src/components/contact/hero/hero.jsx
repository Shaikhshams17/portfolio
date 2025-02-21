"use client";
import React from "react";

const HeroBanner = () => {
  return (
    <div className="relative w-full h-[100vh]">
      <img
        src="/contactbg.jpg"
        alt="Hero Background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center">
        <h1 className="text-6xl font-bold text-red-600">Contact Me</h1>
      </div>
    </div>
  );
};

export default HeroBanner;
