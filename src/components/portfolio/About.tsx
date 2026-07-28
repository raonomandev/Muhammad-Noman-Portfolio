import { Server, Code2, Database } from "lucide-react";

const pillars = [
  {
    icon: Server,
    title: "Backend Development",
    body: "Building scalable backend systems using Python, Django and Django REST Framework.",
  },
  {
    icon: Code2,
    title: "API Development",
    body: "Designing secure REST APIs with authentication and clean architecture.",
  },
  {
    icon: Database,
    title: "Database Management",
    body: "Working with relational databases and optimized data handling.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground">
            // about me
          </p>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">
            About <span className="gradient-text">Me</span>.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            I'm Rao Noman, a Software Engineering student and Backend Developer passionate about
            building reliable and scalable web applications.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            I specialize in{" "}
            <span className="text-foreground font-medium">Python</span>,{" "}
            <span className="text-foreground font-medium">Django</span> and{" "}
            <span className="text-foreground font-medium">Django REST Framework</span>, creating
            secure APIs and backend systems.
          </p>
        </div>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p) => (
            <li key={p.title} className="glass-card rounded-2xl p-6">
              <div className="grid h-11 w-11 place-items-center rounded-xl btn-gradient">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
