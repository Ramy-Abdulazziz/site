import type { Metadata } from "next";
import CaseStudy from "@/components/case-study";

export const metadata: Metadata = {
    title: "Kernel pub/sub · Ramy Abdulazziz",
    description:
        "A Linux kernel module in C: netlink IPC, rhashtable topics, and fine-grained locking.",
};

export default function KernelCaseStudy() {
    return (
        <CaseStudy
            kicker="Linux kernel module · C"
            title="Kernel pub/sub"
            backHref="/#built"
            backLabel="back to built"
        >
            <p>
                This is a Linux kernel module written in C. Userspace clients
                needed a way to subscribe to topics, and the kernel needed a
                way to talk to those clients without handing them its own
                memory.
            </p>
            <h2>What was built</h2>
            <p>
                The IPC between the kernel and userspace is netlink sockets.
                Topic subscriptions sit on the kernel&apos;s rhashtable.
                Concurrent clients are kept in line with fine-grained locking.
                That is the whole published description: three mechanisms, no
                measurements.
            </p>
            <h2>What this page does not add</h2>
            <p>
                There is no public repository and no published result. This
                page does not add a throughput number, a latency number, a
                lock-ordering story, or a link to code.
            </p>
        </CaseStudy>
    );
}
