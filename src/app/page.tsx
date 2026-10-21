import { portfolio } from "@/composition/portfolio";
import { Footer, Header } from "@/presentation/components";
import {
  ArchitecturePreview,
  Contact,
  Education,
  EngineeringApproach,
  Experience,
  Hero,
  SelectedWorkPreview,
} from "@/presentation/sections";

const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ivan Genes",
  url: "https://ivangenes.github.io/",
  jobTitle: "Senior Software Engineer",
  email: "mailto:ivangenes@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Buenos Aires",
    addressCountry: "AR",
  },
  sameAs: ["https://www.linkedin.com/in/ivan-genes/", "https://github.com/ivangenes"],
  knowsAbout: [
    "Backend Architecture",
    "Distributed Systems",
    "Full-Stack Development",
    "Event-Driven Architecture",
    "Software Engineering",
  ],
};

export default function HomePage() {
  const content = portfolio.getHomeContent.execute();
  const primaryResume = content.resumes[0];
  const representativeDiagram = portfolio.getArchitectureDiagramByKey.execute("representative");

  if (!representativeDiagram) {
    throw new Error("Representative architecture diagram is missing.");
  }

  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personStructuredData) }}
        type="application/ld+json"
      />
      <a className="skipLink" href="#main-content">
        Skip to content
      </a>
      <Header navigation={content.navigation} resumes={content.resumes} />
      <main id="main-content">
        <Hero
          profile={content.profile}
          resumeFileName={primaryResume.fileName}
          resumeHref={primaryResume.href}
        />
        <SelectedWorkPreview projects={content.projects} />
        <ArchitecturePreview content={content.architecture} diagram={representativeDiagram} />
        <Experience entries={content.experience} />
        <EngineeringApproach content={content.approach} />
        <Education entries={content.education} />
        <Contact content={content.contact} resumes={content.resumes} />
      </main>
      <Footer
        email={content.contact.email}
        githubUrl={content.contact.githubUrl}
        linkedInUrl={content.contact.linkedInUrl}
      />
    </>
  );
}
