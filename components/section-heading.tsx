export default function SectionHeading({
    index,
    id,
    title,
    arabic,
}: {
    index: string;
    id: string;
    title: string;
    arabic: string;
}) {
    return (
        <header className="section-heading">
            <span className="section-index">{index}</span>
            <h2 id={id}>{title}</h2>
            <span lang="ar" dir="rtl" className="section-arabic">
                {arabic}
            </span>
        </header>
    );
}
