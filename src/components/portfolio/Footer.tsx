import { Github, Linkedin } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 mt-16">
      {/* Ambient gradient glow */}
      <div
        className="pointer-events-none absolute inset-x-0 -top-32 h-64 opacity-60"
        style={{ background: "var(--gradient-glow)" }}
      />
      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_50%_0%,rgba(120,119,198,0.15),transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-14">
        <div className="glass-card rounded-3xl p-8 sm:p-10">
          <div className="grid gap-10 md:grid-cols-3 md:gap-8">
            {/* Brand + tagline */}
            <div className="md:col-span-1">
              <a href="#home" className="inline-flex items-center gap-1 font-bold text-2xl">
                <span className="gradient-text">Rao</span>
                <span className="text-primary">.</span>
              </a>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
                Backend Developer building scalable web applications and modern APIs.
              </p>
            </div>

            {/* Navigation */}
            <nav className="md:col-span-1" aria-label="Footer">
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                Navigate
              </p>
              <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 sm:flex sm:flex-wrap md:grid md:grid-cols-2">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="group relative inline-flex text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <span className="relative">
                        {l.label}
                        <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full" />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Social */}
            <div className="md:col-span-1 md:text-right">
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                Connect
              </p>
              <div className="mt-4 flex items-center gap-3 md:justify-end">
                <a
                  href="https://github.com/raonomandev"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:text-foreground hover:shadow-lg hover:shadow-primary/20"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/rao-noman-dev/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:text-foreground hover:shadow-lg hover:shadow-primary/20"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Divider + copyright */}
          <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row">
            <p className="text-xs text-muted-foreground">
              © 2026 Rao Noman. All rights reserved.
            </p>
            <p className="text-xs font-mono text-muted-foreground/70">
              Backend Developer | Python · Django · Django REST Framework
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
