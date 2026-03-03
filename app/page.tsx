import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Navbar />
    </main>
  );
}
