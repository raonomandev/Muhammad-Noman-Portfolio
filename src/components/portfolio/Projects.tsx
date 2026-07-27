import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    title: "Ledger Core",
    subtitle: "Double-entry payments engine",
    body: "A distributed, strongly-consistent ledger built in Go handling 40M+ daily transactions across 12 currencies with sub-10ms p99 latency.",
    stack: ["Go", "PostgreSQL", "Kafka", "gRPC"],
    metric: "40M req/day",
  },
  {
    title: "Sentinel API Gateway",
    subtitle: "Zero-trust ingress",
    body: "Open-source Rust API gateway with mTLS, adaptive rate limiting, and per-route policy DSL. Deployed at 3 unicorn startups.",
    stack: ["Rust", "Redis", "WASM", "Envoy"],
    metric: "3.2k GitHub stars",
  },
  {
    title: "StreamOps",
    subtitle: "Real-time analytics pipeline",
    body: "Event streaming platform ingesting IoT telemetry into ClickHouse with schema evolution and exactly-once delivery guarantees.",
    stack: ["Python", "Kafka", "ClickHouse", "K8s"],
    metric: "2B events/day",
  },
  {
    title: "AuthForge",
    subtitle: "OIDC identity provider",
    body: "Multi-tenant OAuth2/OIDC server with WebAuthn, SCIM provisioning, and SOC 2-ready audit logs. Ships as a single binary.",
    stack: ["Go", "PostgreSQL", "OpenTelemetry"],
    metric: "SOC 2 Type II",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground">
              // selected work
            </p>
            <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">
              Projects with <span className="gradient-text">real load</span> behind them.
            </h2>
          </div>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="h-4 w-4" /> All repositories
          </a>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.title}
              className="glass-card group relative rounded-3xl p-7 overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: "var(--gradient-glow)" }}
              />
              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-mono uppercase tracking-widest text-primary">
                      {p.subtitle}
                    </p>
                    <h3 className="mt-2 text-2xl font-bold">{p.title}</h3>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-mono text-muted-foreground shrink-0">
                    {p.metric}
                  </span>
                </div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <li
                      key={s}
                      className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs font-mono text-muted-foreground"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center gap-4 text-sm">
                  <a
                    href="#"
                    className="inline-flex items-center gap-1 text-foreground hover:gradient-text transition-all"
                  >
                    Case study <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github className="h-4 w-4" /> Source
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
