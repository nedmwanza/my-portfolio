"use client";
import { motion } from "framer-motion";
import { FiBriefcase } from "react-icons/fi";

const experiences = [
  {
    title: "University Office Assistant",
    company: "DMI–St. John The Baptist University",
    period: "Jun 2025 – Present",
    details: [
      "Manage and update the university website and online systems.",
      "Develop features for online admission applications and digital forms.",
      "Prepare institutional reports, meeting minutes, and administrative documentation.",
      "Support academic and administrative ICT operations."
    ]
  },
  {
    title: "IT Technician",
    company: "Tee Components and Communication",
    period: "Oct 2024 – May 2025",
    details: [
      "Diagnosed and resolved hardware and software issues across ICT infrastructure.",
      "Performed routine system maintenance to ensure optimal performance.",
      "Installed, configured, and upgraded computer systems, networks, and peripherals.",
      "Provided technical support and network troubleshooting for end users."
    ]
  }
];

export default function WorkExperience() {
  return (
    <section className="mb-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Section Header */}
        <h3 className="text-2xl font-bold flex items-center gap-2 mb-8
          text-gray-900 dark:text-gray-100">
          <FiBriefcase className="text-indigo-600 dark:text-indigo-400" />
          Work Experience
        </h3>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="
                bg-white dark:bg-gray-800
                rounded-xl shadow
                border border-gray-100 dark:border-gray-700
                border-l-4 border-l-indigo-600 dark:border-l-indigo-400
                p-6
              "
            >
              <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {exp.title}
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                {exp.company} • {exp.period}
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                {exp.details.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
