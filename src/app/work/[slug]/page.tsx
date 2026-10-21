import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { projectSlugs, type ProjectSlug } from "@/domain/portfolio";
import { portfolio } from "@/composition/portfolio";
import { Footer, Header } from "@/presentation/components";
import { CaseStudy } from "@/presentation/sections/case-study";

type CaseStudyPageProps = Readonly<{
  params: Promise<{ slug: string }>;
}>;

export const dynamicParams = false;

function isProjectSlug(slug: string): slug is ProjectSlug {
  return projectSlugs.some((projectSlug) => projectSlug === slug);
}

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = portfolio.getCaseStudyBySlug.execute(slug);

  if (!caseStudy) {
    return {};
  }

  const title = `${caseStudy.name} — Case Study`;
  const description = caseStudy.overview[0];
  const canonicalPath = `/work/${caseStudy.slug}/`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: canonicalPath,
      siteName: "Ivan Genes",
      title: `${title} — Ivan Genes`,
      description,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: "Ivan Genes — Senior Software Engineer",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} — Ivan Genes`,
      description,
      images: [
        {
          url: "/twitter-image",
          alt: "Ivan Genes — Senior Software Engineer",
        },
      ],
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;

  if (!isProjectSlug(slug)) {
    notFound();
  }

  const caseStudy = portfolio.getCaseStudyBySlug.execute(slug);
  const diagram = portfolio.getArchitectureDiagramByKey.execute(slug);

  if (!caseStudy || !diagram) {
    notFound();
  }

  const navigation = portfolio.getCaseStudyNavigation.execute(slug);
  const home = portfolio.getHomeContent.execute();
  const caseNavigation = home.navigation.map((item) => ({ ...item, href: `/${item.href}` }));

  return (
    <>
      <a className="skipLink" href="#main-content">
        Skip to content
      </a>
      <Header homeHref="/" navigation={caseNavigation} resumes={home.resumes} />
      <main id="main-content">
        <CaseStudy
          caseStudy={caseStudy}
          diagram={diagram}
          next={navigation.next}
          previous={navigation.previous}
        />
      </main>
      <Footer
        email={home.contact.email}
        githubUrl={home.contact.githubUrl}
        linkedInUrl={home.contact.linkedInUrl}
      />
    </>
  );
}
