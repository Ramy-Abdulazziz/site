export default function ArabicDisplay({
    className = "",
}: {
    className?: string;
}) {
    return (
        <p
            className={className ? `arabic-display ${className}` : "arabic-display"}
            lang="ar"
            dir="rtl"
        >
            رامى
            <span className="letter-dots" aria-hidden="true">
                <span />
                <span />
            </span>
        </p>
    );
}
