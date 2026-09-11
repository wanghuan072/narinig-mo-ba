import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/common/Icon";
import { PageHero } from "@/components/common/PageHero";
import { siteConfig } from "@/config/site";
import { JsonLd } from "@/seo/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/seo/metadata";
import { pageTdk } from "@/seo/tdk";
import styles from "@/style/page/story/story.module.css";

export const metadata: Metadata = createPageMetadata(pageTdk.story);

const timeline = [
  {
    label: "The counter opens",
    text: "The game establishes its cozy disguise through familiar products, small purchases, and the work of serving neighbors.",
  },
  {
    label: "Regulars begin to talk",
    text: "Customer conversations turn the sari-sari store into the neighborhood's listening post. Gossip supplies context that the player cannot see directly.",
  },
  {
    label: "Details start to repeat",
    text: "Names, money, and strained relationships recur. What sounded casual begins to feel connected rather than accidental.",
  },
  {
    label: "The routine loses its safety",
    text: "The atmosphere, soundtrack, and behavior of familiar visitors change while the transaction loop remains recognizably ordinary.",
  },
  {
    label: "The final reveal reframes the night",
    text: "A tragic discovery and a frightening closing confrontation force the player to reinterpret the gossip that came before it.",
  },
];

const storyFaq = [
  ["What does “Narinig Mo Ba?” mean?", "It translates naturally as “Did you hear?” or “Have you heard?” The phrase is a common opening for gossip, which makes listening—and deciding what to believe—the game's central action."],
  ["Is the game based on a true story?", "The game is not presented as a retelling of one specific real event."],
  ["Does the game explain every character connection?", "No. The ending gives the story a clear tragic direction, but the short format leaves motives and some relationships open to interpretation."],
  ["Is there a supernatural explanation?", "The game never gives a settled supernatural answer. This guide reads the horror primarily as psychological and social: ordinary community knowledge becomes frightening when nobody acts on what they have heard."],
] as const;

const storyJsonLd = [
  breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Story", path: "/story/" },
  ]),
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Narinig Mo Ba Story Explained — Clues, Ending & Spoilers",
    description: metadata.description,
    mainEntityOfPage: new URL("/story/", siteConfig.url).toString(),
  dateModified: "2026-09-11",
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: storyFaq.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  },
];

export default function StoryPage() {
  return (
    <main id="main-content">
      <JsonLd data={storyJsonLd} />
      <PageHero
        eyebrow="Plot, clues & ending"
        title="Narinig Mo Ba Story Explained — Clues, Ending & Spoilers"
        current="Story"
        description="See how the gossip, repeated details, and final confrontation connect—and where the game deliberately leaves room for interpretation."
      />

      <section className={styles.warningSection}>
        <div className={`container ${styles.warning}`}>
          <Icon name="warning" size={29} />
          <div><strong>Ending spoilers</strong><p>This page discusses the final reveal, this guide&apos;s reading of Junjun&apos;s fate, and Mare&apos;s closing confrontation. Continue if you want the story explained directly.</p></div>
        </div>
      </section>

      <article className={styles.article}>
        <section className={styles.opening}>
          <div className="container">
            <div className={styles.openingGrid}>
              <div>
                <p className="eyebrow">The beginning</p>
                <h2>A Store That Hears Everything</h2>
                <p className="lead">
                  Narinig Mo Ba? begins as a cozy sari-sari store simulator and gradually reveals a
                  psychological-horror story. You chat with regulars, collect gossip, and piece together
                  a tragic truth after one desperate act sets off a chain reaction.
                </p>
                <p>
                  That premise gives the story its structure. The player does not investigate by walking
                  through a large map. The store is the viewpoint. Products, prices, payment, and small talk
                  keep you behind the counter while other people bring the wider neighborhood to you in fragments.
                </p>
              </div>
              <figure>
                <Image src="/images/home/store-interior.webp" alt="Original illustration of the view from inside a sari-sari store at night" fill sizes="(max-width: 768px) 100vw, 45vw" />
                <figcaption>Guide illustration — not an in-game screenshot</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className={styles.storeSection}>
          <div className={`container ${styles.twoColumns}`}>
            <div>
              <p className="eyebrow">The sari-sari store</p>
              <h2>Why the Counter Matters</h2>
              <p>
                A sari-sari store is both a shop and a social threshold. People stop for coffee, snacks,
                soap, and household necessities; they also stop to ask who has been seen, what happened
                next door, or whether someone has finally paid a debt. The game turns that ordinary closeness
                into its horror mechanism.
              </p>
              <p>
                The counter creates limited agency. You can serve, answer, and listen, but the grille keeps
                the player physically separate from the lives being discussed. One interpretation is that
                this distance mirrors the neighborhood&apos;s moral problem: people are close enough to hear
                danger, yet still able to treat it as somebody else&apos;s private business.
              </p>
            </div>
            <aside className={styles.receipt}>
              <span>Tonight&apos;s ledger</span>
              <p><b>Sold:</b> familiar things</p>
              <p><b>Received:</b> fragments of gossip</p>
              <p><b>Still owed:</b> a truthful answer</p>
              <small>Interpretive reading, not an in-game inventory</small>
            </aside>
          </div>
        </section>

        <section className={styles.timelineSection}>
          <div className="container">
            <div className={styles.headingRow}>
              <div><p className="eyebrow">Story timeline</p><h2>How the Night Changes</h2></div>
              <p>Follow the shift in order: the sales stay familiar while the meaning of each conversation starts to change.</p>
            </div>
            <ol className={styles.timeline}>
              {timeline.map((item, index) => (
                <li key={item.label}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div><h3>{item.label}</h3><p>{item.text}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className={styles.neighborhoodSection}>
          <Image src="/images/home/story-lane.webp" alt="An empty rain-darkened Filipino neighborhood lane under warm streetlights" fill sizes="100vw" />
          <div className={styles.neighborhoodShade} />
          <div className={`container ${styles.neighborhoodContent}`}>
            <p className="eyebrow">The neighborhood</p>
            <h2>Gossip Is the Map</h2>
            <p>
              Narinig Mo Ba? reveals its world socially rather than geographically. The regulars describe
              people and problems beyond the storefront. Because every account is partial, the player has
              to notice repetition: who is mentioned again, which story changes, and when a casual complaint
              begins to sound like evidence of harm.
            </p>
            <p>
              The game&apos;s title turns listening into a question rather than a guarantee. Hearing something
              does not mean understanding it. Repeating it does not mean helping. That tension between knowledge,
              rumor, and responsibility is more important than identifying a conventional monster.
            </p>
          </div>
        </section>

        <section className={styles.cluesSection}>
          <div className="container">
            <p className="eyebrow">Important clues</p>
            <h2>What the Game Asks You to Notice</h2>
            <div className={styles.clueGrid}>
              <article><Icon name="message" size={25} /><h3>Repeated names</h3><p>When the same person appears in separate conversations, compare the speakers&apos; assumptions instead of accepting one account.</p></article>
              <article><Icon name="coins" size={25} /><h3>Money and debt</h3><p>Notice every remark about money, debt, and pressure. They gain weight as the final scene comes into view.</p></article>
              <article><Icon name="sound" size={25} /><h3>Changes in sound</h3><p>The soundtrack and ambient cues shift before the visual climax, warning that the familiar routine is no longer safe.</p></article>
              <article><Icon name="eye" size={25} /><h3>The final expression</h3><p>Mare&apos;s final expression punctures the cozy tone and turns the familiar counter into something unsettling.</p></article>
            </div>
          </div>
        </section>

        <section id="ending-explained" className={styles.endingSection}>
          <div className={`container ${styles.endingGrid}`}>
            <div>
              <p className="eyebrow">Ending explained</p>
              <h2>Narinig Mo Ba Ending Explained</h2>
              <p className="lead">
                The ending turns the evening&apos;s gossip into a real tragedy rather than an invented neighborhood scare.
                This guide reads the final body reveal as suggesting Junjun&apos;s death and the confrontation with Mare
                as pointing toward her involvement.
              </p>
              <p>
                The game gives us a desperate act, a chain reaction, and a tragic truth, but not a
                scene-by-scene account of who did what. That is this guide&apos;s interpretation, not a statement from
                the creators; the ending leaves motive and responsibility for players to piece together from dialogue.
              </p>
              <p>
                One interpretation is that the true horror is communal. The neighbors have heard pieces of the
                problem—poverty, pressure, debt, and danger—but those pieces circulate as gossip until the result
                can no longer be ignored. The storekeeper, like the player, stands close enough to listen and still
                remains behind a barrier. The ending makes that comfortable distance feel morally unstable.
              </p>
            </div>
            <aside>
              <span>What the game makes clear</span>
              <ul>
                <li>The game is a psychological horror story disguised as a store simulator.</li>
                <li>A desperate act of survival starts a chain reaction.</li>
                <li>The player pieces together a tragic, whispered truth.</li>
              </ul>
              <span>Questions it leaves open</span>
              <ul>
                <li>The exact chain of responsibility surrounding Junjun.</li>
                <li>Whether every unsettling moment is literal, psychological, or stylized.</li>
                <li>How much the other neighbors understood before the final night.</li>
              </ul>
            </aside>
          </div>
        </section>

        <section className={styles.faqSection}>
          <div className={`container ${styles.faqGrid}`}>
            <div><p className="eyebrow">Story questions</p><h2>What&apos;s Said—and What Isn&apos;t</h2><p>These answers separate what the game shows from the questions it leaves behind.</p></div>
            <div>
              {storyFaq.map(([question, answer], index) => (
                <details key={question} open={index === 0}><summary>{question}<span>+</span></summary><p>{answer}</p></details>
              ))}
            </div>
          </div>
        </section>
      </article>

      <section className={styles.related}>
        <div className="container">
          <div><p className="eyebrow">Related content</p><h2>Return to the Store</h2></div>
          <div>
            <Link href="/walkthrough/"><strong>Walkthrough</strong><span>Complete the store routine</span><Icon name="arrow" size={19} /></Link>
            <Link href="/characters/"><strong>Characters</strong><span>Meet the neighborhood</span><Icon name="arrow" size={19} /></Link>
            <Link href="/guides/controls/"><strong>Controls</strong><span>Solve input problems</span><Icon name="arrow" size={19} /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
