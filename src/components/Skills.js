const skills = ["Next.js", "React Native", "Node.js", "MongoDB", "Firebase", "TailwindCSS"];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 md:px-20 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, i) => (
          <span
            key={i}
            className="px-4 py-2 bg-white rounded-lg shadow text-gray-700 font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
