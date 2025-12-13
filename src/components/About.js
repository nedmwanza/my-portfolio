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
            ICT Graduate • Software Developer • University Office Assistant
          </p>
        </div>

        {/* Intro */}
        <div className="flex items-start space-x-4 mb-8">
          <FiUser className="w-15 h-15 text-indigo-600 dark:text-indigo-400 mt-" />
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            I am <strong>Masautso Ned Mwanza</strong>, an ICT graduate from
            <strong> Mzuzu University</strong> with hands-on experience in
            software development, system administration, and institutional ICT
            operations. I currently serve as a
            <strong> University Office Assistant</strong> at
            <strong> DMI – St. John The Baptist University</strong>.
          </p>
        </div>

        {/* What I Do */}
        <div className="flex items-start space-x-4 mb-8">
          <FiCode className="w-15 h-15 text-indigo-600 dark:text-indigo-400 mt-1" />
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            My work focuses on building reliable digital systems, managing
            institutional websites, and developing software solutions that
            improve service delivery. I work with PHP, JavaScript, React,
            MySQL, and modern web technologies.
          </p>
        </div>

        {/* Expandable Content */}
        <motion.div
          initial={false}
          animate={{ height: showMore ? "auto" : 0, opacity: showMore ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className="overflow-hidden"
        >
          <div className="flex items-start space-x-4 mb-8 mt-4">
            <FiBriefcase className="w-15 h-15 text-indigo-600 dark:text-indigo-400 mt-1" />
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              In my current role, I manage and update the university website,
              develop online admission application features, and prepare
              institutional reports and official meeting minutes. Academically,
              I have designed and implemented large-scale systems including a
              climate-smart farming platform and a national housing management
              system with integrated mobile payments.
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
