import type { Profile, ResumeAsset } from "@/domain/portfolio";

import { ArrowUpRight, Container } from "@/presentation/components";

import styles from "./hero.module.css";

type HeroProps = Readonly<{
  profile: Profile;
  resumes: readonly ResumeAsset[];
}>;

export function Hero({ profile, resumes }: HeroProps) {
  return (
    <section aria-labelledby="hero-title" className={styles.hero} id="top">
      <Container className={styles.inner}>
        <div className={styles.metaRow}>
          <p className={styles.availability}>
            <span aria-hidden="true" />
            {profile.location}
          </p>
          <p className={styles.index}>Portfolio / 2026</p>
        </div>

        <div className={styles.titleComposition}>
          <div aria-hidden="true" className={styles.silverMark}>
            <span className={styles.orbitHorizontal} />
            <span className={styles.orbitVertical} />
            <span className={styles.orbitDiagonal} />
          </div>
          <h1 aria-label={profile.name} id="hero-title">
            <span>Ivan</span>
            <span className={styles.lastName}>Genes</span>
          </h1>
          <p className={styles.role}>{profile.role}</p>
        </div>

        <div className={styles.bottomGrid}>
          <p className={styles.specialties}>{profile.specialties.join(" · ")}</p>
          <div className={styles.introduction}>
            <p>{profile.summary}</p>
            <div className={styles.actions}>
              <a className={styles.primaryAction} href="#work">
                View selected work <ArrowUpRight />
              </a>
              <details className={styles.resumeSelector}>
                <summary>Download resume</summary>
                <div className={styles.resumeOptions}>
                  {resumes.map((resume) => (
                    <a download={resume.fileName} href={resume.href} key={resume.href}>
                      {resume.label}
                    </a>
                  ))}
                </div>
              </details>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
