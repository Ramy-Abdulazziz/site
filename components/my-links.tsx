import Link from "next/link";

const links = [
    {
        name: "github",
        href: "https://github.com/ramy-abdulazziz",
    },
    {
        name: "linkedin",
        href: "https://linkedin.com/in/ramyabdulazziz",
    },
];

const Mylinks = () => {
    return (
        <section id="links" aria-labelledby="links-heading">
            <h2
                id="links-heading"
                className="mb-6 font-sans text-section-sm text-text-1 lg:text-section"
            >
                links
            </h2>
            <ul className="flex flex-wrap gap-6 font-mono text-meta-sm text-text-3 lg:text-meta">
                {links.map((link) => (
                    <li key={link.name}>
                        <Link
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            className="underline decoration-line underline-offset-4 hover:text-text-1 hover:decoration-nuqta"
                        >
                            {link.name} ↗
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Mylinks;
