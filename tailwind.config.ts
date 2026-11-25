import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
        "./app/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./lib/**/*.{ts,tsx}",
    ],
    theme: {
        borderRadius: {
            none: "0px",
            sm: "0px",
            DEFAULT: "0px",
            md: "0px",
            lg: "0px",
            xl: "0px",
            "2xl": "0px",
            "3xl": "0px",
            full: "0px",
        },
        boxShadow: {
            none: "none",
            sm: "none",
            DEFAULT: "none",
            md: "none",
            lg: "none",
            xl: "none",
            "2xl": "none",
            inner: "none",
        },
        extend: {
            fontFamily: {
                sans: ["var(--font-plex-sans)", "sans-serif"],
                mono: ["var(--font-plex-mono)", "ui-monospace", "monospace"],
                arabic: ["var(--font-plex-arabic)", "sans-serif"],
                display: ["var(--font-reem-kufi)", "sans-serif"],
            },
            colors: {
                bg: "var(--bg)",
                surface: "var(--surface)",
                line: "var(--line)",
                "line-strong": "var(--line-strong)",
                "text-1": "var(--text-1)",
                "text-2": "var(--text-2)",
                "text-3": "var(--text-3)",
                nuqta: "var(--nuqta)",
            },
            spacing: {
                page: "20px",
                gutter: "24px",
                section: "104px",
                "section-sm": "64px",
            },
            maxWidth: {
                content: "1280px",
                frame: "1440px",
            },
            fontSize: {
                name: [
                    "76px",
                    {
                        lineHeight: "1",
                        letterSpacing: "-0.035em",
                        fontWeight: "500",
                    },
                ],
                "name-sm": [
                    "40px",
                    {
                        lineHeight: "1.05",
                        letterSpacing: "-0.035em",
                        fontWeight: "500",
                    },
                ],
                display: ["330px", { lineHeight: "1", fontWeight: "500" }],
                "display-sm": ["150px", { lineHeight: "1", fontWeight: "500" }],
                section: ["34px", { lineHeight: "1.2", fontWeight: "500" }],
                "section-sm": [
                    "24px",
                    { lineHeight: "1.25", fontWeight: "500" },
                ],
                "row-title": ["20px", { lineHeight: "1.3", fontWeight: "500" }],
                "row-title-sm": [
                    "18px",
                    { lineHeight: "1.3", fontWeight: "500" },
                ],
                body: ["17px", { lineHeight: "1.6" }],
                "body-sm": ["16px", { lineHeight: "1.55" }],
                lede: ["21px", { lineHeight: "1.5" }],
                "lede-sm": ["17px", { lineHeight: "1.55" }],
                meta: ["13px", { lineHeight: "1.4" }],
                "meta-sm": ["12px", { lineHeight: "1.4" }],
                kicker: [
                    "12px",
                    { lineHeight: "1.4", letterSpacing: "0.06em" },
                ],
                "kicker-sm": [
                    "11px",
                    { lineHeight: "1.4", letterSpacing: "0.06em" },
                ],
                "ar-label": ["20px", { lineHeight: "1.7" }],
                "ar-label-sm": ["16px", { lineHeight: "1.7" }],
            },
        },
    },
    plugins: [],
};

export default config;
