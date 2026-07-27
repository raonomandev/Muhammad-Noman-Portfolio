import { Terminal, Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2 font-semibold">
              <span className="grid h-9 w-9 place-items-center rounded-xl btn-gradient shrink-0">
                <Terminal className="h-4 w-4" />
              </span>
              <span className="gradient-text text-lg">alex.chen</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground max-w-sm">
              Senior backend developer building resilient distributed systems from a quiet
              corner of the internet.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              Navigate
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              {["About", "Skills", "Projects", "Experience", "Contact"].map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              Elsewhere
            </h4>
            <div className="mt-4 flex items-center gap-2">
              {[Github, Linkedin, Twitter].map((I, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 transition-colors hover:border-primary/40 hover:text-primary"
                >
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Alex Chen. Crafted with caffeine and correctness.</p>
          <p className="font-mono">v8.0.1 — deployed globally</p>
        </div>
      </div>
    </footer>
  );
}
