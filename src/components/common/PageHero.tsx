import Link from "next/link";
import styles from "@/style/common/page-hero.module.css";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  current: string;
};

export function PageHero({ eyebrow, title, description, current }: PageHeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.backdrop} aria-hidden="true" />
      <div className={`container ${styles.content}`}>
        <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
          <Link href="/">Home</Link><span>/</span><span aria-current="page">{current}</span>
        </nav>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className={styles.description}>{description}</p>
      </div>
    </section>
  );
}
