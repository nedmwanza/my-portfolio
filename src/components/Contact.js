"use client";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="
      min-h-screen flex flex-col justify-center items-center
      bg-gray-50 dark:bg-gray-900
      py-12 px-4 sm:px-6 lg:px-8
      transition-colors duration-300
    ">
      <div className="
        max-w-md w-full
        bg-white dark:bg-gray-800
        p-8 rounded-2xl
        shadow-md dark:shadow-lg
        border border-gray-100 dark:border-gray-700
      ">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-2 text-center">
          Contact Information
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-center mb-8">
          Feel free to reach out for professional inquiries or collaboration
        </p>

        <div className="space-y-5">
          {/* Email */}
          <div className="flex items-center space-x-4">
            <FiMail className="text-indigo-600 dark:text-indigo-400 w-5 h-5" />
            <a
              href="mailto:nedmwanza@gmail.com"
              className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
            >
              nedmwanza@gmail.com
            </a>
          </div>

          {/* Phone Numbers */}
          <div className="flex items-center space-x-4">
            <FiPhone className="text-indigo-600 dark:text-indigo-400 w-5 h-5" />
            <div className="flex flex-col">
              <a
                href="tel:+265888138980"
                className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
              >
                +265 888 138 980
              </a>
              <a
                href="tel:+265997686333"
                className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
              >
                +265 997 686 333
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start space-x-4">
            <FiMapPin className="text-indigo-600 dark:text-indigo-400 w-5 h-5 mt-1" />
            <span className="text-gray-700 dark:text-gray-300">
              Lumbadzi, Dowa District, Malawi
            </span>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-6">
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-4">
            Connect with me
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://web.facebook.com/ned.mwanza.9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
            >
              <FaFacebook size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/ned-mwanza-6b0412367"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
            >
              <FaLinkedin size={22} />
            </a>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <a
            href="mailto:nedmwanza@gmail.com"
            className="
              inline-flex items-center px-6 py-3
              bg-indigo-600 hover:bg-indigo-700
              text-white rounded-lg font-medium
              transition
            "
          >
            Send Email
          </a>
        </div>
      </div>
    </div>
  );
}
