import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Menu, X, FileText, Moon, Sun } from "lucide-react";

const links = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [emailOpen, setEmailOpen] = useState(false);
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const theme = window.localStorage.getItem("portfolio-theme");
    if (theme === "light") {
      document.documentElement.classList.replace("dark", "light");
      setIsLight(true);
    }
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("light", !isLight);
    document.documentElement.classList.toggle("dark", isLight);
    window.localStorage.setItem("portfolio-theme", isLight ? "dark" : "light");
    setIsLight(!isLight);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setEmailOpen(false);
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
    setEmailOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all ${
            scrolled ? "glass-card" : ""
          }`}
        >
          <a href="#top" className="flex items-center gap-1 font-bold text-xl">
            <span className="gradient-text">Md Noman</span>
            <span className="text-primary">.</span>
          </a>
          <ul className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground hover:bg-white/5"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="portfolio-theme-controls hidden items-center gap-2 md:flex">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
              title="Toggle color theme"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition-colors hover:text-foreground sm:h-10 sm:w-10"
            >
              {isLight ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
            </button>
            <a
              href="https://github.com/raonomandev"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              title="GitHub"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition-all duration-200 hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-foreground hover:shadow-[0_0_18px_rgba(34,211,238,0.16)] sm:h-10 sm:w-10"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/rao-noman-dev/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition-all duration-200 hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-foreground hover:shadow-[0_0_18px_rgba(34,211,238,0.16)] sm:h-10 sm:w-10"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <button
              type="button"
              onClick={() => setEmailOpen(true)}
              aria-label="Email"
              title="Email"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition-all duration-200 hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-foreground hover:shadow-[0_0_18px_rgba(34,211,238,0.16)] sm:h-10 sm:w-10"
            >
              <Mail className="h-4 w-4" />
            </button>
            <a
              href="/Muhammad-Noman-Resume.pdf.pdf"
              target="_blank"
              rel="noopener"
              aria-label="Resume"
              title="Resume"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition-all duration-200 hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-foreground hover:shadow-[0_0_18px_rgba(34,211,238,0.16)] sm:h-10 sm:w-10"
            >
              <FileText className="h-4 w-4" />
            </a>
          </div>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
            title="Toggle color theme"
            className="ml-auto mr-2 grid h-10 w-10 place-items-center rounded-xl border border-border bg-muted/40 text-muted-foreground transition-colors hover:text-foreground md:hidden"
          >
            {isLight ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-muted/40 md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {open && (
          <div className="md:hidden mt-2 glass-card rounded-2xl p-4 animate-fade-up">
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-white/5"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={toggleTheme}
                  className="mt-2 inline-flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground hover:bg-white/5"
                >
                  {isLight ? (
                    <Moon className="h-4 w-4" />
                  ) : (
                    <Sun className="h-4 w-4" />
                  )}
                  Switch to {isLight ? "dark" : "light"} mode
                </button>
              </li>
              <li className="portfolio-theme-controls mt-2 flex flex-wrap gap-2">
                <a
                  href="https://github.com/raonomandev"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpen(false)}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-foreground"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/rao-noman-dev/"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpen(false)}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-foreground"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    setEmailOpen(true);
                  }}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-foreground"
                >
                  <Mail className="h-4 w-4" />
                </button>
                <a
                  href="/Muhammad-Noman-Resume.pdf.pdf"
                  target="_blank"
                  rel="noopener"
                  onClick={() => setOpen(false)}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-foreground"
                >
                  <FileText className="h-4 w-4" />
                </a>
              </li>
            </ul>
          </div>
        )}
        <AnimatePresence>
          {emailOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-md"
              onClick={() => setEmailOpen(false)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 16 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                onClick={(event) => event.stopPropagation()}
                className="w-full max-w-md rounded-[24px] border border-border bg-card p-6 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-mono uppercase tracking-[0.28em] text-muted-foreground">
                      Contact
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-foreground">raonoman.dev@gmail.com</h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setEmailOpen(false)}
                    className="rounded-full border border-border bg-muted/40 p-2 text-muted-foreground transition hover:bg-muted hover:text-foreground"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  Reach out for backend development opportunities, freelance work, or technical collaboration.
                </p>

                <div className="mt-6 flex justify-end">
                  <motion.button
                    type="button"
                    whileHover={{ y: -2, scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleContactScroll}
                    className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-gradient-to-r from-cyan-400/20 to-fuchsia-500/20 px-4 py-2.5 text-sm font-medium text-cyan-100 transition hover:shadow-[0_0_20px_rgba(34,211,238,0.16)]"
                  >
                    Contact Me
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
