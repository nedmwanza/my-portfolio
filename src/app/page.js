import Image from "next/image";

// app/page.js
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6 md:p-12">
            {/* Profile Picture */}
      <div className="w-32 h-32 md:w-48 md:h-48 mb-6 rounded-full overflow-hidden border-4 border-violet-800">
        <Image
          src="/profile.jpg"
          alt="Ned Mwanza"
          width={192}    // adjust based on your image
          height={192}
          className="object-cover"
        />
      </div>

      {/* Introduction */}
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Hi, I`m Ned Mwanza 
      </h1>
      <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-xl">
        Software Developer | Building smart digital solutions and interactive web applications.
      </p>
      <div className="flex flex-col md:flex-row gap-4">
        <Link
          href="/about"
          className="px-6 py-3 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition"
        >
          About Me
        </Link>
        <Link
          href="/projects"
          className="px-6 py-3 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
        >
          Projects
        </Link>
      </div>
    </div>
  );
}
  