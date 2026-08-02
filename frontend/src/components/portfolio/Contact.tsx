import { useState, type FormEvent } from "react";
import {
  Mail,
  MapPin,
  Send,
  Github,
  Linkedin,
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
          <div className="relative w-full max-w-md rounded-[28px] border border-white/10 bg-slate-950/95 p-8 text-center shadow-2xl shadow-slate-950/30">
            <button
              type="button"
              onClick={() => setShowSuccess(false)}
              className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:bg-white/10"
              aria-label="Close notification"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-white">Message Sent</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Thank you for getting in touch. I’ll review your message and follow up soon.
            </p>
          </div>
        </div>
      )}

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[28px] border border-white/10 bg-slate-950/70 p-8 shadow-xl shadow-slate-950/20 backdrop-blur-xl sm:p-8">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Contact</p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Ready to turn your backend idea into production?
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-300">
              I build scalable Python and Django APIs, dependable authentication flows, and database-driven systems that power growing products. Share your requirements and I will reply with a practical plan.
            </p>

            <div className="mt-10 space-y-4">
              <div className="flex items-start gap-4 rounded-3xl border border-white/10 bg-white/5 p-4">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-800 text-slate-50">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Email</p>
                  <p className="mt-1 text-sm font-medium text-white">raonoman.dev@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-3xl border border-white/10 bg-white/5 p-4">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-800 text-slate-50">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Location</p>
                  <p className="mt-1 text-sm font-medium text-white">Pakistan — remote collaboration available</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://github.com/raonomandev/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-3xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-slate-100 transition hover:border-emerald-400/20 hover:bg-emerald-400/10"
              >
                <Github className="h-4 w-4" />
                GitHub
                <ExternalLink className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/rao-noman-dev/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-3xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-slate-100 transition hover:border-sky-400/20 hover:bg-sky-400/10"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-slate-950/80 p-8 shadow-xl shadow-slate-950/30 sm:p-8">
            <div className="mb-6">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Get in touch</p>
              <h3 className="mt-3 text-3xl font-semibold text-white">Send a message</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Use the form below for project inquiries, collaboration requests, or technical questions.
              </p>
            </div>

            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-sm font-medium text-slate-200">Name</span>
                  <input
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your name"
                    className="h-14 w-full rounded-3xl border border-white/10 bg-slate-900/90 px-4 text-sm text-white outline-none transition focus:border-emerald-400/50 focus:ring-2 focus:ring-emerald-400/10"
                  />
                </label>

                <label className="space-y-2">
                  <span className="text-sm font-medium text-slate-200">Email</span>
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    className="h-14 w-full rounded-3xl border border-white/10 bg-slate-900/90 px-4 text-sm text-white outline-none transition focus:border-sky-400/50 focus:ring-2 focus:ring-sky-400/10"
                  />
                </label>
              </div>

              <label className="space-y-2">
                <span className="text-sm font-medium text-slate-200">Message</span>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell me about your idea, timeline, and goals."
                  className="w-full rounded-[28px] border border-white/10 bg-slate-900/90 px-4 py-4 text-sm text-white outline-none transition focus:border-violet-400/50 focus:ring-2 focus:ring-violet-400/10"
                />
              </label>

              {error ? (
                <div className="rounded-3xl border border-rose-400/20 bg-rose-500/10 px-4 py-3 text-sm text-rose-200">
                  {error}
                </div>
              ) : null}

              <button
                type="submit"
                disabled={loading}
                className="inline-flex w-full items-center justify-center gap-3 rounded-3xl bg-gradient-to-r from-emerald-400 to-sky-400 px-6 py-4 text-sm font-semibold text-slate-950 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
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
