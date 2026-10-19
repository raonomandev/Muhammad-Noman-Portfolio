import { Server, Database, Wrench, GraduationCap, Workflow } from "lucide-react";

const groups = [
  {
    icon: Server,
    title: "Backend",
    items: [
      "Python",
      "Django",
      "Django REST Framework",
      "REST APIs",
      "API Integrations",
      "JWT Authentication",
      "CRUD Operations",
      "Authentication",
    ],
  },
  {
    icon: Workflow,
    title: "AI & Automation",
    items: [
      "n8n",
      "Make.com",
      "Zapier",
      "AI Agents",
      "AI Chatbots",
      "AI Workflows",
      "Workflow Automation",
      "Webhook Automation",
      "Prompt Engineering",
      "Claude",
      "OpenAI",
      "Gemini",
      "LLM API Integration",
      "Email Marketing Automation",
    ],
  },
  {
    icon: Database,
    title: "Databases",
    items: ["MySQL", "SQLite"],
  },
  {
    icon: Wrench,
    title: "Tools",
    items: ["Git", "GitHub", "Postman", "VS Code", "REST APIs"],
  },
  {
    icon: GraduationCap,
    title: "Learning",
    items: ["Docker"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground">
            // stack
          </p>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">
            Skills & <span className="gradient-text">Technologies</span>.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Backend engineering, AI integrations, and automation tools for building connected,
            reliable workflows.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g) => (
            <div key={g.title} className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl btn-gradient shrink-0">
                  <g.icon className="h-5 w-5" />
                </span>
                <h3 className="font-semibold">{g.title}</h3>
              </div>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border bg-muted/40 px-2 py-1 text-xs font-mono text-muted-foreground transition-colors hover:text-foreground hover:border-primary/40"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
