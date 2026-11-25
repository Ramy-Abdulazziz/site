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
        mark: "current",
        context:"Subscription lifecycle and fault tolerant billing flows",
        title: "Optimum · Software Engineer",
        body:"",
        // body: "Go, gRPC and Protobuf APIs behind a subscription model for **4M+ customers**; partner onboarding for Netflix and Starz; fault-tolerant billing flows; test coverage raised to **85%+** on key APIs.",
        stack: ["go · grpc · protobuf · redis · gcp"],
    },
    {
        id: "arabic-letters",
        mark: "",
        context: "Computational linguistics Arabic feature perception model",
        title: "Research Foundation for SUNY · Software Engineer",
        body: "",
        stack: ["python · node · ml · ordinal regression"],
    },
    {
        id: "hpe",
        mark: "",
        context: "Storage and network test automation and bare metal provisioning with Ansible",
        title: "Hewlett Packard Enterprise · Software Engineer",
        body: "",
        stack: ["python · ansible · iscsi · linux"],
    },
    {
        id: "central",
        mark: "",
        context: "Semiconductor test benches and device characterization",
        title: "Central Semiconductor · Software/Electrical Engineer",
        body: "",
        stack: ["lua · python · spice"],
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
        id: "sentiment",
        mark: "nlp",
        title: "Financial sentiment analysis",
        context: "Tranformer fine tuning",
        body: "A sentiment-analysis pipeline in PyTorch, trained on the Financial Phrasebank dataset; fine-tuned DistilBERT; **99%** accuracy on the labeled set and **92%** on few-shot tasks; co-authored a research paper.",
        stack: ["pytorch · distilbert", "python"],
    },
    {
        id: "mintmaps",
        mark: "social",
        title: "MintMaps",
        context: "Social app for creating and sharing custom maps",
        body: "Interactive social mapping so people can create, edit, and share custom maps. Backend on MongoDB/Mongoose, deployment on AWS EC2, CI/CD with Jest, Cypress, and Supertest (test time down **15%**), GCP OAuth, React/Next.js and Tailwind.",
        stack: ["next.js · mongodb", "aws · gcp"],
    },
];
