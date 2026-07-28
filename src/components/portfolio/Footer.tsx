import { Github, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-1 font-bold text-lg">
            <span className="gradient-text">Rao</span>
            <span className="text-primary">.</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2026 Rao Noman. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/raonomandev"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/5 transition-colors hover:border-primary/40 hover:text-primary"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/rao-noman-dev/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/5 transition-colors hover:border-primary/40 hover:text-primary"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
