"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200 px-6 py-4 md:px-8 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo/Brand with profile picture */}
        <Link href="/" className="flex items-center space-x-3">
          {/* Profile Picture */}
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-violet-600 shadow-lg">
            <Image
              src="/profile.jpeg"
              alt="Ned Mwanza"
              width={48}
              height={48}
              className="object-cover w-full h-full"
              priority
            />
          </div>
          {/* Name */}
          <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent hover:opacity-90 transition">
            Ned Mwanza
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {links.slice(0, -1).map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium relative group"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full"></span>
            </Link>
          ))}
          <Link
            href="/contact"
            className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 font-medium"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </div>

      {/* Mobile Menu with animation */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white shadow-xl rounded-b-2xl mx-4 mt-3 p-6 space-y-4 flex flex-col items-center"
          >
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`w-full text-center py-3 font-medium transition-all duration-200 rounded-lg ${
                  link.name === "Contact"
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:scale-105 shadow-md"
                    : "text-gray-700 hover:text-indigo-600"
                }`}
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
