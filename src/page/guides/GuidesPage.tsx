import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/common/Icon";
import { PageHero } from "@/components/common/PageHero";
import { siteConfig } from "@/config/site";
import { guideArticles } from "@/lib/data/content";
import { JsonLd } from "@/seo/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/seo/metadata";
import { pageTdk } from "@/seo/tdk";
import styles from "@/style/page/guides/guides.module.css";

export const metadata: Metadata = createPageMetadata(pageTdk.guides);

const jsonLd = [
  breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Guides", path: "/guides/" }]),
  { "@context": "https://schema.org", "@type": "CollectionPage", name: "Narinig Mo Ba Guides", description: metadata.description, url: new URL("/guides/", siteConfig.url).toString() },
];

export default function GuidesPage() {
  return (
    <main id="main-content">
      <JsonLd data={jsonLd} />
      <PageHero eyebrow="Player guides" title="Narinig Mo Ba Guides — Controls, Orders, and Story Clues" current="Guides" description="Use these guides to handle the store confidently, understand the key conversations, and follow the story through its ending." />

      <section className={styles.intro}>
        <div className={`container ${styles.introInner}`}>
          <p className="eyebrow">Start here</p><h2>Guides for Your First Shift</h2>
        </div>
      </section>

      <section className={styles.guideList} aria-label="Narinig Mo Ba guide articles">
        <div className={`container ${styles.guideGrid}`}>
          {Object.entries(guideArticles).map(([slug, guide], index) => {
            const href = `/guides/${slug}/`;

            return <article className={styles.guideCard} key={slug}>
              <Link className={styles.guideImage} href={href} aria-label={`Read ${guide.title}`}>
                <Image src={guide.image} alt={guide.alt} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                <b>{String(index + 1).padStart(2, "0")}</b>
                <span>Read guide <Icon name="arrow" size={18} /></span>
              </Link>
              <div className={styles.guideCopy}>
                <p className="eyebrow">{guide.label}</p><h2><Link href={href}>{guide.title}</Link></h2><p>{guide.description}</p>
                <div className={styles.guideFooter}><span>{guide.readTime}</span><Link className="text-link" href={href}>Open guide <Icon name="arrow" size={18} /></Link></div>
              </div>
            </article>;
          })}
        </div>
      </section>

      <section className={styles.noteSection}>
        <div className={`container ${styles.noteInner}`}>
          <Icon name="sound" size={30} />
          <div><p className="eyebrow">Before you start</p><h2>Let the shift breathe.</h2><p>Use a desktop mouse where possible, keep the sound on, and read the ending sections when you want the full context behind the conversations.</p></div>
        </div>
      </section>
    </main>
  );
}
