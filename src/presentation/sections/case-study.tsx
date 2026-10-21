import Link from "next/link";

import type {
  ArchitectureDiagram as ArchitectureDiagramDefinition,
  CaseStudy as CaseStudyContent,
  ProjectSummary,
} from "@/domain/portfolio";

import { ArchitectureDiagram, ArrowUpRight, Container } from "@/presentation/components";

import styles from "./case-study.module.css";

type CaseStudyProps = Readonly<{
  caseStudy: CaseStudyContent;
  diagram: ArchitectureDiagramDefinition;
  previous: ProjectSummary | null;
  next: ProjectSummary | null;
}>;

type ProseSectionProps = Readonly<{
  index: string;
  title: string;
  paragraphs: readonly string[];
}>;

function ProseSection({ index, title, paragraphs }: ProseSectionProps) {
  return (
    <section className={styles.proseSection}>
      <div className={styles.sectionLabel}>
        <span>{index}</span>
        <h2>{title}</h2>
      </div>
      <div className={styles.prose}>
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}

export function CaseStudy({ caseStudy, diagram, previous, next }: CaseStudyProps) {
  return (
    <>
      <section className={styles.hero} id="top">
        <Container>
          <div className={styles.heroMeta}>
            <Link href="/#work">← Selected work</Link>
            <p>{caseStudy.context}</p>
          </div>
          <h1>{caseStudy.name}</h1>
          <p className={styles.title}>{caseStudy.title}</p>

          <dl className={styles.facts}>
            {caseStudy.facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <Container as="div" className={styles.story}>
        <ProseSection index="01" paragraphs={caseStudy.overview} title="Overview" />
        <ProseSection index="02" paragraphs={caseStudy.challenge} title="The challenge" />
        <ProseSection index="03" paragraphs={caseStudy.solution} title="The solution" />
        <ProseSection index="04" paragraphs={caseStudy.contribution} title="My contribution" />

        {caseStudy.additionalSection ? (
          <section className={styles.additionalSection}>
            <div className={styles.sectionLabel}>
              <span>05</span>
              <h2>{caseStudy.additionalSection.title}</h2>
            </div>
            <div className={styles.additionalItems}>
              {caseStudy.additionalSection.items.map((item) => (
                <article key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </section>
        ) : null}
      </Container>

      <section aria-labelledby="case-architecture-heading" className={styles.architecture}>
        <Container>
          <div className={styles.architectureHeading}>
            <p>Architecture</p>
            <div>
              <h2 id="case-architecture-heading">{diagram.title}</h2>
              <p>{diagram.summary}</p>
            </div>
          </div>
          <ArchitectureDiagram definition={diagram} />
        </Container>
      </section>

      <Container as="div" className={styles.engineering}>
        <section className={styles.decisions}>
          <div className={styles.sectionLabel}>
            <span>06</span>
            <h2>Key engineering decisions</h2>
          </div>
          <div className={styles.decisionGrid}>
            {caseStudy.decisions.map((decision, index) => (
              <article key={decision.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{decision.title}</h3>
                <p>{decision.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.technology}>
          <div className={styles.sectionLabel}>
            <span>07</span>
            <h2>Technology</h2>
          </div>
          <ul>
            {caseStudy.technology.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </section>

        <section className={styles.outcome}>
          <div className={styles.sectionLabel}>
            <span>08</span>
            <h2>Engineering outcome</h2>
          </div>
          <p>{caseStudy.outcome}</p>
          {caseStudy.externalLink ? (
            <a href={caseStudy.externalLink.href} rel="noreferrer" target="_blank">
              {caseStudy.externalLink.label} <ArrowUpRight />
            </a>
          ) : null}
        </section>

        <aside className={styles.note}>
          <p>{caseStudy.note.title}</p>
          <p>{caseStudy.note.text}</p>
        </aside>
      </Container>

      <nav aria-label="Case study navigation" className={styles.caseNavigation}>
        <Container className={styles.caseNavigationInner}>
          {previous ? (
            <Link href={`/work/${previous.slug}/`}>
              <span>Previous case</span>
              <strong>← {previous.name}</strong>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link href={`/work/${next.slug}/`}>
              <span>Next case</span>
              <strong>{next.name} →</strong>
            </Link>
          ) : (
            <Link href="/#work">
              <span>Return</span>
              <strong>Selected work →</strong>
            </Link>
          )}
        </Container>
      </nav>
    </>
  );
}
