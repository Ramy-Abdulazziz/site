// Regenerates public/og-v2.png from /og.
// That route renders ArabicDisplay, so the yeh dots use the same
// .letter-dots rules as the hero and cannot be positioned separately.
//
//   npm run dev -- --port 3456
//   node scripts/render-og.mjs
//
// Requires playwright-core and Chrome. The PNG is committed; Vercel does not run this.

import { chromium } from "playwright-core";

const browser = await chromium.launch({
    executablePath: process.env.CHROME_PATH ?? "/usr/bin/google-chrome-stable",
    args: ["--no-sandbox"],
});
const page = await browser.newPage({
    viewport: { width: 1200, height: 630 },
    deviceScaleFactor: 1,
    colorScheme: "dark",
});
await page.goto("http://localhost:3456/og", { waitUntil: "networkidle" });
await page.locator(".og-card").screenshot({ path: "public/og-v2.png" });
await browser.close();
