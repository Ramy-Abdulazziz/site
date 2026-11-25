export default function AboutSection({sectionIndex}: {sectionIndex: string}) {
    return (
        <section id="about" className="scroll-mt-24" aria-labelledby="about-heading">
            <header className="section-heading">
                <span className="section-index">{sectionIndex}</span>
                <h2 id="about-heading">About</h2>
                <span lang="ar" dir="rtl" className="section-arabic">
                    عنّي
                </span>
            </header>
            <div className="about-lead">
            <p>
                    I&apos;m a software Engineer currently building high performance backend services with Go, gRPC and Protobuf. I graduated from Stony Brook University in May 2024 with a B.S. in
                    Computer Science and Electrical Engineering. 
                </p>
              
            </div>
            <div className="about-rest">
                <p>
                    The Arabic on this page is my name,{" "}
                    <bdi lang="ar" dir="rtl">
                        رامي
                    </bdi>
                    , representing an intersection between culture, language, and technology.  I&apos;m based in NYC and when I&apos;m not coding, you can
                    find me playing Pokémon Champions and enjoying life with my
                    wife Shazia. Feel free to reach out with project
                    ideas, new opportunities, or to learn more about me.
                </p>
            </div>
        </section>
    );
}
