import { ArrowRight, Download, Github } from "lucide-react";
import { AnimatedCounter } from "./AnimatedCounter";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div className="glow-orb h-[420px] w-[420px] top-[-100px] left-[-80px] bg-[oklch(0.55_0.24_260)] animate-float-slow" />
      <div className="glow-orb h-[500px] w-[500px] bottom-[-200px] right-[-100px] bg-[oklch(0.55_0.24_310)] animate-float-slower" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center text-center animate-fade-up">
          <div className="glass-card inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs sm:text-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-muted-foreground">Available for freelance & full-time roles</span>
          </div>

          <h1 className="mt-8 text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05]">
            <span className="block text-foreground">Backend systems</span>
            <span className="block gradient-text animate-gradient">that scale.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            I'm <span className="text-foreground font-medium">Alex Chen</span> — a senior backend
            developer building distributed systems, high-throughput APIs, and cloud-native
            infrastructure for fintech and SaaS companies.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl btn-gradient px-6 py-3 text-sm font-medium"
            >
              View my work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-xl glass-card px-6 py-3 text-sm font-medium"
            >
              <Download className="h-4 w-4" />
              Download resume
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl glass-card px-6 py-3 text-sm font-medium"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </div>

          <dl className="mt-20 grid w-full max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { v: 8, s: "+", label: "Years experience" },
              { v: 120, s: "+", label: "APIs shipped" },
              { v: 99.99, s: "%", label: "Uptime SLA" },
              { v: 40, s: "M", label: "Requests/day" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="glass-card rounded-2xl px-4 py-5 text-center"
              >
                <dt className="text-2xl sm:text-3xl font-bold gradient-text">
                  <AnimatedCounter value={stat.v} suffix={stat.s} />
                </dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
