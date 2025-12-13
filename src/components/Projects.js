'use client';
import { motion } from "framer-motion";
import { FiLayers, FiGithub, FiExternalLink, FiCalendar } from "react-icons/fi";

const projects = [
  {
    title: "Climate Smart Tobacco Production System",
    year: "2025",
    period: "Final Year Project",
    description:
      "A smart farming system integrating weather data and crop lifecycle models to automate farming tasks, generate real-time alerts, and support sustainable agricultural practices.",
    tech: "Node.js, MongoDB, Next.js",
    github: "https://github.com/nedmwanza/tobacco-tpis",
    demo: "https://example.com/tobacco-system",
  },
  {
    title: "SMHC e-Housing Management System",
    year: "2024",
    period: "Academic & Industry Supervised Project",
    description:
      "A digital housing management system supporting applications, allocations, contracts, invoices, payments, renewals, and automated reminders.",
    tech: "PHP, MySQL, JavaScript, HTML/CSS",
    github: "https://github.com/nedmwanza/smart-housing",
    demo: "https://example.com/smhc",
  },
];

export default function Projects() {
  return (
    <section className="p-4 mb-20">
      {/* Section Header */}
      <h3 className="text-2xl font-bold flex items-center gap-2 mb-8 text-gray-900 dark:text-white">
        <FiLayers className="text-indigo-600 dark:text-indigo-400" />
        Projects
      </h3>

      {/* Timeline */}
      <div className="relative border-l-2 border-indigo-600 dark:border-indigo-400 pl-8 space-y-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="relative"
          >
            {/* Timeline Dot */}
            <span className="absolute -left-[11px] top-2 w-4 h-4 bg-indigo-600 dark:bg-indigo-400 rounded-full"></span>

            {/* Card */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow border border-gray-100 dark:border-gray-700">
              {/* Title */}
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                {project.title}
              </h4>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-2">
                <span className="flex items-center gap-1">
                  <FiCalendar />
                  {project.year}
                </span>
                <span>{project.period}</span>
              </div>

              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                {project.description}
              </p>

              {/* Tech */}
              <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-4">
                {project.tech}
              </p>

              {/* Links */}
              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
                  >
                    <FiGithub />
                    Source Code
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-700 transition"
                  >
                    <FiExternalLink />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
