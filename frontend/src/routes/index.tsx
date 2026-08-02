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
      { title: "Rao Noman | Backend Developer" },
      {
        name: "description",
        content:
          "Backend Developer specializing in Python, Django, Django REST Framework, REST APIs and backend application development.",
      },
      { property: "og:title", content: "Rao Noman | Backend Developer" },
      {
        property: "og:description",
        content:
          "Backend Developer specializing in Python, Django, Django REST Framework, REST APIs and backend application development.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Rao Noman | Backend Developer" },
      {
        name: "twitter:description",
        content:
          "Backend Developer specializing in Python, Django, Django REST Framework, REST APIs and backend application development.",
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
