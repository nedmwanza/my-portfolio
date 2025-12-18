"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiUser, FiCode, FiBriefcase } from "react-icons/fi";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";

export default function About() {
  const [showMore, setShowMore] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section
      id="about"
      className="
        min-h-screen py-20 px-6 md:px-20
        bg-gray-50 dark:bg-gray-900
        transition-colors
      "
    >
      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="
          max-w-4xl mx-auto
          bg-white dark:bg-gray-800
          rounded-2xl shadow-lg
          p-10
        "
      >
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-3">
            About Me
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            ICT Professional • Software Developer • Systems Support
          </p>
        </div>

        {/* Intro */}
        <div className="flex items-start space-x-4 mb-8">
          <FiUser className="w-15 h-15 text-indigo-600 dark:text-indigo-400 mt-1" />
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            I am <strong>Masautso Ned Mwanza</strong>, an ICT professional with
            a Bachelor’s degree from <strong>Mzuzu University</strong> and
            hands-on experience in software development, system administration,
            and institutional ICT operations. I currently work as a
            <strong> University Office Assistant</strong> at
            <strong> DMI – St. John The Baptist University</strong>.
          </p>
        </div>

        {/* Expandable Content */}
        <motion.div
          initial={false}
          animate={{ height: showMore ? "auto" : 0, opacity: showMore ? 1 : 0 }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden"
        >
          {/* What I Do */}
          <div className="flex items-start space-x-4 mb-8">
            <FiCode className="w-15 h-15 text-indigo-600 dark:text-indigo-400 mt-1" />
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              My work focuses on building reliable digital systems, managing
              institutional websites, and developing software solutions that
              improve service delivery. I work with PHP, JavaScript, Next.js,
              Node.js, React, MySQL, MongoDb, and modern Software Technologies.
            </p>
          </div>

          <div className="flex items-start space-x-4 mb-8 mt-4">
            <FiBriefcase className="w-15 h-15 text-indigo-600 dark:text-indigo-400 mt-1" />
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I work at the intersection of technology and operations, helping
              keep digital platforms stable, functional, and user-friendly.
              Alongside this role, I have built end-to-end systems that solve
              real-world problems, including smart agriculture and digital
              housing solutions with integrated mobile payments
            </p>
          </div>
        </motion.div>

        {/* Toggle Button */}
        <div className="text-center mt-6">
          <button
            onClick={() => setShowMore(!showMore)}
            className="
              px-6 py-3 rounded-lg
              bg-indigo-600 hover:bg-indigo-700
              text-white font-medium
              transition-all
            "
          >
            {showMore ? "Show Less" : "Read More"}
          </button>
        </div>
      </motion.div>

      {/* Sub Sections */}
      <div className="max-w-4xl mx-auto mt-16">
        <Experience />
        <Education />
        <Skills />
      </div>
    </section>
  );
}
