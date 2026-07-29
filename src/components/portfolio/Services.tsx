import { Server, Code2, Database, Plug } from "lucide-react";

const services = [
  {
    icon: Server,
    title: "Backend Development",
    body: "Building scalable backend applications using Python, Django and Django REST Framework.",
  },
  {
    icon: Code2,
    title: "REST API Development",
    body: "Creating secure REST APIs with JWT Authentication and clean architecture.",
  },
  {
    icon: Database,
    title: "Database Design",
    body: "Designing and managing relational databases using MySQL and SQLite.",
  },
  {
    icon: Plug,
    title: "API Integration",
    body: "Integrating backend APIs into applications while maintaining security and scalability.",
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
            <span className="gradient-text">Services</span>.
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
