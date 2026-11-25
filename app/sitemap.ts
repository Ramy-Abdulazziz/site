import type { MetadataRoute } from "next";

const base = "https://ramyabdulazziz.dev";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        { url: base, changeFrequency: "monthly", priority: 1 },
        {
            url: `${base}/work/optimum`,
            changeFrequency: "yearly",
            priority: 0.6,
        },
        {
            url: `${base}/built/kernel-pubsub`,
            changeFrequency: "yearly",
            priority: 0.6,
        },
        {
            url: `${base}/built/kvm-scheduler`,
            changeFrequency: "yearly",
            priority: 0.6,
        },
        { url: `${base}/resume`, changeFrequency: "yearly", priority: 0.4 },
    ];
}
