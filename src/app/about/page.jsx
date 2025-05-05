"use client";

import Education from "@/components/aboutme/education/education";
import Experience from "@/components/aboutme/experience/experience";
import Hero from "@/components/aboutme/hero/hero";
import Hobbies from "@/components/aboutme/hobbies/hobbies";
import CursorTrail from "@/components/layout/CursorTrail/cursorTrail";
import Navbar from "@/components/layout/navbar/navbar";

export default function About() {
  return (
    <>
      <CursorTrail />
      <Navbar />
      
      <main className="about-page">
        {/* Hero Section with cursor interaction */}
        <section data-cursor-text="That's Me!">
          <Hero />
        </section>
        
        {/* Education Section */}
        <section data-cursor-text="My Education">
          <Education />
        </section>
        
        {/* Experience Section */}
        <section data-cursor-text="My Journey">
          <Experience />
        </section>
        
        {/* Optional Hobbies Section - uncomment if needed */}
        {/* <section data-cursor-text="My Passions">
          <Hobbies />
        </section> */}
      </main>
    </>
  );
}