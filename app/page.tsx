import AboutSection from "@/components/about";
import BuiltSection from "@/components/built-section";
import ContactSection from "@/components/contact-section";
import Hero from "@/components/hero";
import Shell from "@/components/shell";
import WorkSection from "@/components/work-section";

export default function Home() {
    return (
        <Shell>
            <Hero />
            <div className="page-frame sections">
                <AboutSection sectionIndex="01" />
                <WorkSection sectionIndex="02" />
                <ContactSection sectionIndex="03" />
            </div>
        </Shell>
    );
}
