import { Briefcase } from "lucide-react";

const tech = ["Python", "Django", "Django REST Framework", "MySQL", "REST APIs", "Git"];

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground">
            // experience
          </p>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">
            Where I've <span className="gradient-text">worked</span>.
          </h2>
        </div>

        <ol className="mt-14 relative border-l border-white/10 pl-6 sm:pl-8">
          <li className="relative">
            <span className="absolute -left-[34px] sm:-left-[42px] top-2 grid h-4 w-4 place-items-center rounded-full btn-gradient animate-pulse-glow" />
            <div className="glass-card rounded-2xl p-6 sm:p-8">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3 sm:flex sm:flex-wrap sm:justify-between">
                <div className="flex min-w-0 items-center gap-3">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl btn-gradient">
                    <Briefcase className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="truncate font-semibold text-lg">Backend Developer Intern</h3>
                    <p className="text-sm text-muted-foreground truncate">Enigmatix</p>
                  </div>
                </div>
                <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-mono text-muted-foreground">
                  Internship
                </span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                Worked on backend development, API development, authentication systems and
                professional software development workflows.
              </p>
              <ul className="mt-5 flex flex-wrap gap-1.5">
                {tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs font-mono text-muted-foreground"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
}
