// components/Navbar.js
"use client";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-sm bg-white/80 border-b border-gray-100 px-6 py-4 md:px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo/Brand */}
        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Ned Mwanza
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium">
            Home
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium">
            About
          </Link>
          <Link href="/projects" className="text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium">
            Projects
          </Link>
          <Link href="/contact" className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-medium">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Mobile Menu */}
        {open && (
          <div className="absolute inset-x-0 top-16 bg-white shadow-lg rounded-b-xl mx-4 p-6 space-y-4 flex flex-col items-center md:hidden">
            <Link 
              href="/" 
              className="w-full text-center py-3 text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="w-full text-center py-3 text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium"
              onClick={() => setOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/projects" 
              className="w-full text-center py-3 text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium"
              onClick={() => setOpen(false)}
            >
              Projects
            </Link>
            <Link 
              href="/contact" 
              className="w-full text-center py-3 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-medium"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}