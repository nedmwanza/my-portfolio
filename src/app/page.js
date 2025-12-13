// components/Hero.js
import Image from "next/image";
import { FiLinkedin, FiFacebook, FiTwitter, FiMail } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Text Content */}
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Hi, I`m <span className="text-indigo-600">Masautso Ned Mwanza</span>
          </h1>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-700">
            Software Developer | ICT Graduate
          </h2>
          <p className="text-gray-600 max-w-md">
            Recent ICT graduate with hands-on experience in software development, system maintenance, and web-based solutions. Passionate about building innovative, practical, and user-friendly applications.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="/contact"
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-all"
            >
              Hire Me
            </a>
            <a
              href="/projects"
              className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg font-medium hover:bg-indigo-50 transition-all"
            >
              See Projects
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="https://www.linkedin.com/in/ned-mwanza-6b0412367" target="_blank" rel="noopener noreferrer">
              <FiLinkedin className="w-6 h-6 text-indigo-600 hover:text-indigo-700 transition-colors" />
            </a>
            <a href="https://web.facebook.com/ned.mwanza.9" target="_blank" rel="noopener noreferrer">
              <FiFacebook className="w-6 h-6 text-indigo-600 hover:text-indigo-700 transition-colors" />
            </a>
            <a href="mailto:nedmwanza@gmail.com" target="_blank" rel="noopener noreferrer">
              <FiMail className="w-6 h-6 text-indigo-600 hover:text-indigo-700 transition-colors" />
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center md:justify-end">
          <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-indigo-600 shadow-lg">
            <Image
              src="/profile.jpeg"
              alt="Masautso Ned Mwanza"
              width={256}
              height={256}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
