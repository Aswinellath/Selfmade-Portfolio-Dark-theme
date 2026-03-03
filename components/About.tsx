import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="py-28 px-6 border-t border-neutral-900"
    >
      <div className="max-w-4xl mx-auto text-center">

        {/* Profile Image */}
        <div className="flex justify-center mb-8">
          <Image
            src="/profile1.png"
            alt="ASWIN E"
            width={160}
            height={160}
            className="brightness-45"
          />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
          About Me
        </h2>

        <p className="text-gray-400 leading-7">
          I am a QA Engineer with 3+ years of experience in manual and automation
          testing of web-based SaaS applications. I specialize in building scalable
          automation frameworks using Playwright and Selenium, integrating CI/CD
          pipelines, and improving regression efficiency.
        </p>

        <p className="text-gray-400 leading-7 mt-4">
          My approach focuses on preventing defects early through strong test
          strategy, backend validation using SQL, API testing, and maintaining
          high-quality releases in Agile environments.
        </p>

      </div>
    </section>
  );
}