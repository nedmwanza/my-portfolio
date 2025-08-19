// app/projects/page.js
import { FiExternalLink, FiGithub } from "react-icons/fi";

export default function Projects() {
  const projects = [
    { 
      name: "Climate-Smart Tobacco System", 
      description: "AI-powered agricultural platform optimizing tobacco farming sustainability",
      link: "#",
      github: "#",
      tags: ["AI/ML", "Agriculture", "Sustainability"]
    },
    { 
      name: "Smart Housing System", 
      description: "IoT-based residential automation for energy efficiency and security",
      link: "#",
      github: "#",
      tags: ["IoT", "Automation", "React"]
    },
    { 
      name: "Billing App", 
      description: "Streamlined invoicing solution with real-time analytics dashboard",
      link: "#",
      github: "#",
      tags: ["Node.js", "Fintech", "Dashboard"]
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all mb-4">
            My Projects
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Here are some of my featured works. Each project represents unique challenges and innovative solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.name}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-indigo-100"
            >
              {/* Project Card */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span 
                      key={tag}
                      className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Title */}
                <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  {project.name}
                </h2>
                
                {/* Description */}
                <p className="text-gray-600 mb-6">
                  {project.description}
                </p>
                
                {/* Buttons */}
                <div className="flex space-x-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    Live Demo
                    <FiExternalLink className="ml-1.5 h-4 w-4" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    Code
                    <FiGithub className="ml-1.5 h-4 w-4" />
                  </a>
                </div>
              </div>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Want to see more?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Check out my GitHub profile for additional projects and open-source contributions.
          </p>
          <a
            href="https://github.com/nedmwanza/tobacco-tpis"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all"
          >
            View GitHub Profile
            <FiGithub className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}