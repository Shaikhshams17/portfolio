"use client";
import HeroBanner from "@/components/home/hero/hero";
import Projects from "@/components/home/projects/projects";
import Skills from "@/components/home/skills/skills";
import Navbar from "@/components/layout/navbar/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <Skills />
     <Projects/>
    </>
  );
}
