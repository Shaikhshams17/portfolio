"use client";
import React from "react";
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
  return (
    <div className="bg-gradient-to-b from-black to-gray-600 min-h-screen flex items-center justify-center py-10 px-4">
      <div className="bg-black rounded-3xl shadow-xl p-6 sm:p-10 max-w-6xl w-full flex flex-col md:flex-row items-center mt-16">
        {/* Left Section: Contact Details */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-white mb-6">
            Have questions, opportunities, or feedback? I’d love to hear from
            you.
          </p>

          <div className="space-y-4">
            <div className="flex items-center">
              <FaEnvelope className="text-red-600 mr-3" />
              <Link
                href="mailto:shaikhshams59@gmail.com"
                className="text-blue-600 hover:underline"
              >
                shaikhshams59@gmail.com
              </Link>
            </div>

            <div className="flex items-center">
              <FaPhone className="text-red-600 mr-3" />
              <p className="text-white">+91 7385841171</p>
            </div>

            <div className="flex items-center">
              <FaMapMarkerAlt className="text-red-600 mr-3" />
              <p className="text-white">Lower Parel, Mumbai</p>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold text-white mb-3">
              Follow me on social media
            </h3>
            <div className="flex space-x-4">
              <Link
                href="https://wa.me/917385841171"
                target="_blank"
                className="text-white hover:text-green-500"
              >
                <FaWhatsapp size={24} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/shams-ali-shaikh-27194425a"
                target="_blank"
                className="text-white hover:text-blue-500"
              >
                <FaLinkedin size={24} />
              </Link>
              <Link
                href="https://github.com/Shaikhshams17"
                target="_blank"
                className="text-white hover:text-gray-400"
              >
                <FaGithub size={24} />
              </Link>
              <Link
                href="https://www.instagram.com/shamsss_17"
                target="_blank"
                className="text-white hover:text-pink-500"
              >
                <FaInstagram size={24} />
              </Link>
            </div>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/contact.gif"
            alt="Contact Illustration"
            className="w-60 sm:w-80 md:w-[70vh] h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
