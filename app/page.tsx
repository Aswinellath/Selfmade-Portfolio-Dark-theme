import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
// import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Navbar />
      <Contact />
      {/* <Footer /> */}
      <CursorGlow />
    </main>
  );
}
