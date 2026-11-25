import Link from "next/link";

const projects = [
    {
        name: "mintmaps",
        desc: "Full stack web app with social features built with Next.js, MongoDB, and TypeScript for users to create, upload, edit, and share multiple map types.",
        link: "https://mintmaps.site/",
    },
    {
        name: "financial sentiment analysis",
        desc: "A sentiment analysis machine learning pipeline built using PyTorch and trained on the Financial Phrasebank dataset. Different fine tuning strategies were used for transformer models like DISTILBert and Elektra.",
        link: "https://github.com/Ramy-Abdulazziz/Financial-Sentiment-Analysis",
    },
    {
        name: "automated assignment fetcher",
        desc: "A tool for SBU students to be able to automate adding their assignments from the universities learning management site, using Selenium, BeautifulSoup, and Google Cloud Platform, and automatically add them to their google calendar.",
        link: "https://github.com/Ramy-Abdulazziz/AutomatedAssignmentFetcher",
    },
];

const InfoSection = () => {
    return (
        <section aria-labelledby="projects-heading">
            <h2
                id="projects-heading"
                className="mb-6 font-sans text-section-sm text-text-1 lg:text-section"
            >
                projects
            </h2>
            <ul className="space-y-6">
                {projects.map((proj) => (
                    <li key={proj.name}>
                        <Link
                            href={proj.link}
                            target="_blank"
                            rel="noreferrer"
                            className="font-sans text-row-title-sm text-text-1 underline decoration-line underline-offset-4 hover:decoration-nuqta lg:text-row-title"
                        >
                            {proj.name}
                        </Link>
                        <p className="mt-2 max-w-[66ch] text-body-sm text-text-2 lg:text-body">
                            {proj.desc}
                        </p>
                    </li>
                ))}
            </ul>
            <p className="mt-6 font-mono text-meta-sm text-text-3 lg:text-meta">
                <Link
                    href="https://github.com/ramy-abdulazziz"
                    target="_blank"
                    rel="noreferrer"
                    className="underline decoration-line underline-offset-4 hover:text-text-1 hover:decoration-nuqta"
                >
                    all projects →
                </Link>
            </p>
        </section>
    );
};

export default InfoSection;
