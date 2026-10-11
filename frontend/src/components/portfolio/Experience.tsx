import { motion } from "framer-motion";
import { Briefcase, CalendarDays } from "lucide-react";

const tech = ["Python", "Django", "Django REST Framework", "REST APIs", "MySQL", "SQLite", "Git", "Postman"];

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground">// experience</p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Where I&apos;ve <span className="gradient-text">worked</span>.
          </h2>
        </div>

        <div className="mt-14">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -4, scale: 1.01, transition: { duration: 0.2 } }}
            className="relative overflow-hidden rounded-[28px] border border-border bg-card/90 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.24)] backdrop-blur-xl sm:p-8"
          >
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="flex items-start gap-4">
                <div className="portfolio-accent-surface grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-cyan-400/20 via-slate-900/70 to-fuchsia-500/20 shadow-[0_0_30px_rgba(34,211,238,0.15)]">
                  <Briefcase className="portfolio-accent-icon h-6 w-6 text-cyan-100" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground">Backend Developer Intern</h3>
                  <p className="mt-2 text-lg text-muted-foreground">Enigmatix</p>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-3 py-2 text-sm text-muted-foreground">
                <CalendarDays className="h-4 w-4" />
                Internship
              </div>
            </div>

            <p className="mt-6 max-w-3xl text-sm leading-8 text-muted-foreground sm:text-[15px]">
              Worked on backend development using Python, Django, and Django REST Framework, with hands-on experience in REST APIs, authentication, CRUD operations, database management, and collaborative software workflows. I also build n8n automations and LLM API integrations for business processes.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {tech.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-muted/40 px-3 py-2 text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
