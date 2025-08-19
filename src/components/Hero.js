import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen text-center p-6 md:p-12 bg-background text-foreground overflow-hidden">
      {/* Geometric background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-violet-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      </div>
      
      {/* Content container */}
      <div className="relative z-10 max-w-2xl">
        {/* Profile Picture */}
        <div className="w-32 h-32 md:w-48 md:h-48 mb-6 rounded-full overflow-hidden border-4 border-violet-600 mx-auto shadow-lg">
          <Image
            src="/profile.jpg"
            alt="Ned Mwanza"
            width={192}
            height={192}
            className="object-cover w-full h-full"
            priority
          />
        </div>

        {/* Animated text gradient */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-blue-500 animate-text">
          Hi, I`m Ned Mwanza
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
          Software Developer | Building smart digital solutions and interactive web applications.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link
            href="/about"
            className="px-6 py-3 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors duration-300"
          >
            About Me
          </Link>
          <Link
            href="/projects"
            className="px-6 py-3 bg-gray-200 dark:bg-gray-800 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-300"
          >
            Projects
          </Link>
        </div>
      </div>
    </div>
  );
}