import { workRows } from "@/content/ledger";
import Ledger from "@/components/ledger";
import SectionHeading from "@/components/section-heading";

export default function WorkSection({sectionIndex}: {sectionIndex: string}) {
    return (
        <section id="work" className="scroll-mt-24" aria-labelledby="work-heading">
            <SectionHeading
                index={sectionIndex}
                id="work-heading"
                title="Work"
                arabic="عمل"
            />
            <Ledger rows={workRows} />
        </section>
    );
}
