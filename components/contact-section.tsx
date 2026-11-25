import CopyEmail from "@/components/copy-email";
import SectionHeading from "@/components/section-heading";

export default function ContactSection() {
    return (
        <section
            id="contact"
            className="scroll-mt-24"
            aria-labelledby="contact-heading"
        >
            <SectionHeading
                index="04"
                id="contact-heading"
                title="Contact"
                arabic="تواصل"
            />
            <p className="contact-email">
                <a href="mailto:abdulazziz.ramy@gmail.com">
                    abdulazziz.ramy@gmail.com
                </a>
                <CopyEmail />
            </p>
            <ul className="contact-links">
                <li>
                    <a
                        href="https://github.com/ramy-abdulazziz"
                        target="_blank"
                        rel="noreferrer"
                    >
                        github ↗
                    </a>
                </li>
                <li>
                    <a
                        href="https://linkedin.com/in/ramyabdulazziz"
                        target="_blank"
                        rel="noreferrer"
                    >
                        linkedin ↗
                    </a>
                </li>
                <li>
                    <a href="/resume">résumé</a>
                </li>
            </ul>
            <p className="contact-place">based in NYC</p>
        </section>
    );
}
