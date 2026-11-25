import AboutSection from "@/components/about";
import Hero from "@/components/hero";
import InfoSection from "@/components/info-section";
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
            <main id="content">
                <Hero />
                <div className="page-frame pb-16 pt-16 lg:pb-26 lg:pt-26">
                    <div id="about" className="scroll-mt-24">
                        <AboutSection />
                    </div>
                    <hr className="my-16 border-0 border-t border-line lg:my-26" />
                    {/* Existing projects stand in for Work until the ledgers land. */}
                    <div id="work" className="scroll-mt-24">
                        <InfoSection />
                    </div>
                    <hr className="my-16 border-0 border-t border-line lg:my-26" />
                    <div id="contact" className="scroll-mt-24">
                        <Mylinks />
                    </div>
                    <p className="mt-16 font-mono text-meta-sm text-text-3 lg:mt-26 lg:text-meta">
                        Ramy Abdulazziz
                    </p>
                </div>
            </main>
            <footer className="page-frame border-t border-line py-6">
                <ThemeToggle />
            </footer>
        </>
    );
}
