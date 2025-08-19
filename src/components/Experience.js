export const metadata = {
  title: "Experience | Ned Mwanza",
  description: "Professional experience and career history of Ned Mwanza",
};

export default function Experience() {
  const jobs = [
    {
      role: "Software Developer",
      company: "Wong-B IT Solutions",
      period: "2024 – Present",
      description: "Building a billing app with React Native, SQLite integration, and secure payment handling.",
    },
    {
      role: "Backend Developer (Freelance)",
      company: "Climate-Smart Tobacco Production System",
      period: "2023 – 2024",
      description: "Designed system architecture, automated task scheduling, and integrated real-time weather alerts using Node.js and MongoDB.",
    },
  ];

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-indigo-600 mb-8">Experience</h1>
      <div className="space-y-8">
        {jobs.map((job, idx) => (
          <div key={idx} className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <h2 className="text-2xl font-semibold">{job.role}</h2>
            <p className="text-gray-600">{job.company} • {job.period}</p>
            <p className="mt-2 text-gray-700">{job.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
