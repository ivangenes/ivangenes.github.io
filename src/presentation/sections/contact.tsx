import type { ContactInformation, ResumeAsset } from "@/domain/portfolio";

import { ArrowUpRight, Container } from "@/presentation/components";

import styles from "./contact.module.css";

type ContactProps = Readonly<{
  content: ContactInformation;
  resumes: readonly ResumeAsset[];
}>;

export function Contact({ content, resumes }: ContactProps) {
  return (
    <section aria-labelledby="contact-heading" className={styles.section} id="contact">
      <Container>
        <div className={styles.headingRow}>
          <p>06 / Contact</p>
          <div>
            <h2 id="contact-heading">{content.heading}</h2>
            <p>{content.summary}</p>
          </div>
        </div>

        <a className={styles.email} href={`mailto:${content.email}`}>
          <span>{content.email}</span>
          <ArrowUpRight className={styles.emailIcon} />
        </a>

        <div className={styles.contactGrid}>
          <div>
            <p className={styles.label}>Profiles</p>
            <a href={content.linkedInUrl} rel="noreferrer" target="_blank">
              LinkedIn <ArrowUpRight className={styles.profileIcon} />
            </a>
            <a href={content.githubUrl} rel="noreferrer" target="_blank">
              GitHub <ArrowUpRight className={styles.profileIcon} />
            </a>
          </div>
          <div>
            <p className={styles.label}>Location</p>
            <p>{content.location}</p>
            <p>{content.freelanceNote}</p>
          </div>
          <div>
            <p className={styles.label}>Resume</p>
            {resumes.map((resume) => (
              <a download={resume.fileName} href={resume.href} key={resume.href}>
                {resume.label} <span aria-hidden="true">↓</span>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
