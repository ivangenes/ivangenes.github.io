import type { EducationEntry } from "@/domain/portfolio";

import { Container } from "@/presentation/components";

import styles from "./education.module.css";

type EducationProps = Readonly<{
  entries: readonly EducationEntry[];
}>;

export function Education({ entries }: EducationProps) {
  return (
    <section aria-labelledby="education-heading" className={styles.section} id="education">
      <Container>
        <div className={styles.headingRow}>
          <p>05 / Education</p>
          <h2 id="education-heading">A systems foundation.</h2>
        </div>

        <div className={styles.degrees}>
          {entries.map((entry, index) => (
            <article key={entry.degree}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{entry.degree}</h3>
                <p className={styles.focus}>{entry.focus}</p>
              </div>
              <div className={styles.institution}>
                <p className={styles.institutionMeta}>{entry.institution}</p>
                <p className={styles.institutionMeta}>{entry.period}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
