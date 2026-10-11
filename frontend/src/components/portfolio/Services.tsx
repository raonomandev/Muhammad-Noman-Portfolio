import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Code2, Database, Plug, Server, X, Workflow, Mail } from "lucide-react";
import { useEffect, useState, type MouseEvent } from "react";

type ServiceItem = {
  icon: typeof Server;
  title: string;
  shortDescription: string;
  tags: string[];
  description: string;
  deliverables: string[];
  workflow: string[];
};

const services: ServiceItem[] = [
  {
    icon: Server,
    title: "Backend Development",
    shortDescription:
      "Building secure, scalable backend applications using Python, Django and Django REST Framework.",
    tags: ["Python", "Django", "DRF"],
    description:
      "I build maintainable backend systems following clean architecture principles.",
    deliverables: [
      "Django project setup",
      "Scalable application structure",
      "Authentication implementation",
      "Business logic development",
      "Secure backend architecture",
      "Clean reusable code",
    ],
    workflow: [
      "Requirement Analysis",
      "Backend Architecture Planning",
      "Development",
      "Testing",
      "Final Delivery",
    ],
  },
  {
    icon: Code2,
    title: "REST API Development",
    shortDescription:
      "Designing secure RESTful APIs with authentication and CRUD operations.",
    tags: ["REST API", "JWT", "CRUD"],
    description:
      "I develop REST APIs using Django REST Framework with secure authentication and clean endpoint design.",
    deliverables: [
      "RESTful API development",
      "CRUD endpoints",
      "JWT Authentication",
      "User Authentication",
      "Permissions",
      "API documentation",
    ],
    workflow: [
      "API Planning",
      "Endpoint Design",
      "Authentication",
      "Testing using Postman",
      "Deployment Ready APIs",
    ],
  },
  {
    icon: Database,
    title: "Database Design",
    shortDescription:
      "Designing efficient relational databases with optimized queries.",
    tags: ["MySQL", "SQLite", "Database"],
    description:
      "I design normalized database structures with efficient relationships and optimized queries.",
    deliverables: [
      "Database schema",
      "Relationships",
      "Query optimization",
      "Migrations",
      "Data integrity",
      "Database management",
    ],
    workflow: [
      "Requirement Analysis",
      "Database Planning",
      "Table Design",
      "Optimization",
      "Testing",
    ],
  },
  {
    icon: Plug,
    title: "API Integration",
    shortDescription:
      "Connecting backend APIs securely with frontend applications and external services.",
    tags: ["API", "Integration", "JSON"],
    description:
      "I integrate backend APIs with applications while maintaining security, scalability and clean communication.",
    deliverables: [
      "API integration",
      "JSON responses",
      "Authentication integration",
      "Error handling",
      "Validation",
      "Secure communication",
    ],
    workflow: [
      "Integration Planning",
      "API Connection",
      "Testing",
      "Bug Fixes",
      "Final Verification",
    ],
  },
  {
    icon: Workflow,
    title: "AI Workflow Automation",
    shortDescription:
      "Connecting apps, APIs, and AI models into useful automated workflows with n8n.",
    tags: ["n8n", "Claude", "OpenAI", "Gemini"],
    description:
      "I create practical workflow automations that connect business tools and LLM APIs, with clear steps for data handling and error paths.",
    deliverables: [
      "n8n workflow setup",
      "App and API connections",
      "Claude, OpenAI, or Gemini integration",
      "Prompt and response handling",
      "Workflow testing",
      "Error and retry paths",
    ],
    workflow: [
      "Map the repetitive task",
      "Plan triggers and data flow",
      "Connect tools and AI APIs",
      "Test success and failure paths",
      "Document the workflow",
    ],
  },
  {
    icon: Mail,
    title: "Email Marketing Automation",
    shortDescription:
      "Automating email follow-ups and campaign workflows through connected tools and APIs.",
    tags: ["Email", "Automation", "API Integration"],
    description:
      "I help connect email tools to business workflows for repeatable campaign and follow-up tasks, with attention to reliable triggers and handoffs.",
    deliverables: [
      "Email workflow mapping",
      "Automated follow-up flows",
      "Tool and API connections",
      "Contact data handoffs",
      "Workflow testing",
      "Basic documentation",
    ],
    workflow: [
      "Define campaign goals",
      "Map triggers and audience data",
      "Build the automation",
      "Test delivery conditions",
      "Review and refine",
    ],
  },
];

export function Services() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const ActiveIcon = selectedService?.icon;

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedService(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleContactScroll = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setSelectedService(null);
  };

  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground">
            // services
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            <span className="gradient-text">Services</span>
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground sm:text-xl">
            Backend development, API integrations, and practical AI-powered automations for everyday workflows.
          </p>
          <p className="mt-3 text-sm text-muted-foreground/80">
            Click any service to view details.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.button
                key={service.title}
                type="button"
                onClick={() => setSelectedService(service)}
                className="glass-card group rounded-2xl border border-border p-6 text-left transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]"
                whileHover={{ y: -6, scale: 1.01, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="portfolio-accent-surface relative grid h-12 w-12 place-items-center rounded-xl border border-cyan-400/30 bg-gradient-to-br from-cyan-400/20 via-slate-900/70 to-fuchsia-500/20 shadow-[0_0_25px_rgba(34,211,238,0.12)] transition-transform duration-300 group-hover:scale-110">
                  <div className="absolute inset-0 rounded-xl bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.16),_transparent_60%)]" />
                  <Icon className="portfolio-accent-icon relative h-5 w-5 text-cyan-200" />
                </div>
                <h3 className="mt-5 font-semibold text-foreground">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.shortDescription}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-muted/40 px-2.5 py-1 text-[11px] uppercase tracking-[0.24em] text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(event: MouseEvent<HTMLDivElement>) => event.stopPropagation()}
              className="relative w-full max-w-3xl overflow-hidden rounded-[28px] border border-border bg-card p-6 shadow-[0_30px_120px_rgba(0,0,0,0.25)] backdrop-blur-2xl sm:p-8"
            >
              <button
                type="button"
                aria-label="Close service details"
                onClick={() => setSelectedService(null)}
                className="absolute right-4 top-4 rounded-full border border-border bg-muted/40 p-2 text-muted-foreground transition hover:bg-muted hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-start gap-4">
                    <div className="portfolio-accent-surface relative grid h-16 w-16 shrink-0 place-items-center rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-cyan-400/20 via-slate-900/70 to-fuchsia-500/20 shadow-[0_0_35px_rgba(34,211,238,0.18)]">
                      <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.18),_transparent_55%)]" />
                      <div className="relative">
                        {ActiveIcon && <ActiveIcon className="portfolio-accent-icon h-7 w-7 text-cyan-100" />}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-foreground">
                        {selectedService.title}
                      </h3>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {selectedService.tags.map((tag) => (
                          <span
                            key={tag}
                            className="portfolio-accent-chip rounded-full border border-cyan-400/20 bg-cyan-400/10 px-2.5 py-1 text-[11px] uppercase tracking-[0.24em] text-cyan-100"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-border bg-muted/40 p-5">
                  <p className="text-lg leading-8 text-foreground">{selectedService.description}</p>
                </div>

                <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
                  <div className="rounded-2xl border border-border bg-muted/40 p-5">
                    <h4 className="text-sm font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                      Key Deliverables
                    </h4>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {selectedService.deliverables.map((item) => (
                        <div
                          key={item}
                          className="rounded-xl border border-border bg-background p-3 text-sm text-foreground"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-border bg-muted/40 p-5">
                    <h4 className="text-sm font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                      Development Workflow
                    </h4>
                    <div className="mt-4 space-y-3">
                      {selectedService.workflow.map((step, index) => (
                        <div key={step} className="flex items-center gap-3">
                          <div className="portfolio-accent-chip flex h-8 w-8 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 text-sm font-semibold text-cyan-100">
                            {index + 1}
                          </div>
                          <p className="text-sm text-foreground">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <motion.button
                    whileHover={{ y: -2, scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleContactScroll}
                    className="portfolio-accent-action inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-gradient-to-r from-cyan-400/20 to-fuchsia-500/20 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:shadow-[0_0_25px_rgba(34,211,238,0.18)]"
                  >
                    Let's Work Together
                    <ArrowRight className="h-4 w-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
