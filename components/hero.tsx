const ledeLead = "Software engineer currently building Go and gRPC services.";
const ledeRest =
    "I work on distributed services, machine learning, full stack applications, and more.";

function HeroLinks({ className = "" }: { className?: string }) {
    return (
        <div className={`hero-links ${className}`}>
            <a href="#work">read the work ↓</a>
            <a href="/resume">résumé (pdf) ↗</a>
            <a href="mailto:abdulazziz.ramy@gmail.com">
                abdulazziz.ramy@gmail.com
            </a>
        </div>
    );
}

function Lede() {
    return (
        <p className="lede">
            <strong>{ledeLead}</strong> {ledeRest}
        </p>
    );
}

function Facts() {
    return (
        <div className="facts">
            <div>
                <p className="fact-label">Now</p>
                <p className="fact-value">SDE, Optimum · NYC</p>
            </div>
            <div>
                <p className="fact-label">Study</p>
                <p className="fact-value">
                    B.S. Computer Science, Electrical Engineering · Stony Brook
                    &apos;24
                </p>
            </div>
        </div>
    );
}

function LetterDots() {
    return (
        <span className="letter-dots" aria-hidden="true">
            <span />
            <span />
        </span>
    );
}

export default function Hero() {
    return (
        <section className="hero" aria-label="Introduction">
            <div className="page-frame">
                <div className="hero-stage">
                    <div className="hero-hairlines" aria-hidden="true">
                        {Array.from({ length: 13 }, (_, index) => (
                            <span
                                key={index}
                                style={{ left: `${(index / 12) * 100}%` }}
                            />
                        ))}
                    </div>

                    <div className="hero-desktop">
                        <div className="name-row">
                            <h1 className="latin-name">
                                <span className="kicker">
                                    software engineer · nyc
                                </span>
                                <span className="satr" aria-hidden="true" />
                                Ramy Abdulazziz
                            </h1>
                            <div className="display-col">
                                <p
                                    className="arabic-display"
                                    lang="ar"
                                    dir="rtl"
                                >
                                    رامى
                                    <LetterDots />
                                </p>
                                <p className="arabic-full" lang="ar" dir="rtl">
                                    رامي عبدالعزيز
                                </p>
                            </div>
                        </div>
                        <div className="lede-row">
                            <Lede />
                            <HeroLinks />
                        </div>
                        <Facts />
                    </div>

                    <div className="hero-mobile">
                        <div className="mobile-display-row">
                            <p className="arabic-display" lang="ar" dir="rtl">
                                رامى
                                <LetterDots />
                            </p>
                            <span className="mobile-satr" aria-hidden="true" />
                        </div>
                        <h1 className="latin-name latin-name-mobile">
                            <span>Ramy</span>
                            <span>Abdulazziz</span>
                        </h1>
                        <div className="mobile-kicker-row">
                            <p className="kicker kicker-flow">
                                software engineer · nyc
                            </p>
                            <p className="arabic-full" lang="ar" dir="rtl">
                                رامي عبدالعزيز
                            </p>
                        </div>
                        <Lede />
                       <div className="hero-actions">
                            <a className="hero-btn hero-btn-fill" href="/resume">
                                résumé ↗
                            </a>
                            <a
                                className="hero-btn"
                                href="mailto:abdulazziz.ramy@gmail.com"
                            >
                                email
                            </a>
                            <a
                                className="hero-btn"
                                href="https://github.com/ramy-abdulazziz"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                github
                            </a>
                            <a
                                className="hero-btn"
                                href="https://linkedin.com/in/ramyabdulazziz"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                linkedin
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
