import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import profile from "@/assets/rao-profile.jpg";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="glow-orb h-[420px] w-[420px] top-[-100px] left-[-80px] bg-[oklch(0.55_0.24_285)] animate-float-slow" />
      <div className="glow-orb h-[500px] w-[500px] bottom-[-200px] right-[-100px] bg-[oklch(0.65_0.2_210)] animate-float-slower" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] items-center">
          <div className="animate-fade-up">
            <div className="glass-card inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs sm:text-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-muted-foreground">Available for freelance & full-time roles</span>
            </div>

            <p className="mt-8 text-lg text-muted-foreground font-mono">Hello, I'm</p>
            <h1 className="mt-2 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
              <span className="block text-foreground">Rao Noman</span>
              <span className="block gradient-text animate-gradient">Backend Developer</span>
            </h1>

            <p className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              I build scalable web applications and REST APIs using{" "}
              <span className="text-foreground font-medium">Python</span>,{" "}
              <span className="text-foreground font-medium">Django</span>,{" "}
              <span className="text-foreground font-medium">Django REST Framework</span> and
              modern technologies.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="/resume.pdf"
                download
                className="group inline-flex items-center gap-2 rounded-xl btn-gradient px-6 py-3 text-sm font-medium"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-xl glass-card px-6 py-3 text-sm font-medium"
              >
                View Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <a
                href="https://github.com/raonomandev"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5 transition-colors hover:border-primary/40 hover:text-primary"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/rao-noman-dev/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5 transition-colors hover:border-primary/40 hover:text-primary"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end animate-fade-up">
            <div className="relative">
              <div
                className="absolute -inset-6 rounded-full opacity-70 blur-3xl animate-pulse-glow"
                style={{ background: "var(--gradient-hero)" }}
              />
              <div className="relative rounded-full p-[3px] animate-gradient" style={{
                background: "linear-gradient(135deg, oklch(0.65 0.22 275), oklch(0.75 0.15 210), oklch(0.6 0.24 300))",
                backgroundSize: "200% 200%",
              }}>
                <div className="rounded-full bg-background p-2">
                  <img
                    src={profile}
                    alt="Rao Noman — Backend Developer"
                    width={384}
                    height={384}
                    className="h-64 w-64 sm:h-80 sm:w-80 rounded-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
