import type { Metadata } from "next";
import PlaceholderPage from "@/components/placeholder-page";

export const metadata: Metadata = {
    title: "Résumé · Ramy Abdulazziz",
};

export default function ResumePage() {
    return (
        <PlaceholderPage
            kicker="résumé"
            title="Résumé"
            note="The public résumé PDF has not been provided yet."
        />
    );
}
