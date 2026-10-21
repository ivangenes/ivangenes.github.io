import type { EngineeringApproach as EngineeringApproachContent } from "@/domain/portfolio";

import { Container } from "@/presentation/components";

import styles from "./engineering-approach.module.css";

type EngineeringApproachProps = Readonly<{
  content: EngineeringApproachContent;
}>;

export function EngineeringApproach({ content }: EngineeringApproachProps) {
  return (
    <section
      aria-labelledby="engineering-approach-heading"
      className={styles.section}
      id="engineering-approach"
    >
      <Container>
        <div className={styles.introduction}>
          <p>04 / Engineering approach</p>
          <div>
            <h2 id="engineering-approach-heading">{content.title}</h2>
            <p className={styles.summary}>{content.summary}</p>
          </div>
        </div>

        <ol className={styles.stages}>
          {content.stages.map((stage) => (
            <li key={stage.index}>
              <span>{stage.index}</span>
              <h3>{stage.title}</h3>
              <p className={styles.stageDescription}>{stage.description}</p>
            </li>
          ))}
        </ol>

        <div className={styles.transversal}>
          <p className={styles.transversalLabel}>{content.transversalLabel}</p>
          <ul aria-label="Workflow tools">
            {content.tools.map((tool) => (
              <li className={styles.tool} key={tool}>
                {tool}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
