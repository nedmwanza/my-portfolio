"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiBookOpen } from "react-icons/fi";

export default function Education() {
  const [open, setOpen] = useState(false);

  return (
    <section className="mb-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Section Title */}
        <h3 className="text-2xl font-bold flex items-center gap-2 mb-8
          text-gray-900 dark:text-gray-100">
          <FiBookOpen className="text-indigo-600 dark:text-indigo-400" />
          Education
        </h3>

        {/* Card */}
        <div className="
          bg-white dark:bg-gray-800
          rounded-xl shadow
          border border-gray-100 dark:border-gray-700
          p-6 space-y-6
        ">
          {/* Degree */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-gray-100">
              Bachelor of Science in Information and Communication Technology (ICT)
            </h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Mzuzu University • Apr 2021 – May 2025
            </p>

            <button
              onClick={() => setOpen(!open)}
              className="mt-2 text-sm font-medium
                text-indigo-600 dark:text-indigo-400
                hover:underline transition"
            >
              {open ? "Hide academic highlights" : "View academic highlights"}
            </button>

            {/* Animated details */}
            <AnimatePresence>
              {open && (
                <motion.ul
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 list-disc list-inside
                    text-gray-700 dark:text-gray-300
                    space-y-2 overflow-hidden"
                >
                  <li>
                    Final Year Project: <strong>Climate Smart Tobacco Production System</strong>
                  </li>
                  <li>
                    Participant, <strong>Huawei Seeds for the Future Program (2022)</strong>
                  </li>
                  <li>
                    Cisco Networking Academy Certifications (2024)
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          {/* Secondary Education */}
          <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
            <h4 className="font-semibold text-gray-900 dark:text-gray-100">
              Malawi School Certificate of Education (MSCE)
            </h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Chinkhuti Community Day Secondary School • 2015 – 2019
            </p>
            <p className="mt-1 text-gray-700 dark:text-gray-300">
              Award: <strong>Best Student in Sciences</strong>
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
