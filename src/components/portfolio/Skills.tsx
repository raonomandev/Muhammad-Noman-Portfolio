import { Server, Database, Layout, Wrench } from "lucide-react";

const groups = [
  {
    icon: Server,
    title: "Backend",
    items: ["Python", "Django", "Django REST Framework", "REST APIs", "JWT Authentication"],
  },
  {
    icon: Database,
    title: "Database",
    items: ["MySQL", "PostgreSQL", "SQLite"],
  },
  {
    icon: Layout,
    title: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "JavaScript"],
  },
  {
    icon: Wrench,
    title: "Tools",
    items: ["Git", "GitHub", "Postman", "Docker"],
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
            Skills & <span className="gradient-text">Technologies</span>.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            A pragmatic toolchain tuned for reliability, clean architecture, and speed.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((g) => (
            <div key={g.title} className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl btn-gradient shrink-0">
                  <g.icon className="h-5 w-5" />
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
