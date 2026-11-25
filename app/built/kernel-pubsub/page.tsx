import type { Metadata } from "next";
import PlaceholderPage from "@/components/placeholder-page";

export const metadata: Metadata = {
    title: "Kernel pub/sub · Ramy Abdulazziz",
};

export default function KernelPage() {
    return (
        <PlaceholderPage
            kicker="built"
            title="Kernel pub/sub"
            note="Case study forthcoming."
        />
    );
}
