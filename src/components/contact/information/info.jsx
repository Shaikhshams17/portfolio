"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

const ContactCard = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const socialLinks = [
    {
      id: "whatsapp",
      icon: FaWhatsapp,
      url: "https://wa.me/917385841171",
      color: "text-green-400",
      hoverBg: "bg-green-500",
      label: "WhatsApp",
    },
    {
      id: "linkedin",
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/shams-ali-shaikh-27194425a",
      color: "text-blue-400",
      hoverBg: "bg-blue-500",
      label: "LinkedIn",
    },
    {
      id: "github",
      icon: FaGithub,
      url: "https://github.com/Shaikhshams17",
      color: "text-purple-400",
      hoverBg: "bg-purple-500",
      label: "GitHub",
    },
    {
      id: "instagram",
      icon: FaInstagram,
      url: "https://www.instagram.com/shamsss_17",
      color: "text-pink-400",
      hoverBg: "bg-pink-500",
      label: "Instagram",
    },
  ];

  const contactInfo = [
    {
      icon: FaEnvelope,
      content: "shaikhshams59@gmail.com",
      isLink: true,
      url: "mailto:shaikhshams59@gmail.com",
      color: "text-indigo-300",
      label: "Email",
    },
    {
      icon: FaPhone,
      content: "+91 7385841171",
      isLink: false,
      color: "text-blue-300",
      label: "Phone",
    },
    {
      icon: FaMapMarkerAlt,
      content: "Lower Parel, Mumbai",
      isLink: false,
      color: "text-purple-300",
      label: "Address",
    },
  ];

  return (
    <div
      className="min-h-screen flex items-center justify-center py-10 px-4 overflow-hidden relative"
      style={{ backgroundColor: "#1d1d46" }}
    >
      {/* Decorative Background Blurs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div
          className="absolute w-96 h-96 rounded-full bg-indigo-400/10 blur-3xl -top-20 -left-20 animate-pulse"
          style={{ animationDuration: "8s" }}
        ></div>
        <div
          className="absolute w-96 h-96 rounded-full bg-purple-400/10 blur-3xl top-1/2 left-1/3 animate-pulse"
          style={{ animationDuration: "12s" }}
        ></div>
        <div
          className="absolute w-80 h-80 rounded-full bg-blue-400/10 blur-3xl bottom-0 right-0 animate-pulse"
          style={{ animationDuration: "10s" }}
        ></div>
      </div>

      <div
        className={`relative backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden max-w-6xl w-full transition-all duration-1000 ${
          isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
        } z-10`}
        style={{ backgroundColor: "#1d1d46" }}
      >
        <div className="flex flex-col lg:flex-row items-stretch relative z-10">
          {/* Left Panel */}
          <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-between">
            <div>
              <div className="mb-10">
                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-3">
                  Get in Touch
                </h2>
                <div className="w-24 h-1.5 bg-purple-500 rounded-full mb-6"></div>
                <p className="text-indigo-100 text-lg leading-relaxed">
                  Have questions, opportunities, or feedback? I'd love to hear from you and discuss how we can collaborate.
                </p>
              </div>

              <div className="space-y-6 mb-10">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center group transition-all duration-300 hover:translate-x-2"
                  >
                    <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-white/5 backdrop-blur-sm mr-5 shadow-lg border border-indigo-500/20 group-hover:border-indigo-400/40 transition-all duration-300">
                      <item.icon className={`${item.color} text-xl`} />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider text-indigo-300/70">
                        {item.label}
                      </span>
                      {item.isLink ? (
                        <Link
                          href={item.url}
                          className="block text-lg text-white group-hover:text-indigo-300 transition-all duration-300"
                        >
                          {item.content}
                        </Link>
                      ) : (
                        <p className="block text-lg text-white">{item.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-6">
                Connect with me
              </h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    className="relative group"
                    onMouseEnter={() => setHoveredIcon(social.id)}
                    onMouseLeave={() => setHoveredIcon(null)}
                  >
                    <span
                      className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-white opacity-0 transition-all duration-300 whitespace-nowrap ${
                        hoveredIcon === social.id ? "opacity-100 -bottom-6" : ""
                      }`}
                    >
                      {social.label}
                    </span>
                    <div
                      className={`w-14 h-14 flex items-center justify-center rounded-2xl border border-indigo-500/30 backdrop-blur-sm transition-all duration-500 ${
                        hoveredIcon === social.id
                          ? social.hoverBg
                          : "bg-white/10"
                      }`}
                    >
                      <social.icon
                        size={22}
                        className={`${
                          hoveredIcon === social.id
                            ? "text-white"
                            : social.color
                        } transition-all duration-300`}
                      />
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-12 border-t border-indigo-500/20 pt-6">
                <p className="text-indigo-200/60 text-sm">
                  © {new Date().getFullYear()} | Shams Ali Shaikh
                </p>
              </div>
            </div>
          </div>

          {/* Right Panel - Image/GIF */}
          <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-0 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-indigo-500/10 blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-purple-500/10 blur-2xl"></div>

            <div className="relative z-10 w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-3xl blur-md transform -rotate-3 scale-105"></div>
              <div className="relative bg-white/5 p-2 rounded-3xl border border-indigo-500/30 shadow-2xl backdrop-blur-sm overflow-hidden">
                <div className="w-full h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-t-xl mb-2"></div>
                <div className="relative rounded-2xl overflow-hidden bg-black/20 aspect-square flex items-center justify-center">
                  <img
                    src="/contact.gif"
                    alt="Contact Illustration"
                    className="w-full h-full object-cover object-center"
                    onLoad={() => setIsLoaded(true)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent"></div>
                </div>
                <div className="flex justify-center gap-2 mt-3 mb-1">
                  <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
                  <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                  <div className="w-2 h-2 rounded-full bg-violet-400"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
};

export default ContactCard;
