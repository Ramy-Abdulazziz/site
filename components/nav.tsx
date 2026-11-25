import Image from "next/image";
import Link from "next/link";
import ramy from "@/public/ramy.svg";

const Nav = () => {
    return (
        <header className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-md">
            <div className="page-frame flex items-center gap-6 py-2">
                <Link
                    href="/"
                    aria-label="Ramy Abdulazziz, home"
                    className="inline-flex shrink-0"
                >
                    <Image
                        src={ramy}
                        alt=""
                        width={400}
                        height={300}
                        priority
                        className="signature-mark h-10 w-auto origin-center -rotate-[8deg] md:h-14"
                    />
                </Link>
                <nav
                    aria-label="Primary"
                    className="flex items-center gap-6 font-mono text-meta-sm lowercase text-text-3 lg:text-meta"
                >
                    <a href="#about-me" className="hover:text-text-1">
                        about
                    </a>
                    <a href="#links" className="hover:text-text-1">
                        connect
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Nav;
