import ThemeToggle from "@/components/theme-toggle";

const sha = process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 7);

export default function Colophon() {
    return (
        <footer className="colophon">
            <div className="page-frame">
                <p>
                    IBM Plex, Reem Kufi, and Next.js
                    {sha ? ` · ${sha}` : ""}. Based in NYC.
                </p>
                <p>believer in taking the long way in life.</p>
                <ThemeToggle />
            </div>
        </footer>
    );
}
