import type { NavigationItem, ResumeAsset } from "@/domain/portfolio";

import { Container } from "./container";
import styles from "./header.module.css";

type HeaderProps = Readonly<{
  navigation: readonly NavigationItem[];
  resumes: readonly ResumeAsset[];
  homeHref?: string;
}>;

type NavigationProps = Pick<HeaderProps, "navigation"> & Readonly<{ label: string }>;

function Navigation({ label, navigation }: NavigationProps) {
  return (
    <nav aria-label={label}>
      <ul className={styles.navigationList}>
        {navigation.map((item) => (
          <li key={item.href}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function ResumeMenu({ resumes }: Pick<HeaderProps, "resumes">) {
  return (
    <details className={styles.resumeMenu}>
      <summary>Resume</summary>
      <div className={styles.resumeOptions}>
        {resumes.map((resume) => (
          <a download={resume.fileName} href={resume.href} key={resume.href}>
            {resume.label}
          </a>
        ))}
      </div>
    </details>
  );
}

export function Header({ homeHref = "#top", navigation, resumes }: HeaderProps) {
  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <a className={styles.identity} href={homeHref}>
          <span aria-hidden="true">IG</span>
          <span className={styles.identityName}>Ivan Genes</span>
        </a>

        <div className={styles.desktopNavigation}>
          <Navigation label="Primary navigation" navigation={navigation} />
        </div>

        <ResumeMenu resumes={resumes} />

        <details className={styles.mobileMenu}>
          <summary aria-label="Open navigation">Menu</summary>
          <div className={styles.mobilePanel}>
            <Navigation label="Mobile navigation" navigation={navigation} />
            <div className={styles.mobileResumes}>
              <p>Resume</p>
              {resumes.map((resume) => (
                <a download={resume.fileName} href={resume.href} key={resume.href}>
                  {resume.label}
                </a>
              ))}
            </div>
          </div>
        </details>
      </Container>
    </header>
  );
}
