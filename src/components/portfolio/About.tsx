import { Cpu, Database, Cloud, Shield } from "lucide-react";

const pillars = [
  {
    icon: Cpu,
    title: "Distributed systems",
    body: "Event-driven architectures with Kafka, gRPC and CQRS patterns tuned for correctness under load.",
  },
  {
    icon: Database,
    title: "Data engineering",
    body: "PostgreSQL, ClickHouse, Redis — query plans, replication topologies, and schema evolution done right.",
  },
  {
    icon: Cloud,
    title: "Cloud-native infra",
    body: "Kubernetes, Terraform, and CI/CD pipelines that ship confidently across AWS and GCP.",
  },
  {
    icon: Shield,
    title: "Security-first APIs",
    body: "Zero-trust auth, OWASP hardening, rate limiting, and audit trails wired in from day one.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16 items-start">
          <div>
            <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground">
              // about
            </p>
            <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">
              Engineer with a <span className="gradient-text">systems mindset</span>.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Over the last eight years I've built payment rails moving billions, real-time
              trading infrastructure, and multi-tenant SaaS backends serving millions of users.
              I care about the boring stuff — observability, idempotency, and graceful failure —
              because that's what makes systems trustworthy.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              I write in <span className="text-foreground font-mono text-sm">Go</span>,{" "}
              <span className="text-foreground font-mono text-sm">Rust</span>,{" "}
              <span className="text-foreground font-mono text-sm">Python</span> and{" "}
              <span className="text-foreground font-mono text-sm">TypeScript</span>, and lead
              teams from architecture whiteboards to on-call rotations.
            </p>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {pillars.map((p) => (
              <li key={p.title} className="glass-card rounded-2xl p-6">
                <div className="grid h-11 w-11 place-items-center rounded-xl btn-gradient">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
