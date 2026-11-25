export default function AboutSection() {
    return (
        <section id="about" className="scroll-mt-24" aria-labelledby="about-heading">
            <header className="section-heading">
                <span className="section-index">03</span>
                <h2 id="about-heading">About</h2>
                <span lang="ar" dir="rtl" className="section-arabic">
                    عنّي
                </span>
            </header>
            <div className="about-lead">
                <p>
                    Backend engineer currently building Go and gRPC services. I
                    work from distributed services down to kernels and
                    hardware. I&apos;m based in NYC.
                </p>
                <span lang="ar" dir="rtl" className="about-pull">
                    رامي
                </span>
            </div>
            <div className="about-rest">
                <p>
                    I graduated from Stony Brook in May 2024 with a B.S. in
                    Computer Science and Electrical Engineering.
                </p>
                <p>
                    The Arabic on this page is my name,{" "}
                    <bdi lang="ar" dir="rtl">
                        رامي
                    </bdi>
                    . Before Optimum I
                    worked on a research model of how people perceive Arabic
                    letter features, so the script is both heritage and
                    something I&apos;ve studied.
                </p>
                <p>
                    I&apos;m based in NYC and when I&apos;m not coding, you can
                    find me climbing the ladder in showdown and enjoying life
                    with my fiancé Shazia. Feel free to reach out with project
                    ideas, new opportunities, or to learn more about me.
                </p>
            </div>
        </section>
    );
}
