"use client";

import HeroBanner from "@/components/contact/hero/hero";
import ContactCard from "@/components/contact/information/info";
import Navbar from "@/components/layout/navbar/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* <HeroBanner/> */} 
      <ContactCard/>
    </>
  );
}
