import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import profile from "@/assets/rao-profile.jpg";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-24 pt-28 sm:pb-32 sm:pt-40">
      <div className="glow-orb top-[-100px] left-[-80px] h-[320px] w-[320px] bg-[oklch(0.55_0.24_285)] opacity-70 animate-float-slow" />
      <div className="glow-orb bottom-[-180px] right-[-100px] h-[360px] w-[360px] bg-[oklch(0.65_0.2_210)] opacity-70 animate-float-slower" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <div className="glass-card inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs sm:text-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-muted-foreground">Available for Backend Development Internships</span>
            </div>

            <h1 className="mt-8 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              <span className="block text-foreground">Muhammad Noman</span>
              <span className="mt-2 block text-lg font-semibold tracking-[0.2em] text-muted-foreground uppercase sm:text-xl lg:text-2xl">
                Backend Developer
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
              I build secure REST APIs and scalable backend systems with Python, Django, and Django REST Framework.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="public\Muhammad-Noman-Resume.pdf.pdf"
                download="Rao-Noman-Resume.pdf"
                target="_blank"
                rel="noopener"
                className="group inline-flex items-center gap-2 rounded-xl btn-gradient px-6 py-3 text-sm font-medium"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-xl glass-card px-6 py-3 text-sm font-medium"
              >
                View Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
            className="order-1 flex justify-center lg:order-2 lg:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-6 rounded-full bg-[radial-gradient(circle,_rgba(34,211,238,0.16),_transparent_68%)] blur-3xl" />
              <motion.div
                animate={{ y: [0, -8, 0], rotate: [0, 0.8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative rounded-full border border-white/10 bg-slate-950/60 p-2.5 shadow-[0_0_35px_rgba(34,211,238,0.12)] backdrop-blur"
              >
                <div className="relative rounded-full p-[3px]" style={{ background: "linear-gradient(135deg, oklch(0.65 0.22 275), oklch(0.75 0.15 210))" }}>
                  <div className="rounded-full bg-background p-2">
                    <img
                      src={profile}
                      alt="Rao Noman — Backend Developer"
                      width={360}
                      height={360}
                      className="h-[260px] w-[260px] rounded-full object-cover object-center sm:h-[300px] sm:w-[300px] lg:h-[330px] lg:w-[330px]"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}