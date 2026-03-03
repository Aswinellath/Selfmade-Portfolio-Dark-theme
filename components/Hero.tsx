export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 overflow-hidden">
      
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/40 to-black pointer-events-none" />

      <div className="relative z-10 max-w-3xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          ASWIN E
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-400 leading-relaxed">
          QA Engineer specializing in Automation, Playwright,
          CI/CD integration, and scalable test architecture.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-white text-black rounded-md font-medium hover:opacity-90 transition"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            className="px-6 py-3 border border-neutral-700 rounded-md hover:border-white transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}