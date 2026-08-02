import { Server, Database, Sparkles } from "lucide-react";

const highlights = [
  {
    icon: Server,
    title: "Python, Django, DRF",
    subtitle: "Backend development with Python, Django and Django REST Framework.",
  },
  {
    icon: Sparkles,
    title: "REST APIs & JWT",
    subtitle: "Designing secure REST APIs with JWT authentication and clean CRUD.",
  },
  {
    icon: Database,
    title: "MySQL & SQLite",
    subtitle: "Reliable database design for maintainable backend systems.",
  },
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] items-start">
          <div className="space-y-8">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">About me</p>
              <h2 className="mt-5 text-4xl sm:text-5xl font-bold tracking-tight">
                Backend engineering for secure, maintainable production systems.
              </h2>
            </div>

            <div className="space-y-5 rounded-[28px] border border-white/10 bg-slate-950/80 p-8 shadow-xl shadow-slate-950/20">
              <p className="text-lg leading-8 text-muted-foreground">
                I’m <span className="font-semibold text-foreground">Muhammad Noman</span>, a Software Engineering student and backend developer specializing in Python, Django and Django REST Framework.
              </p>
              <p className="text-lg leading-8 text-muted-foreground">
                I design secure REST APIs, build scalable backend applications, and deliver reliable systems that solve real-world problems.
              </p>
              <p className="text-lg leading-8 text-muted-foreground">
                My focus is clean, maintainable code, strong backend architecture, and reliable data systems using MySQL and SQLite.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <div key={item.title} className="rounded-3xl border border-white/10 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/10">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 text-foreground">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-sm font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.subtitle}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-slate-950/90 p-8 shadow-2xl shadow-slate-950/20">
            <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Experience</p>
            <div className="mt-6 space-y-5">
              <div className="rounded-3xl border border-white/10 bg-slate-900/90 p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">Backend Intern</h3>
                    <p className="mt-2 text-sm text-slate-400">Enigmatix</p>
                  </div>
                  <span className="rounded-full border border-white/10 bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300">
                    2025–2026
                  </span>
                </div>
                <p className="mt-5 text-sm leading-7 text-slate-400">
                  Gained practical experience in backend development, API integration, authentication systems, and professional software workflows.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-slate-900/90 p-6">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Skills & Tools</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {[
                    "Python",
                    "Django",
                    "Django REST Framework",
                    "MySQL",
                    "Postman",
                    "Git & GitHub",
                  ].map((tool) => (
                    <span key={tool} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
