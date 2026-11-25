import type { Metadata } from "next";
import CaseStudy from "@/components/case-study";

export const metadata: Metadata = {
    title: "Subscription lifecycle and billing flows · Ramy Abdulazziz",
    description:
        "Go, gRPC, and Protobuf APIs for an Optimum subscription model serving 4M+ customers.",
};

export default function OptimumCaseStudy() {
    return (
        <CaseStudy
            kicker="Optimum · Software Development Engineer · NYC"
            date="December 2025 – present"
            title="Subscription lifecycle and billing flows"
            backHref="/#work"
            backLabel="back to work"
        >
            <p>
                Optimum needed an a la carte subscription model that could
                support 4M+ customers, and Go, gRPC, and Protobuf APIs that
                could onboard Netflix and Starz. The billing flows had to be
                fault-tolerant. The role is December 2025 to present. On this
                site the location is NYC.
            </p>
            <h2>Constraints</h2>
            <p>
                The partners named for this work are Netflix, Starz, and Bango.
                Netflix and Starz are the partners the onboarding APIs were
                built to take. Requirements and technical alignment, during
                development, were with Netflix, Starz, and Bango. The
                subscription model was already scoped to 4M+ customers. Billing
                had to be fault-tolerant and handle thousands of transactions a
                month. Nothing here adds a partner, a city, or a count that is
                not on the résumé.
            </p>
            <h2>What I built</h2>
            <figure className="case-flow">
                <figcaption>The path, from the résumé only.</figcaption>
                <ol>
                    <li>Netflix, Starz, Bango</li>
                    <li>Go, gRPC, Protobuf</li>
                    <li>Billing flows</li>
                    <li>Spanner</li>
                </ol>
                <ul>
                    <li>Redis</li>
                    <li>Grafana, New Relic</li>
                    <li>Health check</li>
                    <li>Log Explorer</li>
                </ul>
            </figure>
            <p>
                The partner-facing surface is Go, spoken as gRPC, with the
                contracts in Protocol Buffers. That is the API layer used to
                onboard Netflix and Starz. Under it, fault-tolerant billing
                flows process thousands of transactions a month.
            </p>
            <p>
                Reads that do not have to hit the database every time go
                through Redis. The cache blocks oversized item pulls, and keys
                are invalidated at lifecycle points so a client does not keep
                stale subscription data. The system of record used in triage
                is GCP Spanner. When something is wrong in production, Spanner
                and Log Explorer are the tools used to find it and fix it.
            </p>
            <p>
                Observability is custom Grafana dashboards and New Relic. A
                separate automated health-check service reports on the system
                in real time. Automated test coverage on the key APIs was
                raised to at least 85%. Cursor is in the development workflow:
                custom skills and MCP servers, used to move the engineering
                work faster.
            </p>
            <h2>What changed</h2>
            <p>
                The résumé records the change as coverage, visibility, and the
                billing path. Test coverage on the key APIs reached at least
                85%. Grafana, New Relic, and the health-check service are how
                the system is watched. Spanner and Log Explorer are how
                production issues are triaged. The billing flows are what
                process thousands of monthly transactions. Redis is what keeps
                cached client data aligned with lifecycle changes. The Go,
                gRPC, and Protobuf APIs are what made Netflix and Starz
                onboarding a defined integration instead of a fresh stack.
            </p>
            <h2>What this page does not add</h2>
            <p>
                The résumé does not include a retrospective, a previous
                coverage number, or a partner anecdote beyond the names and
                the work above. This page does not invent one. The role is
                still current.
            </p>
        </CaseStudy>
    );
}
