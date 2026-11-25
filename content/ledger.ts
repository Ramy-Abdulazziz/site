export type LedgerRow = {
    id: string;
    mark: string;
    title: string;
    context?: string;
    body: string;
    stack: string[];
    href?: string;
    external?: boolean;
};

export const workRows: LedgerRow[] = [
    {
        id: "optimum",
        mark: "2025 — present",
        title: "Subscription lifecycle and billing flows",
        context: "Optimum · Software Development Engineer · NYC",
        body: "Go, gRPC and Protobuf APIs behind a subscription model for **4M+ customers**; partner onboarding for Netflix and Starz; fault-tolerant billing flows; test coverage raised to **85%+** on key APIs.",
        stack: ["go · grpc", "protobuf · spanner", "redis · grafana"],
        href: "/work/optimum",
    },
    {
        id: "arabic-letters",
        mark: "2024",
        title: "Arabic letter perception model",
        context: "Research Foundation for SUNY · Research Assistant",
        body: "Co-developed a model predicting perceived features of Arabic letters from demographic data, at **90% accuracy**, with a Node/Express backend and data pipelines.",
        stack: ["python · r · node", "ordinal regression"],
    },
    {
        id: "hpe",
        mark: "2022",
        title: "Storage and network test automation with Ansible",
        context: "Hewlett Packard Enterprise · SWE Intern",
        body: "Python automation suite that cut system test cycles by **45%**; logging tools for SAN firmware diagnostics; Ansible for hybrid cloud deploys.",
        stack: ["python · ansible", "iscsi · l2/l3"],
    },
    {
        id: "central",
        mark: "2021 — 2022",
        title: "Semiconductor test benches",
        context: "Central Semiconductor · Engineering Intern",
        body: "Automated electrical test benches with Lua and Python, reducing manual testing time by **35%**; analysis tools for device characterization; SPICE model generation from lab data; analytics that identified product faults **2×** faster.",
        stack: ["lua · python", "spice"],
    },
];

export const builtRows: LedgerRow[] = [
    {
        id: "gatherly",
        mark: "product",
        title: "Gatherly",
        context: "Event RSVP platform",
        body: "Full-stack RSVP app with magic-link auth (Supabase, Twilio, Resend), PostgreSQL functions for idempotent transactions, and row-level security for group permissions. Deployed on Vercel with two-way SMS.",
        stack: ["next.js · supabase", "postgres · twilio"],
    },
    {
        id: "cicaida",
        mark: "health",
        title: "CICAidA",
        context: "Stony Brook Hospital · team lead of 15",
        body: "Real-time vitals dashboard; **15% faster triage decisions**. REST API on Node/Express, MongoDB change streams over WebSockets.",
        stack: ["node · mongodb", "websockets · docker"],
    },
    {
        id: "kernel-pubsub",
        mark: "kernel",
        title: "Kernel pub/sub",
        context: "Linux kernel module · C",
        body: "Netlink-socket IPC between kernel and userspace, topic subscriptions on the kernel's rhashtable, fine-grained locking for concurrent clients.",
        stack: ["c · netlink", "rhashtable"],
        href: "/built/kernel-pubsub",
    },
    {
        id: "kvm",
        mark: "hypervisor",
        title: "vCPU scheduler for KVM",
        context: "C · KVM",
        body: "vCPU-to-pCPU pinning that balances load and cuts context switches, plus a memory coordinator that protects critical VMs under contention.",
        stack: ["c · kvm"],
        href: "/built/kvm-scheduler",
    },
    {
        id: "sentiment",
        mark: "",
        title: "Financial sentiment analysis",
        body: "A sentiment-analysis pipeline in PyTorch, trained on the Financial Phrasebank dataset; fine-tuned DistilBERT; **99%** accuracy on the labeled set and **92%** on few-shot tasks; co-authored a research paper.",
        stack: ["pytorch · distilbert"],
        href: "https://github.com/Ramy-Abdulazziz/Financial-Sentiment-Analysis",
        external: true,
    },
    {
        id: "mintmaps",
        mark: "",
        title: "MintMaps",
        body: "Interactive social mapping so people can create, edit, and share custom maps. Backend on MongoDB/Mongoose, deployment on AWS EC2, CI/CD with Jest, Cypress, and Supertest (test time down **15%**), GCP OAuth, React/Next.js and Tailwind.",
        stack: ["next.js · mongodb", "aws · gcp"],
    },
];
