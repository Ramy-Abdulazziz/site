import type { Metadata } from "next";
import CaseStudy from "@/components/case-study";

export const metadata: Metadata = {
    title: "vCPU scheduler for KVM · Ramy Abdulazziz",
    description:
        "vCPU-to-pCPU pinning and a memory coordinator for KVM, written in C.",
};

export default function KvmCaseStudy() {
    return (
        <CaseStudy
            kicker="C · KVM"
            title="vCPU scheduler for KVM"
            backHref="/#built"
            backLabel="back to built"
        >
            <p>
                This is KVM work written in C. Virtual CPUs had to be placed on
                physical CPUs, and memory had to stay available to the virtual
                machines that could not afford to lose it.
            </p>
            <h2>What was built</h2>
            <p>
                vCPU-to-pCPU pinning balances load and cuts context switches. A
                memory coordinator protects critical VMs under contention. The
                published description stops there. It does not say by how much
                the switches fell, or how the coordinator chooses a critical
                VM.
            </p>
            <h2>What this page does not add</h2>
            <p>
                There is no public repository. This page does not add a
                percentage, a benchmark, or a link to code.
            </p>
        </CaseStudy>
    );
}
