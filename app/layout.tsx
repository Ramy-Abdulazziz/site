import type { Metadata } from "next";
import localFont from "next/font/local";
import {
    IBM_Plex_Mono,
    IBM_Plex_Sans,
    IBM_Plex_Sans_Arabic,
} from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { signatureInitScript } from "@/lib/signature";
import { themeInitScript } from "@/lib/theme";

const description = "Engineer and believer in taking the long way in life.";

const plexSans = IBM_Plex_Sans({
    subsets: ["latin"],
    weight: ["400", "500"],
    variable: "--font-plex-sans",
    display: "swap",
    preload: false,
});

const plexMono = IBM_Plex_Mono({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-plex-mono",
    display: "swap",
    preload: false,
});

const plexArabic = IBM_Plex_Sans_Arabic({
    subsets: ["arabic"],
    weight: "400",
    variable: "--font-plex-arabic",
    display: "swap",
    preload: false,
});

const reemKufi = localFont({
    src: "../fonts/ReemKufi-Ramy.woff2",
    weight: "500",
    style: "normal",
    variable: "--font-reem-kufi",
    display: "swap",
    preload: true,
});

const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ramy Abdulazziz",
    url: "https://ramyabdulazziz.dev",
    jobTitle: "Software engineer",
    email: "mailto:abdulazziz.ramy@gmail.com",
    address: {
        "@type": "PostalAddress",
        addressLocality: "New York",
        addressRegion: "NY",
        addressCountry: "US",
    },
    sameAs: [
        "https://github.com/ramy-abdulazziz",
        "https://linkedin.com/in/ramyabdulazziz",
    ],
};

export const metadata: Metadata = {
    metadataBase: new URL("https://ramyabdulazziz.dev"),
    title: "Ramy Abdulazziz",
    description,
    openGraph: {
        title: "Ramy Abdulazziz",
        description,
        url: "https://ramyabdulazziz.dev",
        siteName: "Ramy Abdulazziz",
        images: [
            {
                url: "/og.png",
                width: 1200,
                height: 630,
                alt: "Ramy Abdulazziz",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Ramy Abdulazziz",
        description,
        images: ["/og.png"],
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
                <script
                    dangerouslySetInnerHTML={{ __html: signatureInitScript }}
                />
            </head>
            <body className="min-h-screen bg-bg font-sans text-body-sm text-text-2 antialiased lg:text-body">
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
                />
                {children}
            </body>
        </html>
    );
}
