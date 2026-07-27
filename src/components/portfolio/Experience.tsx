const roles = [
  {
    company: "Stripe-scale Fintech (contract)",
    role: "Staff Backend Engineer",
    period: "2023 — Present",
    body: "Lead architect for the cross-border payments platform. Cut settlement latency by 62% and rebuilt the reconciliation engine on an event-sourced ledger.",
  },
  {
    company: "Northwind Cloud",
    role: "Senior Backend Engineer",
    period: "2020 — 2023",
    body: "Owned the multi-tenant control plane serving 200k+ workloads. Migrated the monolith to gRPC microservices with zero-downtime cutover.",
  },
  {
    company: "Helix Data",
    role: "Backend Engineer",
    period: "2018 — 2020",
    body: "Built the real-time analytics ingestion pipeline handling 2B events/day on Kafka + ClickHouse with 99.99% delivery guarantee.",
  },
  {
    company: "Freelance / Open source",
    role: "Consulting Engineer",
    period: "2016 — 2018",
    body: "Shipped payment integrations, auth systems, and API rewrites for early-stage YC and seed-stage startups across the US and EU.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground">
            // experience
          </p>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">
            A decade of shipping <span className="gradient-text">production systems</span>.
          </h2>
        </div>

        <ol className="mt-14 relative border-l border-white/10 pl-6 sm:pl-8 space-y-8">
          {roles.map((r) => (
            <li key={r.company} className="relative">
              <span className="absolute -left-[34px] sm:-left-[42px] top-2 grid h-4 w-4 place-items-center rounded-full btn-gradient animate-pulse-glow" />
              <div className="glass-card rounded-2xl p-6">
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3 sm:flex sm:flex-wrap sm:justify-between">
                  <div className="min-w-0">
                    <h3 className="truncate font-semibold text-lg">{r.role}</h3>
                    <p className="text-sm text-muted-foreground truncate">{r.company}</p>
                  </div>
                  <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-mono text-muted-foreground">
                    {r.period}
                  </span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{r.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
