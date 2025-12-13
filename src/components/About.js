'use client';
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
      className="min-h-screen bg-gray-50 py-20 px-6 md:px-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-10"
      >
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            About Me
          </h2>
          <p className="text-gray-600">
            ICT Graduate • Software Developer • University Office Assistant
          </p>
        </div>

        {/* Intro */}
        <div className="flex items-start space-x-4 mb-8">
          <FiUser className="w-8 h-8 text-indigo-600 mt-1" />
          <p className="text-gray-700 leading-relaxed">
            I am <strong>Masautso Ned Mwanza</strong>, an ICT graduate from
            Mzuzu University with hands-on experience in software development,
            system administration, and institutional ICT operations. I am
            currently working as a <strong>University Office Assistant</strong>{" "}
            at <strong>DMI–St. John The Baptist University</strong>.
          </p>
        </div>

        {/* What I Do */}
        <div className="flex items-start space-x-4 mb-8">
          <FiCode className="w-8 h-8 text-indigo-600 mt-1" />
          <p className="text-gray-700 leading-relaxed">
            My work focuses on building practical digital systems, managing
            institutional websites, and developing solutions that improve
            service delivery. I have experience working with PHP, JavaScript,
            React, MySQL, and modern web technologies.
          </p>
        </div>

        {/* Expandable Section */}
        <div
          className={`transition-all duration-500 ${
            showMore ? "max-h-screen" : "max-h-0 overflow-hidden"
          }`}
        >
          <div className="flex items-start space-x-4 mb-8 mt-6">
            <FiBriefcase className="w-8 h-8 text-indigo-600 mt-1" />
            <p className="text-gray-700 leading-relaxed">
              In my current role, I manage and update the university website,
              develop online admission application features, and prepare
              institutional reports and meeting minutes. Academically, I have
              worked on large-scale systems including a smart farming platform
              and a national-level housing management system with payment
              integration.
            </p>
          </div>
        </div>

        {/* Toggle Button */}
        <div className="text-center mt-6">
          <button
            onClick={() => setShowMore(!showMore)}
            className="px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-all"
          >
            {showMore ? "Show Less" : "Read More"}
          </button>
        </div>
      </motion.div>
        <Experience />
        <Education />
        <Skills />
    </section>
  );
}
