import Link from "next/link";

import type { ProjectSummary } from "@/domain/portfolio";

import { ArrowUpRight, Container } from "@/presentation/components";

import styles from "./selected-work-preview.module.css";

type SelectedWorkPreviewProps = Readonly<{
  projects: readonly ProjectSummary[];
}>;

export function SelectedWorkPreview({ projects }: SelectedWorkPreviewProps) {
  return (
    <section aria-labelledby="selected-work-heading" className={styles.section} id="work">
      <Container>
        <div className={styles.headingRow}>
          <p>01 / Selected work</p>
          <h2 id="selected-work-heading">Systems with real-world stakes.</h2>
        </div>

        <div className={styles.projectList}>
          {projects.map((project, index) => (
            <Link className={styles.card} href={`/work/${project.slug}/`} key={project.slug}>
              <div className={styles.cardMeta}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span>{project.category}</span>
              </div>
              <div className={styles.cardBody}>
                <div>
                  <h3>{project.name}</h3>
                  <p className={styles.role}>{project.role}</p>
                </div>
                <p className={styles.description}>{project.description}</p>
              </div>
              <div className={styles.cardFooter}>
                <ul aria-label={`${project.name} technologies`}>
                  {project.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
                <span className={styles.caseLink}>
                  View case study <ArrowUpRight />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
