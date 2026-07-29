import { Github, ShoppingCart, FileText, CheckSquare } from "lucide-react";

const projects = [
  {
    icon: ShoppingCart,
    title: "E-Commerce Backend API",
    description:
      "A RESTful E-Commerce backend built with Django REST Framework featuring JWT Authentication, Product Management, Cart Management and Order Processing.",
    tech: ["Python", "Django", "DRF", "SQLite", "JWT", "Git"],
    repo: "https://github.com/raonomandev/ecommerce-backend-api",
  },
  {
    icon: FileText,
    title: "Blog Management API",
    description:
      "A Blog Management REST API with authentication, CRUD operations and clean backend architecture built using Django REST Framework.",
    tech: ["Python", "Django", "DRF", "SQLite", "JWT"],
    repo: "https://github.com/raonomandev/Blog-Management-Application-",
  },
  {
    icon: CheckSquare,
    title: "Todo Management Application",
    description:
      "A Todo Management REST API supporting authentication, CRUD operations and secure backend architecture.",
    tech: ["Python", "Django", "DRF", "SQLite", "JWT"],
    repo: "https://github.com/raonomandev/Todo-Management-Application",
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
              Featured <span className="gradient-text">Projects</span>.
            </h2>
          </div>
          <a
            href="https://github.com/raonomandev"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="h-4 w-4" /> All repositories
          </a>
        </div>

        <div className="mt-14 grid gap-6 md:gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <article
              key={p.title}
              style={{ animationDelay: `${i * 90}ms` }}
              className="glass-card group relative rounded-3xl p-7 overflow-hidden flex flex-col animate-fade-in transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: "var(--gradient-glow)" }}
              />
              <div className="relative flex flex-col h-full">
                <div
                  className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 mb-5 grid place-items-center"
                  style={{ background: "var(--gradient-hero)" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-transparent" />
                  <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px]" />
                  <p.icon className="relative h-14 w-14 text-white/95 drop-shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500" />
                </div>
                <h3 className="text-xl font-bold tracking-tight">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {p.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {p.tech.map((s) => (
                    <li
                      key={s}
                      className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs font-mono text-muted-foreground transition-colors group-hover:border-primary/30 group-hover:text-foreground"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center gap-3 pt-4 border-t border-white/10">
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${p.title} GitHub repository`}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
                  >
                    <Github className="h-3.5 w-3.5" /> Code
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
