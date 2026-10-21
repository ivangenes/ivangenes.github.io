import type { ExperienceEntry } from "@/domain/portfolio";

import { Container } from "@/presentation/components";

import styles from "./experience.module.css";

type ExperienceProps = Readonly<{
  entries: readonly ExperienceEntry[];
}>;

export function Experience({ entries }: ExperienceProps) {
  return (
    <section aria-labelledby="experience-heading" className={styles.section} id="experience">
      <Container>
        <div className={styles.headingRow}>
          <p>03 / Experience</p>
          <h2 id="experience-heading">Building across products, teams and industries.</h2>
        </div>

        <div className={styles.timeline}>
          {entries.map((entry) => (
            <article className={styles.entry} key={`${entry.company}-${entry.period}`}>
              <p className={styles.period}>{entry.period}</p>
              <div className={styles.position}>
                <h3>{entry.company}</h3>
                <p>{entry.role}</p>
              </div>
              <div className={styles.detail}>
                <p>{entry.summary}</p>
                {entry.engagements ? (
                  <ul aria-label="Selected client engagements">
                    {entry.engagements.map((engagement) => (
                      <li key={engagement.client}>
                        <strong>{engagement.client}</strong>
                        <span>{engagement.role}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
