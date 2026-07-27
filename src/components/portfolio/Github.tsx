import { Github as GithubIcon, GitFork, Star, GitCommit } from "lucide-react";
import { AnimatedCounter } from "./AnimatedCounter";

const repos = [
  { name: "sentinel-gateway", desc: "Zero-trust API gateway in Rust.", stars: 3204, forks: 218, lang: "Rust" },
  { name: "ledger-core", desc: "Distributed double-entry ledger.", stars: 1876, forks: 142, lang: "Go" },
  { name: "streamops", desc: "Real-time analytics pipeline.", stars: 942, forks: 87, lang: "Python" },
];

const langColor: Record<string, string> = {
  Rust: "oklch(0.7 0.18 30)",
  Go: "oklch(0.7 0.15 210)",
  Python: "oklch(0.75 0.15 90)",
};

export function GithubSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="glass-card rounded-3xl p-8 sm:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-mono">
                <GithubIcon className="h-3.5 w-3.5" /> @alexchen
              </div>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight">
                Building in <span className="gradient-text">the open</span>.
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                I maintain several open-source projects used in production by teams at fintechs,
                infra companies, and YC-backed startups.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-3">
                {[
                  { icon: Star, v: 6800, s: "+", label: "Stars" },
                  { icon: GitFork, v: 520, s: "+", label: "Forks" },
                  { icon: GitCommit, v: 2400, s: "+", label: "Commits" },
                ].map((s) => (
                  <div key={s.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                    <s.icon className="mx-auto h-4 w-4 text-primary" />
                    <div className="mt-2 text-xl font-bold gradient-text">
                      <AnimatedCounter value={s.v} suffix={s.s} />
                    </div>
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-xl btn-gradient px-5 py-2.5 text-sm font-medium"
              >
                <GithubIcon className="h-4 w-4" /> View GitHub profile
              </a>
            </div>

            <ul className="space-y-3">
              {repos.map((r) => (
                <li
                  key={r.name}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-primary/40"
                >
                  <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
                    <div className="min-w-0">
                      <p className="font-mono text-sm font-medium truncate">
                        alexchen / <span className="text-primary">{r.name}</span>
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground truncate">{r.desc}</p>
                    </div>
                    <div className="shrink-0 flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5">
                        <span
                          className="h-2 w-2 rounded-full"
                          style={{ background: langColor[r.lang] }}
                        />
                        {r.lang}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Star className="h-3 w-3" /> {r.stars.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
