import type { Metadata } from "next";
import {
    IBM_Plex_Mono,
    IBM_Plex_Sans,
    IBM_Plex_Sans_Arabic,
    Reem_Kufi,
} from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { themeInitScript } from "@/lib/theme";

const plexSans = IBM_Plex_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    variable: "--font-plex-sans",
    display: "swap",
});

const plexMono = IBM_Plex_Mono({
    subsets: ["latin"],
    weight: ["400", "500"],
    variable: "--font-plex-mono",
    display: "swap",
});

const plexArabic = IBM_Plex_Sans_Arabic({
    subsets: ["arabic"],
    weight: ["400", "500"],
    variable: "--font-plex-arabic",
    display: "swap",
});

const reemKufi = Reem_Kufi({
    subsets: ["arabic"],
    weight: "500",
    variable: "--font-reem-kufi",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Ramy Abdulazziz",
    description: "Engineer and believer in taking the long way in life.",
    icons: {
        icon: "/ramy_arabic.png",
    },
    openGraph: {
        title: "Ramy Abdulazziz",
        description: "Engineer and believer in taking the long way in life.",
        url: "https://ramyabdulazziz.dev",
        siteName: "Ramy Abdulazziz",
        images: [
            {
                url: "https://ramyabdulazziz.dev/ramy_arabic.png",
                width: 800,
                height: 600,
                alt: "Ramy in Arabic",
            },
        ],
        locale: "en_US",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={cn(
                "dark",
                plexSans.variable,
                plexMono.variable,
                plexArabic.variable,
                reemKufi.variable
            )}
            suppressHydrationWarning
        >
            <head>
                <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
                <link rel="icon" type="image/png" href="/ramy_arabic.png" />
            </head>
            <body className="min-h-screen bg-bg font-sans text-body-sm text-text-2 antialiased lg:text-body">
                {children}
            </body>
        </html>
    );
}
