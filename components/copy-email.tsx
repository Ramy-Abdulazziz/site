"use client";

import { useState } from "react";

const email = "abdulazziz.ramy@gmail.com";

export default function CopyEmail() {
    const [copied, setCopied] = useState(false);

    return (
        <button
            type="button"
            className="copy-email"
            aria-live="polite"
            aria-label={
                copied ? "Email address copied" : "Copy email address"
            }
            onClick={async () => {
                try {
                    await navigator.clipboard.writeText(email);
                    setCopied(true);
                } catch {
                    setCopied(false);
                }
            }}
        >
            {copied ? "copied" : "copy"}
        </button>
    );
}
