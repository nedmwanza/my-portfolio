import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <main className="bg-gray-50 text-gray-900">
      <Hero />
      <About />
      <Education/>
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
