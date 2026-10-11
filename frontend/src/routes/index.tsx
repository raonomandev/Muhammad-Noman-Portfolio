import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Services } from "@/components/portfolio/Services";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rao Noman | Backend Developer & AI Automation" },
      {
        name: "description",
        content:
          "Muhammad Noman builds Python and Django APIs and delivers AI workflow automation with n8n, Claude, OpenAI, Gemini, and API integrations.",
      },
      { property: "og:title", content: "Rao Noman | Backend Developer & AI Automation" },
      {
        property: "og:description",
        content:
          "Python and Django APIs, n8n automation, LLM integrations, and email workflow automation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Rao Noman | Backend Developer & AI Automation" },
      {
        name: "twitter:description",
        content:
          "Python and Django APIs, n8n automation, LLM integrations, and email workflow automation.",
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
        <Experience />
        <Skills />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
