import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/common/Icon";
import { PageHero } from "@/components/common/PageHero";
import { siteConfig } from "@/config/site";
import { characters } from "@/lib/data/content";
import { JsonLd } from "@/seo/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/seo/metadata";
import { pageTdk } from "@/seo/tdk";
import styles from "@/style/page/characters/characters.module.css";

export const metadata: Metadata = createPageMetadata(pageTdk.characters);

const jsonLd = [
  breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Characters", path: "/characters/" },
  ]),
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Narinig Mo Ba Characters — People Behind the Counter",
    description: metadata.description,
    mainEntityOfPage: new URL("/characters/", siteConfig.url).toString(),
  dateModified: "2026-09-11",
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
  },
];

export default function CharactersPage() {
  return (
    <main id="main-content">
      <JsonLd data={jsonLd} />
      <PageHero
        eyebrow="The people at the counter"
        title="Narinig Mo Ba Characters — People Behind the Counter"
        current="Characters"
        description="Meet the people who visit the store, what players learn from their conversations, and how their stories connect by the end."
      />

      <section className={styles.introSection}>
        <div className={`container ${styles.introGrid}`}>
          <div>
            <p className="eyebrow">Who comes to the counter</p>
            <h2>Names That Matter During the Shift</h2>
          </div>
          <div>
            <p>
              This page focuses on the people players actually meet during the shift, not an invented
              roster. Each card explains what that visit adds to the night and what becomes important later.
            </p>
            <p className={styles.artNotice}><Icon name="eye" size={20} /> Portraits are guide illustrations, not game art or screenshots.</p>
          </div>
        </div>
      </section>

      <section className={styles.cardsSection}>
        <div className={`container ${styles.characterGrid}`}>
          {characters.map((character, index) => (
            <article className={styles.characterCard} key={character.slug}>
              <div className={styles.imageWrap}>
                <Image src={character.image} alt={character.alt} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className={styles.cardBody}>
                <p>{character.role}</p>
                <h2>{character.name}</h2>
                <p className={styles.summary}>{character.summary}</p>
                <h3>At the counter</h3><p>{character.about}</p>
                <div className={styles.storyRole}><span>What changes later</span><p>{character.storyRole}</p></div>
              </div>
            </article>
          ))}

          <article className={`${styles.characterCard} ${styles.storekeeperCard}`}>
            <div className={styles.imageWrap}>
              <Image src="/images/home/store-interior.webp" alt="Guide illustration of the storekeeper's view from behind the counter" fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw" />
              <span>05</span>
            </div>
            <div className={styles.cardBody}>
              <p>Player viewpoint</p>
              <h2>The Storekeeper</h2>
              <p className={styles.summary}>The unnamed observer who serves the neighborhood and hears every fragment from behind the grille.</p>
              <h3>At the counter</h3>
              <p>You play the store owner. The counter keeps this character at the center of every conversation while the events outside remain just out of reach.</p>
              <div className={styles.storyRole}><span>What changes later</span><p>The storekeeper turns listening into player responsibility: how much can someone hear before remaining behind the counter becomes a choice?</p></div>
            </div>
          </article>
        </div>
      </section>

      <section className={styles.relationshipSection}>
        <div className="container">
          <div className={styles.headingRow}>
            <div><p className="eyebrow">Character relationships</p><h2>Everyone Passes the Same Counter</h2></div>
            <p>The storekeeper connects the cast. The stronger story connections emerge through what each visitor says about someone who is not present.</p>
          </div>
          <div className={styles.relationshipMap}>
            <div className={styles.centerNode}><Icon name="lantern" size={27} /><strong>The Storekeeper</strong><span>listens and responds</span></div>
            <div className={styles.connection} aria-hidden="true"><span /><span /><span /><span /></div>
            <div className={styles.nodes}>
              {characters.map((character) => <div key={character.slug}><strong>{character.name}</strong><span>{character.role}</span></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.storySection}>
        <div className={`container ${styles.storyGrid}`}>
          <div className={styles.storyImage}>
            <Image src="/images/home/story-lane.webp" alt="A dark Filipino neighborhood lane connecting the people in the story" fill sizes="(max-width: 768px) 100vw, 42vw" />
          </div>
          <div>
            <p className="eyebrow">Characters and the story</p>
            <h2>How the Characters Connect</h2>
            <p>
              Narinig Mo Ba? does not introduce its cast through formal biographies. It introduces them
              through purchases. A small order establishes age, money, habit, and familiarity before the
              conversation reveals anything that looks like plot. That structure makes the people feel like
              neighbors first and narrative evidence second.
            </p>
            <p>
              Junjun gives the game&apos;s tragedy a human center. Mare supplies the social current of gossip
              and becomes inseparable from the final change in tone. Axel and Layla help establish the store
              as an ordinary place used by children and adults for ordinary needs. The unnamed storekeeper
              receives all of these visits but never sees the entire neighborhood at once.
            </p>
            <p>
              The result is a story about partial knowledge. Each character knows something, assumes something,
              or repeats something. The player&apos;s job is not simply to decide who is reliable; it is to notice
              how many fragments can circulate through a community before someone recognizes an emergency.
            </p>
            <Link className="button button-primary" href="/story/">Read the full story <Icon name="arrow" size={18} /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
