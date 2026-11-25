import type { LedgerRow } from "@/content/ledger";
import RichText from "@/components/rich-text";

function RowBody({ row }: { row: LedgerRow }) {
    return (
        <>
            <span className={row.mark ? "ledger-mark" : "ledger-mark is-empty"}>
                <span className="row-nuqta" aria-hidden="true" />
                {row.mark}
            </span>
            <span className="ledger-title-block">
                <span className="row-title">{row.title}</span>
                {row.context ? (
                    <span className="row-context">{row.context}</span>
                ) : null}
            </span>
            <span className="row-body">
                <RichText text={row.body} />
            </span>
            <span className="ledger-stack">
                {row.stack.map((line) => (
                    <span key={line}>{line}</span>
                ))}
            </span>
        </>
    );
}

export default function Ledger({ rows }: { rows: LedgerRow[] }) {
    return (
        <div className="ledger">
            {rows.map((row) =>
                row.href ? (
                    <a
                        key={row.id}
                        href={row.href}
                        className="ledger-row"
                        {...(row.external
                            ? { target: "_blank", rel: "noreferrer" }
                            : {})}
                    >
                        <RowBody row={row} />
                    </a>
                ) : (
                    <div key={row.id} className="ledger-row">
                        <RowBody row={row} />
                    </div>
                )
            )}
        </div>
    );
}
