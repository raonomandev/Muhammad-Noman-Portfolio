import {
  Code2,
  Database,
  Server,
  Boxes,
  GitBranch,
  Workflow,
  Network,
  Lock,
} from "lucide-react";

const groups = [
  {
    icon: Code2,
    title: "Languages",
    items: ["Go", "Rust", "Python", "TypeScript", "Java", "SQL"],
  },
  {
    icon: Server,
    title: "Frameworks & Runtimes",
    items: ["gRPC", "FastAPI", "Node.js", "Actix", "GraphQL", "tRPC"],
  },
  {
    icon: Database,
    title: "Datastores",
    items: ["PostgreSQL", "Redis", "ClickHouse", "Kafka", "MongoDB", "Elasticsearch"],
  },
  {
    icon: Boxes,
    title: "Infrastructure",
    items: ["Kubernetes", "Docker", "Terraform", "AWS", "GCP", "Nginx"],
  },
  {
    icon: Workflow,
    title: "Observability",
    items: ["Prometheus", "Grafana", "OpenTelemetry", "Jaeger", "Datadog", "Sentry"],
  },
  {
    icon: Lock,
    title: "Security & Auth",
    items: ["OAuth2 / OIDC", "JWT", "mTLS", "Vault", "Zero-trust", "OWASP"],
  },
  {
    icon: GitBranch,
    title: "DevOps",
    items: ["GitHub Actions", "ArgoCD", "Helm", "Ansible", "Pulumi", "Buildkite"],
  },
  {
    icon: Network,
    title: "Architecture",
    items: ["Event-driven", "CQRS", "Microservices", "DDD", "Saga", "Serverless"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground">
            // stack
          </p>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">
            Tools I reach for <span className="gradient-text">every day</span>.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            A pragmatic toolchain tuned for reliability, observability, and speed of iteration.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((g) => (
            <div key={g.title} className="glass-card rounded-2xl p-5">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-lg btn-gradient shrink-0">
                  <g.icon className="h-4 w-4" />
                </span>
                <h3 className="font-semibold">{g.title}</h3>
              </div>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs font-mono text-muted-foreground transition-colors hover:text-foreground hover:border-primary/40"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
