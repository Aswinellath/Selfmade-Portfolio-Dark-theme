export default function Skills() {
    return (
        <section id="skills" className="py-28 px-6 bg-neutral-900">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-center">Technical Skills</h2>
                <div className="grid gap-12 md:grid-cols-2 text-gray-400">

                    <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800 hover:border-neutral-600 transition">
                        <h3 className="text-white font-semibold mb-3">Automation</h3>
                        <ul className="space-y-2">
                            <li>Playwright</li>
                            <li>Selenium</li>
                            <li>TestNG</li>
                        </ul>
                    </div>

                    <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800 hover:border-neutral-600 transition">
                        <h3 className="text-white font-semibold mb-3">Programming</h3>
                        <ul className="space-y-2">
                            <li>TypeScript</li>
                            <li>Javascript</li>
                            <li>Java</li>
                            <li>Python</li>
                            <li>SQL</li>
                        </ul>
                    </div>

                    <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800 hover:border-neutral-600 transition">
                        <h3 className="text-white font-semibold mb-3">Testing Expertise</h3>
                        <ul className="space-y-2">
                            <li>Functional Testing</li>
                            <li>Regression Testing</li>
                            <li>API Testing (Postman)</li>
                            <li>Backend Validation</li>
                            <li>Exploratory Testing</li>
                        </ul>
                    </div>

                    <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800 hover:border-neutral-600 transition">
                        <h3 className="text-white font-semibold mb-3">DevOps & Tools</h3>
                        <ul className="space-y-2">
                            <li>GitHub Actions (CI/CD)</li>
                            <li>JIRA</li>
                            <li>Agile / Scrum</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}