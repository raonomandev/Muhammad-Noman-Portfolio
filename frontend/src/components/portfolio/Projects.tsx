import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  CheckSquare,
  ExternalLink,
  FileText,
  Github,
  MailCheck,
  MailSearch,
  ShoppingCart,
  Sparkles,
  X,
  Workflow,
} from "lucide-react";
import { useEffect, useState, type MouseEvent } from "react";

type ProjectItem = {
  icon: typeof ShoppingCart;
  title: string;
  description: string;
  tech: string[];
  repo: string | null;
  demoUrls?: string[];
};

const projects: ProjectItem[] = [
  {
    icon: MailSearch,
    title: "Email Scraping Automation",
    description:
      "An n8n workflow that automates email data collection and processing. The workflow is demonstrated in the linked recording.",
    tech: ["n8n", "Email Automation", "Workflow Design"],
    repo: null,
    demoUrls: ["https://www.loom.com/share/0376a3f038294985ab814c63d3ebcc17"],
  },
  {
    icon: MailCheck,
    title: "AI Email Support Automation",
    description:
      "A Gmail-triggered n8n workflow uses an OpenAI model to classify order and refund inquiries, then prepares tailored reply drafts for review.",
    tech: ["n8n", "Gmail", "OpenAI", "Text Classification", "Draft Replies"],
    repo: null,
    demoUrls: ["https://www.loom.com/share/7e01fccce29041c9ab1c27d48c4cab60"],
  },
  {
    icon: Workflow,
    title: "AI Lead Scoring & Automation",
    description:
      "A JavaScript-powered lead intake flow sends new leads to n8n, where an AI model scores buying intent, classifies leads as hot, warm, or cold, and routes them to the appropriate follow-up steps.",
    tech: ["Java Script", "n8n", "OpenAI", "Webhooks", "Gmail"],
    repo: null,
    demoUrls: [
      "https://www.loom.com/share/6a3430a82a6f483db761d5614b82ca92",
      "https://www.loom.com/share/35d69d8da29b4227a3dbd8263f792a65",
    ],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Backend API",
    description:
      "A production-ready e-commerce backend with JWT auth, product and cart workflows, checkout orchestration, and admin APIs.",
    tech: ["Python", "Django", "DRF", "SQLite", "JWT", "Celery"],
    repo: "https://github.com/raonomandev/ecommerce-backend-api",
  },
  {
    icon: FileText,
    title: "Blog Management API",
    description:
      "A clean blog backend with authenticated CRUD operations, search-ready endpoints and extensible content models.",
    tech: ["Python", "Django", "HTML5", "CSS3", "BootStrap", "SQLite", "Git", "GitHub"],
    repo: "https://github.com/raonomandev/Blog-Management-Application-",
  },
  {
    icon: CheckSquare,
    title: "Todo Management Application",
    description:
      "A secure task-management API supporting user authentication, task lists, and flexible completion workflows.",
    tech: ["Python", "Django", "HTML5", "CSS3", "BootStrap", "SQLite", "Git", "GitHub"],
    repo: "https://github.com/raonomandev/Todo-Management-Application",
  },
  {
    icon: Sparkles,
    title: "Hospital Management System",
    description:
      "Backend-focused academic project developed during Software Engineering studies for managing hospital workflows, patient records and administrative operations.",
    tech: ["Python", "Django", "SQLite", "Database Design", "Academic Project"],
    repo: null,
  },
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const ActiveIcon = selectedProject?.icon;

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section id="projects" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute left-0 bottom-8 h-64 w-64 rounded-full bg-[oklch(0.65_0.18_205)] blur-3xl opacity-20" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground">
              // selected work
            </p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              Featured <span className="gradient-text">projects</span>.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground">
              Backend systems and workflow automations, including demonstrated n8n email projects and API-focused applications.
            </p>
          </div>
          <a
            href="https://github.com/raonomandev"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-4 py-2 text-sm font-medium text-muted-foreground transition hover:border-primary/30 hover:text-foreground"
          >
            <Github className="h-4 w-4" /> View all repos
          </a>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 md:gap-7 lg:grid-cols-3">
          {projects.map((project) => (
            <motion.article
              key={project.title}
              whileHover={{ y: -6, scale: 1.01, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedProject(project)}
              className="group relative cursor-pointer overflow-hidden rounded-[32px] border border-border bg-card/90 p-7 shadow-xl shadow-slate-950/20 transition duration-500 hover:shadow-2xl"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-400 via-sky-400 to-violet-400 opacity-80" />
              <div className="relative flex h-full flex-col">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-muted/40 text-foreground shadow-sm shadow-black/10 transition group-hover:scale-105">
                  <project.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-2xl border border-border bg-muted/40 px-3 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-border pt-4 text-sm">
                  <span className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-4 py-2 text-sm font-medium text-muted-foreground transition group-hover:border-sky-400/30 group-hover:text-foreground">
                    <ArrowRight className="h-3.5 w-3.5" /> Explore project
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
                    {project.demoUrls?.length ? "workflow demo" : project.repo ? "GitHub repository" : "coming soon"}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(event: MouseEvent<HTMLDivElement>) => event.stopPropagation()}
              className="relative w-full max-w-2xl overflow-hidden rounded-[28px] border border-border bg-card p-6 shadow-[0_30px_120px_rgba(0,0,0,0.25)] backdrop-blur-2xl sm:p-8"
            >
              <button
                type="button"
                aria-label="Close project details"
                onClick={() => setSelectedProject(null)}
                className="absolute right-4 top-4 rounded-full border border-border bg-muted/40 p-2 text-muted-foreground transition hover:bg-muted hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="portfolio-accent-surface relative grid h-16 w-16 shrink-0 place-items-center rounded-2xl border border-emerald-400/30 bg-gradient-to-br from-emerald-400/20 via-slate-900/70 to-sky-400/20 shadow-[0_0_35px_rgba(16,185,129,0.18)]">
                    <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.18),_transparent_55%)]" />
                    <div className="relative">
                      {ActiveIcon && <ActiveIcon className="portfolio-accent-icon h-7 w-7 text-emerald-100" />}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground">{selectedProject.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{selectedProject.description}</p>
                  </div>
                </div>

                <div className="rounded-2xl border border-border bg-muted/40 p-5">
                  <h4 className="text-sm font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                    Tech Stack
                  </h4>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <span key={tech} className="rounded-full border border-border bg-background px-3 py-2 text-xs font-medium text-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-sm text-muted-foreground">
                    {selectedProject.repo
                      ? "Open the repository to explore the implementation details."
                      : selectedProject.demoUrls?.length
                        ? "Watch the workflow recording."
                        : "This project does not currently have a public GitHub repository."}
                  </p>
                  {selectedProject.repo ? (
                    <motion.a
                      href={selectedProject.repo}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ y: -2, scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      className="portfolio-accent-action inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-gradient-to-r from-emerald-400/20 to-sky-400/20 px-5 py-3 text-sm font-semibold text-emerald-100 transition hover:shadow-[0_0_25px_rgba(16,185,129,0.18)]"
                    >
                      <Github className="h-4 w-4" />
                      View GitHub
                    </motion.a>
                  ) : selectedProject.demoUrls?.length ? (
                    selectedProject.demoUrls.map((demoUrl, index) => (
                      <motion.a
                        key={demoUrl}
                        href={demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ y: -2, scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        className="portfolio-accent-action inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-gradient-to-r from-emerald-400/20 to-sky-400/20 px-5 py-3 text-sm font-semibold text-emerald-100 transition hover:shadow-[0_0_25px_rgba(16,185,129,0.18)]"
                      >
                        <ExternalLink className="h-4 w-4" />
                        View workflow demo {index + 1}
                      </motion.a>
                    ))
                  ) : (
                    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-5 py-3 text-sm font-semibold text-muted-foreground">
                      <Sparkles className="h-4 w-4 text-emerald-400" />
                      Coming Soon
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
