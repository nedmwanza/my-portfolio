"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiBookOpen } from "react-icons/fi";

export default function Education() {
  const [open, setOpen] = useState(false);

  return (
    <section className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <FiBookOpen className="text-indigo-600" />
          Education
        </h3>

        <div className="bg-white rounded-xl shadow p-6 space-y-4">
          <div>
            <h4 className="font-semibold text-gray-800">
              Bachelor of Science in ICT
            </h4>
            <p className="text-sm text-gray-500">
              Mzuzu University | Apr 2021 – May 2025
            </p>

            <button
              onClick={() => setOpen(!open)}
              className="mt-2 text-indigo-600 text-sm font-medium hover:underline"
            >
              {open ? "Hide details" : "View details"}
            </button>

            {open && (
              <ul className="mt-3 list-disc list-inside text-gray-700 space-y-2">
                <li>
                  Final Year Project: Climate Smart Tobacco Production System.
                </li>
                <li>
                  Huawei Seeds for the Future Program participant (2022).
                </li>
                <li>Cisco Networking Academy certifications (2024).</li>
              </ul>
            )}
          </div>

          <div className="pt-4 border-t">
            <h4 className="font-semibold text-gray-800">
              Malawi School Certificate of Education (MSCE)
            </h4>
            <p className="text-sm text-gray-500">
              Chinkhuti CDSS | 2015 – 2019
            </p>
            <p className="text-gray-700 mt-1">
              Award: Best Student in Sciences
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
