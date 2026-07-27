import { useState, type FormEvent } from "react";
import { Mail, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="glass-card rounded-3xl overflow-hidden">
          <div className="grid lg:grid-cols-[1fr_1.2fr]">
            <div className="p-8 sm:p-12 border-b lg:border-b-0 lg:border-r border-white/10 relative">
              <div className="glow-orb h-64 w-64 top-10 left-10 bg-[oklch(0.55_0.24_290)]" />
              <div className="relative">
                <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground">
                  // contact
                </p>
                <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
                  Let's build <span className="gradient-text">something</span>.
                </h2>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  Open to staff & principal engineer roles, contract work, and open-source
                  collaborations. Usually reply within 24 hours.
                </p>
                <ul className="mt-8 space-y-3 text-sm">
                  <li className="flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-lg btn-gradient shrink-0">
                      <Mail className="h-4 w-4" />
                    </span>
                    <span className="text-muted-foreground">alex@alexchen.dev</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-lg btn-gradient shrink-0">
                      <MapPin className="h-4 w-4" />
                    </span>
                    <span className="text-muted-foreground">Remote — GMT+1</span>
                  </li>
                </ul>
                <div className="mt-10 flex items-center gap-2">
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

            <form onSubmit={onSubmit} className="p-8 sm:p-12 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                    Name
                  </span>
                  <input
                    required
                    type="text"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
                    placeholder="Ada Lovelace"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                    Email
                  </span>
                  <input
                    required
                    type="email"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
                    placeholder="ada@example.com"
                  />
                </label>
              </div>
              <label className="block">
                <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  Subject
                </span>
                <input
                  required
                  type="text"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
                  placeholder="Project idea, role, or collaboration"
                />
              </label>
              <label className="block">
                <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  Message
                </span>
                <textarea
                  required
                  rows={5}
                  className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
                  placeholder="Tell me about what you're building…"
                />
              </label>
              <button
                type="submit"
                className="group inline-flex items-center gap-2 rounded-xl btn-gradient px-6 py-3 text-sm font-medium"
              >
                {sent ? "Message sent ✓" : "Send message"}
                {!sent && (
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
