import { builtRows } from "@/content/ledger";
import Ledger from "@/components/ledger";
import SectionHeading from "@/components/section-heading";

export default function BuiltSection() {
    return (
        <section
            id="built"
            className="scroll-mt-24"
            aria-labelledby="built-heading"
        >
            <SectionHeading
                index="02"
                id="built-heading"
                title="Built"
                arabic="صنع"
            />
            <Ledger rows={builtRows} />
       </section>
    );
}
