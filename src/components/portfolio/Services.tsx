import { Server, Code2, Database, Globe } from "lucide-react";

const services = [
  {
    icon: Server,
    title: "Backend Development",
    body: "Scalable backend systems architected with Django and clean, testable code.",
  },
  {
    icon: Code2,
    title: "REST API Development",
    body: "Secure, well-documented REST APIs with authentication, validation and versioning.",
  },
  {
    icon: Database,
    title: "Database Design",
    body: "Relational schema design, indexing and query optimization for MySQL & PostgreSQL.",
  },
  {
    icon: Globe,
    title: "Website Development",
    body: "Full-stack websites pairing Django backends with modern React/Next.js frontends.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground">
            // services
          </p>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">
            What I <span className="gradient-text">offer</span>.
          </h2>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} className="glass-card rounded-2xl p-6 group">
              <div className="grid h-12 w-12 place-items-center rounded-xl btn-gradient group-hover:scale-110 transition-transform">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
