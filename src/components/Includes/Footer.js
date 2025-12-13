"use client";
import React from "react";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-20 transition-colors">
      <div className="max-w-7xl mx-auto px-6 py-12 text-center">
        
        {/* Message */}
        <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-6">
          Let’s work together to build impactful digital solutions
        </p>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-8">
          {[
            {
              href: "https://web.facebook.com/ned.mwanza.9",
              icon: <FaFacebookF size={18} />,
              label: "Facebook",
            },
            {
              href: "https://www.linkedin.com/in/ned-mwanza-6b0412367",
              icon: <FaLinkedinIn size={18} />,
              label: "LinkedIn",
            },
            {
              href: "https://wa.me/265888138980",
              icon: <FaWhatsapp size={18} />,
              label: "WhatsApp",
            },
            {
              href: "mailto:mwanzamasautso363@gmail.com",
              icon: <FiMail size={18} />,
              label: "Email",
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className="
                w-10 h-10 flex items-center justify-center rounded-full
                border border-gray-300 dark:border-gray-700
                text-gray-600 dark:text-gray-300
                hover:bg-indigo-600 hover:text-white
                dark:hover:bg-indigo-500
                transition
              "
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-6 text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Ned Mwanza. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
