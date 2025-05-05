"use client";

import HeroBanner from "@/components/contact/hero/hero";
import ContactCard from "@/components/contact/information/info";
import CursorTrail from "@/components/layout/CursorTrail/cursorTrail";
import Navbar from "@/components/layout/navbar/navbar";

export default function Contact() {
  return (
    <>
      <CursorTrail />
      <Navbar />
      
      <main className="contact-page">
        {/* Hero Section with cursor interaction */}
        {/* <section data-cursor-text="Contact Me">
          <HeroBanner 
            title="Get In Touch"
            subtitle="Let's work together or just say hello"
          />
        </section> */}
        
        {/* Contact Information Section */}
        <section data-cursor-text="Reach Out">
          <ContactCard />
        </section>
        
        {/* Optionally add a contact form section here later */}
      </main>
    </>
  );
}