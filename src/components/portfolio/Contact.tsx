import { useState, type FormEvent } from "react";
import { Mail, MapPin, Send, Github, Linkedin } from "lucide-react";
import { sendContactMessage } from "@/lib/api";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const formData = new FormData(form);

    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    try {
      setLoading(true);

      await sendContactMessage(data);

      setSent(true);

      form.reset();

      setTimeout(() => {
        setSent(false);
      }, 4000);

    } catch (error) {
      console.error(error);
      alert("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
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
                  Open to backend roles, contract work and freelance projects.
                  I usually reply within 24 hours.
                </p>


                <ul className="mt-8 space-y-3 text-sm">

                  <li className="flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-lg btn-gradient">
                      <Mail className="h-4 w-4" />
                    </span>

                    <span className="text-muted-foreground">
                      raonoman.dev@gmail.com
                    </span>
                  </li>


                  <li className="flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-lg btn-gradient">
                      <MapPin className="h-4 w-4" />
                    </span>

                    <span className="text-muted-foreground">
                      Remote — worldwide
                    </span>
                  </li>

                </ul>


                <div className="mt-10 flex items-center gap-2">

                  <a
                    href="https://github.com/raonomandev"
                    target="_blank"
                    rel="noreferrer"
                    className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 hover:border-primary/40 hover:text-primary"
                  >
                    <Github className="h-4 w-4" />
                  </a>


                  <a
                    href="https://www.linkedin.com/in/rao-noman-dev/"
                    target="_blank"
                    rel="noreferrer"
                    className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 hover:border-primary/40 hover:text-primary"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>

                </div>

              </div>

            </div>



            <form
              onSubmit={onSubmit}
              className="p-8 sm:p-12 space-y-5"
            >


              <label className="block">

                <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  Name
                </span>

                <input
                  required
                  name="name"
                  type="text"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm focus:border-primary focus:outline-none"
                  placeholder="Your full name"
                />

              </label>



              <label className="block">

                <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  Email
                </span>

                <input
                  required
                  name="email"
                  type="email"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm focus:border-primary focus:outline-none"
                  placeholder="you@example.com"
                />

              </label>



              <label className="block">

                <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  Message
                </span>

                <textarea
                  required
                  name="message"
                  rows={5}
                  className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm focus:border-primary focus:outline-none"
                  placeholder="Tell me about what you're building..."
                />

              </label>



              <button
                type="submit"
                disabled={loading}
                className="group inline-flex items-center gap-2 rounded-xl btn-gradient px-6 py-3 text-sm font-medium disabled:opacity-50"
              >

                {loading
                  ? "Sending..."
                  : sent
                  ? "Message sent ✓"
                  : "Send message"
                }


                {!loading && !sent && (
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