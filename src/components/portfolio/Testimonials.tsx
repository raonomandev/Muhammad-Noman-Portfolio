import { Quote } from "lucide-react";

const items = [
  {
    quote:
      "Alex rebuilt our payments core from scratch and it just… works. Zero incidents in 14 months and half the infra bill.",
    name: "Priya Ramanathan",
    role: "CTO, Meridian Pay",
  },
  {
    quote:
      "One of the rare engineers who thinks in queues, quorums, and quarterly roadmaps at the same time.",
    name: "Daniel Osei",
    role: "VP Engineering, Northwind",
  },
  {
    quote:
      "We hired Alex for a two-week API audit and kept him for a year. Ridiculous depth on distributed systems.",
    name: "Yuki Tanaka",
    role: "Founder, Helix Data",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground">
            // kind words
          </p>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">
            From <span className="gradient-text">the teams</span> I've shipped with.
          </h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {items.map((t) => (
            <figure key={t.name} className="glass-card rounded-3xl p-7">
              <Quote className="h-6 w-6 text-primary" />
              <blockquote className="mt-4 text-sm text-foreground/90 leading-relaxed">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full btn-gradient font-semibold text-sm shrink-0">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-medium truncate">{t.name}</p>
                  <p className="text-xs text-muted-foreground truncate">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
