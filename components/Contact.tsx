export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 bg-neutral-900">
      <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-center">
            Get In Touch
            </h2>

            <p className="text-gray-400 mb-8">
            I am open to QA Automation and SDET opportunities. 
            Feel free to reach out for collaborations or discussions.
            </p>

            <div className="space-x-6">
                <a
                    href="mailto:aswinellath1@gmail.com"
                    className="underline hover:text-white"
                >
                    Email Me
                </a>

                <a
                    href="https://github.com/Aswinellath"
                    target="_blank"
                    className="underline hover:text-white"
                >
                    GitHub
                </a>

                <a
                    href="https://linkedin.com/in/aswin-e-85b2b7131"
                    target="_blank"
                    className="underline hover:text-white"
                >
                    LinkedIn
                </a>
            </div>
      </div>
    </section>
  );
}