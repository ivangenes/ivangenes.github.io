import { ArrowUpRight } from "./arrow-up-right";
import { Container } from "./container";
import styles from "./footer.module.css";

type FooterProps = Readonly<{
  email: string;
  linkedInUrl: string;
  githubUrl: string;
}>;

export function Footer({ email, linkedInUrl, githubUrl }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <Container className={styles.inner}>
        <p>Ivan Genes · Senior Software Engineer</p>
        <div className={styles.links}>
          <a href={`mailto:${email}`}>Email</a>
          <a href={linkedInUrl} rel="noreferrer" target="_blank">
            LinkedIn <ArrowUpRight />
          </a>
          <a href={githubUrl} rel="noreferrer" target="_blank">
            GitHub <ArrowUpRight />
          </a>
        </div>
        <a className={styles.backToTop} href="#top">
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </Container>
    </footer>
  );
}
