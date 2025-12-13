"use client";
import React from "react";
import { FaFacebookF, FaLinkedinIn, FaMailchimp, FaWhatsapp } from "react-icons/fa";
import { FiLinkedin, FiFacebook, FiTwitter, FiMail } from "react-icons/fi";

function Footer() {
  return (
    <footer className="bg-white border-t mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 text-center">
        <p className="text-lg font-medium text-gray-700 mb-6">
          Let’s work together to build impactful digital solutions
        </p>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="https://web.facebook.com/ned.mwanza.9"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-indigo-600 hover:text-white transition"
          >
            <FaFacebookF size={18} />
          </a>

          <a
            href="https://www.linkedin.com/in/ned-mwanza-6b0412367"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-indigo-600 hover:text-white transition"
          >
            <FaLinkedinIn size={18} />
          </a>

          <a
            href="https://wa.me/265888138980"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-indigo-600 hover:text-white transition"
          >
            <FaWhatsapp size={18} />
          </a>

                    <a
            href="https://www.linkedin.com/in/ned-mwanza-6b0412367"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-indigo-600 hover:text-white transition"
          >
            <FiMail size={18} />
          </a>
        </div>


        {/* Copyright */}
        <div className="border-t pt-6 text-sm text-gray-500">
          © {new Date().getFullYear()} Ned Mwanza. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
