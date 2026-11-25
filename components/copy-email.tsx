"use client";

import { useState } from "react";

const email = "abdulazziz.ramy@gmail.com";

export default function CopyEmail() {
    const [copied, setCopied] = useState(false);

    return (
        <button
            type="button"
            className="copy-email"
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
