import type {
  ArchitectureCopy,
  ArchitectureDiagram as ArchitectureDiagramDefinition,
} from "@/domain/portfolio";

import { ArchitectureDiagram, Container } from "@/presentation/components";

import styles from "./architecture-preview.module.css";

type ArchitecturePreviewProps = Readonly<{
  content: ArchitectureCopy;
  diagram: ArchitectureDiagramDefinition;
}>;

export function ArchitecturePreview({ content, diagram }: ArchitecturePreviewProps) {
  return (
    <section aria-labelledby="architecture-heading" className={styles.section} id="architecture">
      <Container>
        <div className={styles.headingRow}>
          <p>{content.eyebrow}</p>
          <div>
            <h2 id="architecture-heading">{content.heading}</h2>
            <div className={styles.introduction}>
              {content.introduction.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.guide}>
          <div>
            <p className={styles.guideEyebrow}>{content.guide.eyebrow}</p>
            <h3>{content.guide.heading}</h3>
          </div>
          <p className={styles.guideDescription}>{content.guide.description}</p>
        </div>

        <ArchitectureDiagram definition={diagram} joined />

        <ul aria-label="Architecture patterns" className={styles.tags}>
          {content.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>

        <p className={styles.disclaimer}>{content.disclaimer}</p>
      </Container>
    </section>
  );
}
