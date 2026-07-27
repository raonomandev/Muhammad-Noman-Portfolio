import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { GithubSection } from "@/components/portfolio/Github";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alex Chen — Backend Developer & Systems Architect" },
      {
        name: "description",
        content:
          "Portfolio of Alex Chen — distributed systems, high-throughput APIs, and cloud-native infrastructure for fintech and SaaS.",
      },
      { property: "og:title", content: "Alex Chen — Backend Developer & Systems Architect" },
      {
        property: "og:description",
        content:
          "Distributed systems, scalable APIs, and cloud-native infrastructure — engineered with precision.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <GithubSection />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
