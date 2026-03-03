export default function Skills() {
    return (
        <section className="py-24 px-6 bg-neutral-900">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold mb-10 text-center">Technical Skills</h2>
                <div className="grid md:grid-cols-2 gap-12 text-gray-400">

                    <div className="bg-black/40 p-6 rounded-lg border border-neutral-800">
                        <h3 className="text-white font-semibold mb-3">Automation</h3>
                        <ul className="space-y-2">
                            <li>Playwright</li>
                            <li>Selenium</li>
                            <li>TestNG</li>
                        </ul>
                    </div>

                    <div className="bg-black/40 p-6 rounded-lg border border-neutral-800">
                        <h3 className="text-white font-semibold mb-3">Programming</h3>
                        <ul className="space-y-2">
                            <li>TypeScript</li>
                            <li>Javascript</li>
                            <li>Java</li>
                            <li>Python</li>
                            <li>SQL</li>
                        </ul>
                    </div>

                    <div className="bg-black/40 p-6 rounded-lg border border-neutral-800">
                        <h3 className="text-white font-semibold mb-3">Testing Expertise</h3>
                        <ul className="space-y-2">
                            <li>Functional Testing</li>
                            <li>Regression Testing</li>
                            <li>API Testing (Postman)</li>
                            <li>Backend Validation</li>
                            <li>Exploratory Testing</li>
                        </ul>
                    </div>

                    <div className="bg-black/40 p-6 rounded-lg border border-neutral-800">
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