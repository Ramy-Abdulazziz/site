import AboutSection from "@/components/about";
import InfoSection from "@/components/info-section";
import MovingName from "@/components/moving-name";
import Mylinks from "@/components/my-links";
import Nav from "@/components/nav";
import ThemeToggle from "@/components/theme-toggle";

export default function Home() {
    return (
        <>
            <a href="#content" className="skip-link">
                Skip to content
            </a>
            <Nav />
            <main id="content" className="page-frame pb-16 pt-10 lg:pb-26 lg:pt-16">
                <MovingName />
                <div id="about-me" className="mt-16 lg:mt-26">
                    <AboutSection />
                </div>
                <hr className="my-16 border-0 border-t border-line lg:my-26" />
                <InfoSection />
                <hr className="my-16 border-0 border-t border-line lg:my-26" />
                <Mylinks />
                <p className="mt-16 font-mono text-meta-sm text-text-3 lg:mt-26 lg:text-meta">
                    Ramy Abdulazziz
                </p>
            </main>
            <footer className="page-frame border-t border-line py-6">
                <ThemeToggle />
            </footer>
        </>
    );
}
