import { motion } from "framer-motion";
import { FiBriefcase } from "react-icons/fi";

export default function WorkExperience() {
  return (
    <section className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <FiBriefcase className="text-indigo-600" />
          Work Experience
        </h3>

        <div className="bg-white rounded-xl shadow p-6 border-l-4 border-indigo-600">
          <h4 className="text-lg font-semibold text-gray-800">
            IT Technician
          </h4>
          <p className="text-sm text-gray-500 mb-3">
            Tee Components and Communication | Oct 2024 – May 2025
          </p>

          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Diagnosed and resolved hardware and software issues.</li>
            <li>Performed system maintenance to ensure optimal performance.</li>
            <li>Installed, configured, and upgraded ICT systems.</li>
            <li>Provided network support and troubleshooting for end-users.</li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
