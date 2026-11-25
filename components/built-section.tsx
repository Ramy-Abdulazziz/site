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
            <p className="ledger-note">
                Low-level coursework in C and AVR assembly, including the
                public{" "}
                <a
                    href="https://github.com/Ramy-Abdulazziz/ADC_signl_conv"
                    target="_blank"
                    rel="noreferrer"
                >
                    ADC_signl_conv
                </a>{" "}
                and{" "}
                <a
                    href="https://github.com/Ramy-Abdulazziz/logic_ops"
                    target="_blank"
                    rel="noreferrer"
                >
                    logic_ops
                </a>{" "}
                repositories.
            </p>
        </section>
    );
}
