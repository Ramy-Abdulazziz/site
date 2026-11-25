import type { Metadata } from "next";
import ArabicDisplay from "@/components/arabic-display";

export const metadata: Metadata = {
    title: "Social card",
    robots: { index: false, follow: false },
};

export default function OgCardPage() {
    return (
        <div className="og-card">
            <p className="og-kicker">software engineer · nyc</p>
            <div className="og-row">
                <h1 className="og-name">
                    <span className="satr" aria-hidden="true" />
                    Ramy Abdulazziz
                </h1>
                <ArabicDisplay />
            </div>
        </div>
    );
}
