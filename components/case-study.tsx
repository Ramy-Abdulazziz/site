import Shell from "@/components/shell";

export default function CaseStudy({
    kicker,
    date,
    title,
    backHref,
    backLabel,
    children,
}: {
    kicker: string;
    date?: string;
    title: string;
    backHref: string;
    backLabel: string;
    children: React.ReactNode;
}) {
    return (
        <Shell>
            <article className="page-frame case-study">
                <p className="case-kicker">
                    {kicker}
                    {date ? <span className="case-kicker-date">{date}</span> : null}
                </p>
                <h1>{title}</h1>
                {children}
                <p className="case-back">
                    <a href={backHref}>{backLabel}</a>
                </p>
            </article>
        </Shell>
    );
}
