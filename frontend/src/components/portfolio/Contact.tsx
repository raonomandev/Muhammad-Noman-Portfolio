import { useState, type FormEvent } from "react";
import {
  Mail,
  MapPin,
  Send,
  Github,
  Linkedin,
  Briefcase,
  CheckCircle2,
  X,
  ExternalLink,
} from "lucide-react";
import { sendContactMessage } from "@/lib/api";

export function Contact() {
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = (formData.get("name") ?? "").toString().trim();
    const email = (formData.get("email") ?? "").toString().trim();
    const message = (formData.get("message") ?? "").toString().trim();

    if (!name || !email || !message) {
      setError("Please complete all fields before sending.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      await sendContactMessage({ name, email, message });
      form.reset();
      setShowSuccess(true);
      window.setTimeout(() => setShowSuccess(false), 4200);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to send your message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 sm:py-24">
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 px-4 backdrop-blur-sm">
          <div className="relative w-full max-w-md rounded-[28px] border border-border bg-card p-8 text-center shadow-2xl shadow-slate-950/20">
            <button
              type="button"
              onClick={() => setShowSuccess(false)}
              className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-muted/40 text-muted-foreground transition hover:bg-muted"
              aria-label="Close notification"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="portfolio-accent-surface mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-foreground">Message Sent</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Thank you for getting in touch. I’ll review your message and follow up soon.
            </p>
          </div>
        </div>
      )}

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[28px] border border-border bg-card/90 p-8 shadow-xl shadow-slate-950/20 backdrop-blur-xl sm:p-8">
            <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">Contact</p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              Need a backend API or a workflow that runs itself?
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">
              I work with Python and Django APIs, integrations, and n8n automations using AI services such as Claude, OpenAI, and Gemini. Share what you want to connect or automate and I’ll reply with a practical next step.
            </p>

            <div className="mt-10 space-y-4">
              <div className="flex items-start gap-4 rounded-3xl border border-border bg-muted/40 p-4">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-background text-foreground">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Email</p>
                  <p className="mt-1 text-sm font-medium text-foreground">raonoman.dev@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-3xl border border-border bg-muted/40 p-4">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-background text-foreground">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Location</p>
                  <p className="mt-1 text-sm font-medium text-foreground">Pakistan — remote collaboration available</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://github.com/raonomandev/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-3xl border border-border bg-muted/40 px-5 py-3 text-sm font-medium text-foreground transition hover:border-emerald-400/30 hover:bg-emerald-400/10"
              >
                <Github className="h-4 w-4" />
                GitHub
                <ExternalLink className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/rao-noman-dev/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-3xl border border-border bg-muted/40 px-5 py-3 text-sm font-medium text-foreground transition hover:border-sky-400/30 hover:bg-sky-400/10"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
                <ExternalLink className="h-4 w-4" />
              </a>
              <a
                href="https://www.upwork.com/freelancers/~011193eea8cc639efc"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-3xl border border-border bg-muted/40 px-5 py-3 text-sm font-medium text-foreground transition hover:border-emerald-400/30 hover:bg-emerald-400/10"
              >
                <Briefcase className="h-4 w-4" />
                Upwork
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="rounded-[28px] border border-border bg-card p-8 shadow-xl shadow-slate-950/20 sm:p-8">
            <div className="mb-6">
              <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">Get in touch</p>
              <h3 className="mt-3 text-3xl font-semibold text-foreground">Send a message</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Use the form below for project inquiries, collaboration requests, or technical questions.
              </p>
            </div>

            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-sm font-medium text-foreground">Name</span>
                  <input
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your name"
                    className="h-14 w-full rounded-3xl border border-input bg-background px-4 text-sm text-foreground outline-none transition focus:border-emerald-400/50 focus:ring-2 focus:ring-emerald-400/10"
                  />
                </label>

                <label className="space-y-2">
                  <span className="text-sm font-medium text-foreground">Email</span>
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    className="h-14 w-full rounded-3xl border border-input bg-background px-4 text-sm text-foreground outline-none transition focus:border-sky-400/50 focus:ring-2 focus:ring-sky-400/10"
                  />
                </label>
              </div>

              <label className="space-y-2">
                <span className="text-sm font-medium text-foreground">Message</span>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell me about your idea, timeline, and goals."
                  className="w-full rounded-[28px] border border-input bg-background px-4 py-4 text-sm text-foreground outline-none transition focus:border-primary/50 focus:ring-2 focus:ring-primary/10"
                />
              </label>

              {error ? (
                <div role="alert" className="rounded-3xl border border-rose-400/20 bg-rose-500/10 px-4 py-3 text-sm text-rose-800 dark:text-rose-200">
                  {error} <a className="font-semibold underline underline-offset-2" href="mailto:raonoman.dev@gmail.com">Email me directly.</a>
                </div>
              ) : null}

              <button
                type="submit"
                disabled={loading}
                className="portfolio-accent-action inline-flex w-full items-center justify-center gap-3 rounded-3xl bg-gradient-to-r from-emerald-400 to-sky-400 px-6 py-4 text-sm font-semibold text-slate-950 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Message"}
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
