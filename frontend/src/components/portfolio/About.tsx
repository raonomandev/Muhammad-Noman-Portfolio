import { Server, Database, Sparkles, Workflow } from "lucide-react";

const highlights = [
  {
    icon: Server,
    title: "Backend & APIs",
    subtitle: "Python, Django, DRF, and secure REST API development.",
  },
  {
    icon: Sparkles,
    title: "AI Integrations",
    subtitle: "Connecting Claude, OpenAI, and Gemini models through APIs.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    subtitle: "Building n8n automations for connected tools and email workflows.",
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
                Building useful software, from backend APIs to AI-powered workflows.
              </h2>
            </div>

            <div className="space-y-5 rounded-[28px] border border-border bg-card/90 p-8 shadow-xl shadow-slate-950/20">
              <p className="text-lg leading-8 text-muted-foreground">
                I’m <span className="font-semibold text-foreground">Muhammad Noman</span>, a Software Engineering student and backend developer working with Python, Django, and Django REST Framework.
              </p>
              <p className="text-lg leading-8 text-muted-foreground">
                I build secure REST APIs and dependable backend applications, and deliver AI automations with n8n, API integrations, and LLMs including Claude, OpenAI, and Gemini.
              </p>
              <p className="text-lg leading-8 text-muted-foreground">
                I design and deliver email marketing automations and connected business workflows that reduce repetitive work, with a focus on maintainable code, clear integrations, and reliable data handling.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <div key={item.title} className="rounded-3xl border border-border bg-card/90 p-6 shadow-lg shadow-slate-950/10">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-muted/40 text-foreground">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-sm font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.subtitle}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-border bg-card p-8 shadow-2xl shadow-slate-950/20">
            <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">Focus Areas</p>
            <div className="mt-6 space-y-5">
              <div className="rounded-3xl border border-border bg-background/90 p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Backend Intern</h3>
                    <p className="mt-2 text-sm text-muted-foreground">Enigmatix</p>
                  </div>
                  <span className="portfolio-accent-chip rounded-full border border-white/10 bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300">
                    2025–2026
                  </span>
                </div>
                <p className="mt-5 text-sm leading-7 text-muted-foreground">
                  Gained practical experience in backend development, API integration, authentication systems, and professional software workflows.
                </p>
              </div>

              <div className="rounded-3xl border border-border bg-background/90 p-6">
                <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">Skills & Tools</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {[
                    "Python",
                    "Django",
                    "Django REST Framework",
                    "MySQL",
                    "n8n",
                    "Claude API",
                    "OpenAI API",
                    "Gemini API",
                    "Email Automation",
                    "Git & GitHub",
                  ].map((tool) => (
                    <span key={tool} className="rounded-2xl border border-border bg-muted/40 px-4 py-3 text-sm text-foreground">
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
