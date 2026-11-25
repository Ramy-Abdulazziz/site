"use client";

import { useLayoutEffect, useState } from "react";
import {
    applyTheme,
    readStoredTheme,
    resolveTheme,
    systemTheme,
    type Theme,
} from "@/lib/theme";

export default function ThemeToggle() {
    const [theme, setTheme] = useState<Theme | null>(null);

    useLayoutEffect(() => {
        const initial = resolveTheme();
        applyTheme(initial, false);
        setTheme(initial);

        const media = window.matchMedia("(prefers-color-scheme: light)");
        const onChange = () => {
            if (readStoredTheme()) {
                return;
            }
            const next = systemTheme();
            applyTheme(next, false);
            setTheme(next);
        };
        media.addEventListener("change", onChange);
        return () => media.removeEventListener("change", onChange);
    }, []);

    function choose(next: Theme) {
        applyTheme(next, true);
        setTheme(next);
    }

    return (
        <div className="font-mono text-meta-sm lowercase text-text-3 lg:text-meta">
            <button
                type="button"
                className="theme-dark"
                aria-pressed={theme === "dark"}
                onClick={() => choose("dark")}
            >
                dark
            </button>
            <span aria-hidden="true"> / </span>
            <button
                type="button"
                className="theme-light"
                aria-pressed={theme === "light"}
                onClick={() => choose("light")}
            >
                light
            </button>
        </div>
    );
}
