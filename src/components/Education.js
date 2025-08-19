export const metadata = {
  title: "Education | Ned Mwanza",
  description: "Education background of Ned Mwanza",
};

export default function Education() {
  const schools = [
    {
      degree: "Bachelor of Science in Infornation and Communication Technology",
      school: "Mzuzu University",
      period: "April 2021 - May 2025",
      details: "Studying core areas including Software Engineering, Databases, Networking, and System Analysis.",
    },
    {
      degree: "Malawi School Certificate of Education",
      school: "Secondary School",
      period: "Graduated: 2019",
      details: "Focus on sciences and mathematics, with active participation in ICT clubs.",
    },
  ];

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-indigo-600 mb-8">Education</h1>
      <div className="space-y-8">
        {schools.map((edu, idx) => (
          <div key={idx} className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <h2 className="text-2xl font-semibold">{edu.degree}</h2>
            <p className="text-gray-600">{edu.school} • {edu.period}</p>
            <p className="mt-2 text-gray-700">{edu.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
