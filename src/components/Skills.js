"use client";
import { motion } from "framer-motion";
import { FiCpu } from "react-icons/fi";

const skills = [
  { name: "JavaScript / React / Next.js / Node.js", level: 70 },
  { name: "PHP, Java & Python", level: 50 },
  { name: "MongoDB, PostgreSQL, MySQL & SQL", level: 75 },
  { name: "Networking (Cisco)", level: 60 },
  { name: "Linux & Windows Administration", level: 70 },
  { name: "Git & GitHub", level: 85 },
  { name: "RESTful APIs", level: 60 },
];

export default function Skills() {
  return (
    <section className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Section Header */}
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-gray-900 dark:text-gray-100">
          <FiCpu className="text-indigo-600 dark:text-indigo-400" />
          Technical Skills
        </h3>

        {/* Skills Card */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 space-y-6">
          {skills.map((skill, index) => (
            <div key={index}>
              {/* Skill Name & Percentage */}
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  {skill.name}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="h-3 rounded-full bg-indigo-600 dark:bg-indigo-400"
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
