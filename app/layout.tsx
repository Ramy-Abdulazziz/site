import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
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
        <html lang="en">
            <head>
                <link rel="icon" type="image/png" href="/ramy_arabic.png" />
            </head>
            <body
                className={cn(
                    "min-h-screen bg-background font-sans antialiased",
                    fontSans.variable
                )}
            >
                {children}
            </body>
        </html>
    );
}
