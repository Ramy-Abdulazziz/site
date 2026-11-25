import Shell from "@/components/shell";

export default function PlaceholderPage({
    kicker,
    title,
    note,
}: {
    kicker: string;
    title: string;
    note: string;
}) {
    return (
        <Shell>
            <article className="page-frame placeholder">
                <p className="placeholder-kicker">{kicker}</p>
                <h1>{title}</h1>
                <p>{note}</p>
            </article>
        </Shell>
    );
}
