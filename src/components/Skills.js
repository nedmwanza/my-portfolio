import { motion } from "framer-motion";
import { FiCpu } from "react-icons/fi";

const skills = [
  { name: "JavaScript / React / Next.js / Node.js", level: 70 },
  { name: "PHP, Java & Python", level: 50 },
  { name: "MongoDB, Postgre, MySQL & SQL", level: 75 },
  { name: "Networking (Cisco)", level: 60 },
  { name: "Linux & Windows Administration", level: 70 },
  { name: "Git & GitHub", level: 85 },
  { name: "RESTful API", level: 60 },
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
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <FiCpu className="text-indigo-600" />
          Skills
        </h3>

        <div className="bg-white rounded-xl shadow p-6 space-y-5">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="text-gray-700 font-medium">
                  {skill.name}
                </span>
                <span className="text-sm text-gray-500">
                  {skill.level}%
                </span>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-3">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.8 }}
                  className="h-3 rounded-full bg-indigo-600"
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
