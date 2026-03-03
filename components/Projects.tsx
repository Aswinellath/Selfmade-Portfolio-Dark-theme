export default function Projects() {
    return (
        <section id="projects" className="py-28 px-6">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-center">Featured Projects</h2>
                <div className="space-y-12">
                    {/* Project 1 */}
                    <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800 hover:border-neutral-600 transition">
                        <h3 className="text-xl font-semibold">
                            Playwright Automation Framework
                        </h3>
                        <p className="text-gray-400 mt-4 leading-7">
                            Designed and implemented a scalable automation framework using Playwright with TypeScript. Followed Page Object Model (POM) architecture, environment-based configuration, parallel execution, and integrated nightly regression runs through GitHub Actions CI/CD.
                        </p>
                        
                        <ul className="mt-4 text-gray-400 list-disc list-inside space-y-1">
                            <li>Parallel test execution</li>
                            <li>Reusable Page Object Model Structure</li>
                            <li>Environment-based configuration using dotenv</li>
                            <li>HTML reporting & CI integration</li>
                        </ul>

                        <div className="mt-6">
                            <a href="https://github.com/Aswinellath/Playwright-project-pack" target="_blank" className="underline">
                            View on GitHub
                            </a>
                        </div>
                    </div>
                    {/* Project 2 */}
                    <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800 hover:border-neutral-600 transition">
                        <h3 className="text-xl font-semibold">API Testing & Backend Validation Suite</h3>
                        <p className="text-gray-400 mt-4 leading-7">
                            Built structured API test collections using Postman and automated execution through Newman CLI. Validated backend data using SQL queries to ensure data integrity across services.
                        </p>

                        <ul className="mt-4 text-gray-400 list-disc list-inside space-y-1">
                            <li>Postman collections with structured test scripts</li>
                            <li>Automated runs via Newman CLI</li>
                            <li>SQL-based backend validation</li>
                            <li>CI/CD pipeline integration</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}