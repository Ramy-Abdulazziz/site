import type { Metadata } from "next";
import PlaceholderPage from "@/components/placeholder-page";

export const metadata: Metadata = {
    title: "Subscription lifecycle and billing flows · Ramy Abdulazziz",
};

export default function OptimumPage() {
    return (
        <PlaceholderPage
            kicker="work"
            title="Subscription lifecycle and billing flows"
            note="Case study forthcoming."
        />
    );
}
