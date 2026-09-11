import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { GamePlayer } from "@/components/common/GamePlayer";
import { Icon } from "@/components/common/Icon";
import { siteConfig } from "@/config/site";
import { characters, guideCards } from "@/lib/data/content";
import { JsonLd } from "@/seo/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/seo/metadata";
import { pageTdk, siteTdk } from "@/seo/tdk";
import styles from "@/style/page/home/home.module.css";

export const metadata: Metadata = createPageMetadata(pageTdk.home);

const steps = [
  { number: "01", title: "Read the Order", text: "Let the customer finish speaking and identify the exact item and quantity.", image: "/images/guides/read-order.webp", alt: "Illustrated handwritten sari-sari store order" },
  { number: "02", title: "Find the Items", text: "Move to the shelves, locate the correct product, and pick it up with a left click.", image: "/images/guides/find-items.webp", alt: "Illustrated shelves of generic sari-sari store products" },
  { number: "03", title: "Check the Price", text: "Use the current build's price-check input before calculating the order total.", image: "/images/guides/check-price.webp", alt: "Illustrated calculator and price tags on a shop counter" },
  { number: "04", title: "Give Correct Change", text: "Subtract the total from the customer's payment and return the exact difference.", image: "/images/guides/give-change.webp", alt: "Illustrated hands returning coins and notes as change" },
];

const faq = [
  {
    question: "What is Narinig Mo Ba?",
    answer: "Narinig Mo Ba? is a short Filipino visual novel with shop-work mechanics and psychological horror. You serve customers at a sari-sari store while ordinary neighborhood conversations become increasingly unsettling.",
  },
  {
    question: "Where should I play Narinig Mo Ba?",
    answer: "Use Play Now at the top of this page to load the browser build in place. This independent guide does not provide a download or represent the game’s creators.",
  },
  {
    question: "What type of game is it?",
    answer: "It combines a visual novel, a light working simulator, and psychological horror. You serve customers, handle products and change, choose dialogue responses, and listen for clues in the neighborhood's conversations.",
  },
  {
    question: "How do I control the current build?",
    answer: "Mouse is listed as the supported input. The control notes in this guide reflect player observations, but the current in-game prompt should always take priority if an update changes an action.",
  },
  {
    question: "Does it fully support phones and touchscreens?",
    answer: "Not yet. The creators stated on September 4, 2026 that full mobile support was still being worked on. A desktop browser with a mouse is the safest recommendation for the present build.",
  },
  {
    question: "Do the guides explain the ending?",
    answer: "Yes. The walkthrough covers the store routine and common sticking points. The Story page and the longer guides discuss character connections, the final reveal, and ending spoilers directly.",
  },
];

const homeJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: new URL(siteTdk.logo, siteConfig.url).toString(),
    },
  },
  breadcrumbJsonLd([{ name: "Home", path: "/" }]),
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  },
];

export default function HomePage() {
  return (
    <main id="main-content">
      <JsonLd data={homeJsonLd} />

      <section className={styles.hero}>
        <Image
          className={styles.heroImage}
          src="/images/home/hero.webp"
          alt="A warmly lit sari-sari store on a quiet Filipino neighborhood street at night"
          fill
          sizes="100vw"
          preload
        />
        <div className={styles.heroShade} />
        <div className={`container ${styles.heroInner}`}>
          <div id="play" className={styles.heroPlayer}>
            <GamePlayer />
          </div>
          <div className={styles.gameCaption}>
            <div>
              <p className="eyebrow">A Filipino psychological horror game</p>
              <h1>Play Narinig Mo Ba Online</h1>
              <p className={styles.captionCopy}>
                Start the browser game above. When an order, price, or story detail holds you up, the walkthrough and guides are ready below.
              </p>
            </div>
            <div className={styles.captionActions}>
              <span>Play in your browser</span>
              <Link href="/walkthrough/">Need help with an order? Read the walkthrough <Icon name="arrow" size={17} /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.aboutSection}>
        <div className={`container ${styles.aboutGrid}`}>
          <figure className={styles.photoFrame}>
            <Image
              src="/images/home/store-interior.webp"
              alt="Original illustration looking out from a stocked sari-sari store at night"
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
            />
            <figcaption>Inside the counter · guide illustration</figcaption>
          </figure>
          <div className={styles.aboutCopy}>
            <p className="eyebrow">The game and this guide</p>
            <h2>What You&apos;ll Find Here</h2>
            <p>
              Narinig Mo Ba? puts you behind a sari-sari store counter. At first, the job is straightforward:
              listen to the request, find the item, check the price, and give the right change.
            </p>
            <p>
              Customers also bring the neighborhood with them. Their conversations make the store feel lived in,
              then gradually make it clear that the routine is not as harmless as it first appears.
            </p>
            <p>
              This is an independent player guide, not the game&apos;s official site. Use it for controls, orders,
              change, characters, and a full-spoiler explanation of the ending.
            </p>
            <div className="tag-list" aria-label="Game genres">
              <span>Psychological horror</span><span>Store simulator</span><span>Filipino setting</span><span>Story driven</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.howSection}>
        <div className="container">
          <div className={styles.sectionHeading}>
            <div><p className="eyebrow eyebrow-dark">How to play</p><h2>How to Play Narinig Mo Ba</h2></div>
            <p>It starts simply: read the request, find the item, check the price, and give the correct change.</p>
          </div>
          <div className={styles.stepsGrid}>
            {steps.map((step) => (
              <article className={styles.stepCard} key={step.number}>
                <div className={styles.stepImage}>
                  <Image src={step.image} alt={step.alt} fill sizes="(max-width: 768px) 100vw, 25vw" />
                </div>
                <div className={styles.stepTitle}><span>{step.number}</span><h3>{step.title}</h3></div>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
          <Link className={styles.paperLink} href="/guides/">View full guides <Icon name="arrow" size={18} /></Link>
        </div>
      </section>

      <section className={styles.storySection}>
        <Image className={styles.storyImage} src="/images/home/story-lane.webp" alt="An empty Filipino neighborhood lane after rain at night" fill sizes="100vw" />
        <div className={styles.storyShade} />
        <div className={`container ${styles.storyContent}`}>
          <p className="eyebrow">The story</p>
          <h2>Something Is Wrong<br />in the Neighborhood</h2>
          <p>
            Ordinary customers bring ordinary requests, but every conversation reveals another piece
            of the neighborhood. The more you listen, the harder it becomes to ignore what is really happening.
          </p>
          <div className={styles.storyActions}>
            <Link className="button button-primary" href="/story/">Read the Story <Icon name="arrow" size={18} /></Link>
            <Link className="text-link" href="/walkthrough/">View Walkthrough <Icon name="arrow" size={17} /></Link>
          </div>
          <span className={styles.storyNote}>No monsters in the street. Just questions at the counter.</span>
        </div>
      </section>

      <section className={styles.charactersSection}>
        <div className="container">
          <div className={styles.sectionHeadingDark}>
            <div><p className="eyebrow">Characters</p><h2>People You&apos;ll Meet</h2></div>
            <div>
              <p>A guide to the people whose visits and conversations shape the shift.</p>
              <Link className="text-link" href="/characters/">View all characters <Icon name="arrow" size={17} /></Link>
            </div>
          </div>
          <div className={styles.characterGrid}>
            {characters.map((character) => (
              <article className={styles.characterCard} key={character.slug}>
                <div className={styles.characterImage}>
                  <Image src={character.image} alt={character.alt} fill sizes="(max-width: 768px) 100vw, 25vw" />
                  <span>Guide illustration</span>
                </div>
                <div className={styles.characterBody}>
                  <p>{character.role}</p><h3>{character.name}</h3><span>{character.summary}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.guidesSection}>
        <div className="container">
          <div className={styles.sectionHeadingDark}>
            <div><p className="eyebrow">Guides</p><h2>Help for the Whole Shift</h2></div>
            <p>Learn the controls, finish the orders, and follow the story through to its ending.</p>
          </div>
          <div className={styles.guideGrid}>
            {guideCards.map((guide) => (
              <Link className={styles.guideCard} href={guide.href} key={guide.title}>
                <div className={styles.guideImage}><Image src={guide.image} alt="" fill sizes="(max-width: 768px) 100vw, 25vw" /></div>
                <div><h3>{guide.title}</h3><p>{guide.description}</p><Icon name="arrow" size={19} /></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className={`container ${styles.faqGrid}`}>
          <div className={styles.faqIntro}>
            <p className="eyebrow">Questions at the counter</p>
            <h2>Narinig Mo Ba FAQ</h2>
            <p>Useful answers before you return to a difficult order or revisit a story clue.</p>
            <span className={styles.paperNote}>“Huy, Mare! Narinig mo ba?”</span>
          </div>
          <div className={styles.faqList}>
            {faq.map((item, index) => (
              <details key={item.question} open={index === 0}>
                <summary>{item.question}<span aria-hidden="true">+</span></summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
