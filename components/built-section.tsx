import { builtRows } from "@/content/ledger";
import Ledger from "@/components/ledger";
import SectionHeading from "@/components/section-heading";

export default function BuiltSection({sectionIndex}: {sectionIndex: string}) {
    return (
        <section
            id="built"
            className="scroll-mt-24"
            aria-labelledby="built-heading"
        >
            <SectionHeading
                index={sectionIndex}
                id="built-heading"
                title="Built"
                arabic="صنع"
            />
            <Ledger rows={builtRows} />
       </section>
    );
}
