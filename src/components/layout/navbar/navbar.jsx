"use client"; // Ensures it's a client component in Next.js 13+

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Correct Next.js router
import React from "react";

export default function Navbar() {
  const pathname = usePathname(); // Corrected for Next.js 13+

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Me", path: "/about" },
    { name: "Contact Me", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="fixed top-0 left-0 w-full backdrop-blur-lg bg-white bg-opacity-10 shadow-lg z-50"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          className="text-white text-2xl font-bold cursor-pointer"
          whileHover={{ scale: 1.1 }}
        >
          <Link href="/">Shams Ali</Link>
        </motion.div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-white font-semibold text-lg">
          {navLinks.map((link, index) => (
            <motion.li
              key={index}
              className={`relative cursor-pointer transition ${
                pathname === link.path ? "text-red-500" : "hover:text-red-500"
              }`}
              whileHover={{ scale: 1.1 }}
            >
              <Link href={link.path}>{link.name}</Link>
              {/* Underline effect for active link */}
              {pathname === link.path && (
                <motion.div
                  className="absolute left-0 bottom-0 w-full h-1 bg-red-500"
                  layoutId="underline"
                />
              )}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
