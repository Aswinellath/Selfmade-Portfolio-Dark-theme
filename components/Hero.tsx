export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
            <h1 className="text-5x1 font-bold">ASWIN E</h1>
            <p className="text-xl mt-4 text-grey-400">
                QA Engineer | Automation | Playwright & CI/CD
            </p>
            <div className="mt-6 space-x-4">
                <a href="#projects" className="px-6 py-2 bg-white text-black rounded">
                    View Projects
                </a>
                <a href="/resume.pdf" className="px-6 py-2 border border-white rounded">
                    Download Resume
                </a>
            </div>
        </section>
    );
}