"use client";

import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import ramy from "@/public/ramy.svg";

const sections = [
    { id: "about", href: "#about", label: "about", arabic: "عنّي" },
    { id: "work", href: "#work", label: "work", arabic: "عمل" },
    { id: "contact", href: "#contact", label: "contact", arabic: "تواصل" },
] as const;

const menuSections = sections.filter((item) => item.id !== "contact");

const desktopLinks = [
    ...sections.slice(0, 3),
    { id: "resume", href: "/resume", label: "résumé", arabic: "" },
];

function Signature() {
    return (
        <Link
            href="/"
            aria-label="Ramy Abdulazziz, home"
            className="signature-link"
        >
            <span className="signature-crop">
                <Image
                    src={ramy}
                    alt=""
                    width={400}
                    height={300}
                    className="signature-mark"
                />
            </span>
        </Link>
    );
}

export default function Nav() {
    const [open, setOpen] = useState(false);
    const [current, setCurrent] = useState<string | null>(null);
    const [dotX, setDotX] = useState(0);
    const [dotOn, setDotOn] = useState(false);
    const listRef = useRef<HTMLDivElement>(null);
    const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
    const menuButtonRef = useRef<HTMLButtonElement>(null);
    const closeButtonRef = useRef<HTMLButtonElement>(null);
    const dialogId = useId();

    useEffect(() => {
        const nodes = ["work", "built", "about", "contact"]
            .map((id) => document.getElementById(id))
            .filter((node): node is HTMLElement => node !== null);
        if (nodes.length === 0) {
            return;
        }
        const visible = new Map<string, number>();
        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        visible.set(entry.target.id, entry.intersectionRatio);
                    } else {
                        visible.delete(entry.target.id);
                    }
                }
                const best = Array.from(visible.entries()).sort(
                    (a, b) => b[1] - a[1]
                )[0];
                setCurrent(best ? best[0] : null);
            },
            { rootMargin: "-30% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] }
        );
        nodes.forEach((node) => observer.observe(node));
        return () => observer.disconnect();
    }, []);

    useLayoutEffect(() => {
        const list = listRef.current;
        const link = current ? linkRefs.current[current] : null;
        if (!list || !link) {
            setDotOn(false);
            return;
        }
        const listBox = list.getBoundingClientRect();
        const linkBox = link.getBoundingClientRect();
        setDotX(linkBox.left - listBox.left + linkBox.width / 2);
        setDotOn(true);
    }, [current]);

    useEffect(() => {
        const onResize = () => {
            const list = listRef.current;
            const link = current ? linkRefs.current[current] : null;
            if (!list || !link) {
                return;
            }
            const listBox = list.getBoundingClientRect();
            const linkBox = link.getBoundingClientRect();
            setDotX(linkBox.left - listBox.left + linkBox.width / 2);
        };
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, [current]);

    useEffect(() => {
        if (!open) {
            return;
        }
        const previous = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        closeButtonRef.current?.focus();
        const onKey = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setOpen(false);
                menuButtonRef.current?.focus();
                return;
            }
            if (event.key !== "Tab") {
                return;
            }
            const dialog = document.getElementById(dialogId);
            if (!dialog) {
                return;
            }
            const focusable = Array.from(
                dialog.querySelectorAll<HTMLElement>("a[href], button")
            );
            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            if (!first || !last) {
                return;
            }
            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }
        };
        window.addEventListener("keydown", onKey);
        return () => {
            document.body.style.overflow = previous;
            window.removeEventListener("keydown", onKey);
        };
    }, [dialogId, open]);

    return (
        <header className="site-nav">
            <div className="page-frame flex items-center gap-6 py-3">
                <Signature />
                <div ref={listRef} className="nav-links">
                    <nav className="flex items-center gap-8" aria-label="Primary">
                        {desktopLinks.map((item) => (
                            <a
                                key={item.id}
                                href={item.href}
                                ref={(node) => {
                                    linkRefs.current[item.id] = node;
                                }}
                                aria-current={
                                    current === item.id ? "true" : undefined
                                }
                                className="nav-link"
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>
                    <span
                        className="nav-nuqta"
                        aria-hidden="true"
                        style={{
                            transform: `translateX(${dotX}px) translateX(-50%) rotate(45deg)`,
                            opacity: dotOn ? 1 : 0,
                        }}
                    />
                </div>
                <button
                    ref={menuButtonRef}
                    type="button"
                    className="menu-button"
                    aria-expanded={open}
                    aria-controls={dialogId}
                    onClick={() => setOpen(true)}
                >
                    menu
                </button>
            </div>
            {open
                ? createPortal(
                    <div
                        id={dialogId}
                        className="menu-sheet"
                        role="dialog"
                        aria-modal="true"
                        aria-label="Menu"
                    >
                        <div className="page-frame flex items-center justify-between py-3">
                            <Signature />
                            <button
                                ref={closeButtonRef}
                                type="button"
                                className="menu-button"
                                onClick={() => {
                                    setOpen(false);
                                    menuButtonRef.current?.focus();
                                }}
                            >
                                close
                            </button>
                        </div>
                        <nav
                            className="page-frame menu-list"
                            aria-label="Sections"
                        >
                            {menuSections.map((item) => (
                                <a
                                    key={item.id}
                                    href={item.href}
                                    className="menu-row"
                                    onClick={() => setOpen(false)}
                                >
                                    <span>{item.label}</span>
                                    <span lang="ar" dir="rtl">
                                        {item.arabic}
                                    </span>
                                </a>
                            ))}
                        </nav>
                    </div>,
                    document.body
                )
                : null}
        </header>
    );
}
