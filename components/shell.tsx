import Colophon from "@/components/colophon";
import Nav from "@/components/nav";

export default function Shell({ children }: { children: React.ReactNode }) {
    return (
        <>
            <a href="#content" className="skip-link">
                Skip to content
            </a>
            <Nav />
            <main id="content">{children}</main>
            <Colophon />
        </>
    );
}
