import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/common/Icon";
import { PageHero } from "@/components/common/PageHero";
import { siteConfig } from "@/config/site";
import { JsonLd } from "@/seo/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/seo/metadata";
import { pageTdk } from "@/seo/tdk";
import styles from "@/style/page/walkthrough/walkthrough.module.css";

export const metadata: Metadata = createPageMetadata(pageTdk.walkthrough);

const sections = [
  ["overview", "Overview"],
  ["before-you-start", "Before You Start"],
  ["how-to-play", "How to Play"],
  ["customer-orders", "Customer Orders"],
  ["important-clues", "Important Clues"],
  ["story-events", "Story Events"],
  ["ending", "Ending"],
] as const;

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Narinig Mo Ba Walkthrough — Orders, Controls & Story Progress",
  description: metadata.description,
  mainEntityOfPage: new URL("/walkthrough/", siteConfig.url).toString(),
  dateModified: "2026-09-11",
  author: { "@type": "Organization", name: siteConfig.name },
  publisher: { "@type": "Organization", name: siteConfig.name },
};

export default function WalkthroughPage() {
  return (
    <main id="main-content">
      <JsonLd data={[
        breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Walkthrough", path: "/walkthrough/" },
        ]),
        articleJsonLd,
      ]} />
      <PageHero
        eyebrow="Walkthrough guide"
        title="Narinig Mo Ba Walkthrough — Complete Every Order"
        current="Walkthrough"
        description="Work through each sale in order, fix common mistakes, and see how the counter routine carries the story forward."
      />

      <div className={`container ${styles.layout}`}>
        <aside className={styles.sidebar}>
          <nav aria-label="Walkthrough sections">
            <p>On this page</p>
            {sections.map(([href, label], index) => (
              <a key={href} href={`#${href}`}><span>{String(index + 1).padStart(2, "0")}</span>{label}</a>
            ))}
          </nav>
          <div className={styles.factCard}>
            <p>Playing the current release</p>
            <dl>
              <div><dt>Genre</dt><dd>Visual novel / horror</dd></div>
              <div><dt>Format</dt><dd>Short story game</dd></div>
              <div><dt>Input</dt><dd>Mouse focused</dd></div>
              <div><dt>Platform</dt><dd>HTML5, Windows, Linux</dd></div>
            </dl>
          </div>
          <p className={styles.sideNote}>A simple store.<br />A story told in what people almost say.</p>
        </aside>

        <article className={styles.article}>
          <section id="overview">
            <p className="eyebrow">Start here</p>
            <h2>Overview</h2>
            <p className="lead">
              Narinig Mo Ba? teaches its mechanics through the work of running a sari-sari store.
              Listen to a request, locate the product, check its price, take payment, and return the
              correct change. The routine is also the story: each customer brings another fragment of
              neighborhood gossip, and the meaning of those fragments changes as the evening darkens.
            </p>
            <p>
              The game teaches you by asking you to work the counter. Take your time with the first
              request, watch for the prompt on screen, and use this page when you need a reminder—not
              as a substitute for the conversations that make the story work.
            </p>
            <figure className={styles.wideFigure}>
              <Image src="/images/home/store-interior.webp" alt="Guide illustration of a sari-sari store counter at night" fill sizes="(max-width: 768px) 100vw, 70vw" />
              <figcaption>Guide illustration — the counter is where work and story meet.</figcaption>
            </figure>
          </section>

          <section id="before-you-start" className={styles.paperSection}>
            <p className="eyebrow eyebrow-dark">Quick start</p>
            <h2>Before You Start</h2>
            <div className={styles.tipGrid}>
              <div><span>01</span><h3>Read carefully</h3><p>Let each request and dialogue line finish before clicking.</p></div>
              <div><span>02</span><h3>Use a mouse</h3><p>The current build relies on left click, held click, and right click.</p></div>
              <div><span>03</span><h3>Check the item</h3><p>Similar packaging can make a hurried selection look correct.</p></div>
              <div><span>04</span><h3>Keep sound on</h3><p>The score and ambient changes help signal the story&apos;s turn.</p></div>
            </div>
          </section>

          <section id="how-to-play">
            <p className="eyebrow">The store routine</p>
            <h2>Step-by-Step Walkthrough</h2>

            <div className={styles.stepBlock}>
              <span>Step 1</span>
              <div>
                <h3>Start the game and give it focus</h3>
                <p>
                  Read the player information on the home page before using this walkthrough. Click once inside the game before interacting.
                  If the first screen remains black, allow the current loading sequence to finish; if it
                  does not recover, use the control notes in the <Link href="/guides/controls/">Controls Guide</Link>.
                </p>
              </div>
            </div>

            <div className={styles.stepBlock}>
              <span>Step 2</span>
              <div>
                <h3>Finish the conversation before leaving the counter</h3>
                <p>
                  Customers deliver both the order and the story. Read the requested product and quantity,
                  then choose any visible dialogue response required to continue. Rapidly trying to move
                  views while a line or transition is still active is a common reason the scene seems stuck.
                </p>
              </div>
            </div>

            <div className={styles.stepBlock}>
              <span>Step 3</span>
              <div>
                <h3>Find and verify the requested item</h3>
                <p>
                  Move from the counter to the appropriate shelf view. A left click takes or drops an item,
                  holding right click checks the selected item&apos;s price, and
                  holding left click over its matching shelf position returns a mistaken item. On-screen
                  prompts take precedence if an update changes these inputs.
                </p>
              </div>
            </div>

            <div className={styles.stepBlock}>
              <span>Step 4</span>
              <div>
                <h3>Complete the sale and calculate change</h3>
                <p>
                  Bring the correct product back to the counter and hand it over. Add the item prices to
                  get the total, then subtract that total from the payment placed in front of you. Select
                  bills and coins that add up to the exact difference. If the game will not accept a
                  denomination, try a smaller one that does not exceed the amount still left to return.
                </p>
                <div className={styles.formula}><span>Payment</span><b>−</b><span>Order total</span><b>=</b><strong>Change</strong></div>
              </div>
            </div>

            <div className={styles.stepBlock}>
              <span>Step 5</span>
              <div>
                <h3>Listen, reset, and continue the shift</h3>
                <p>
                  After a correct transaction, stay with the conversation until the customer leaves and the
                  next transition completes. The game advances through a sequence of visits rather than a
                  free-roaming level. Look for changes in sound, phrasing, and familiar faces instead of
                  searching for a combat objective or a hidden inventory screen.
                </p>
              </div>
            </div>
          </section>

          <section id="customer-orders">
            <p className="eyebrow">Orders without guesswork</p>
            <h2>Customer Orders</h2>
            <p>
              Junjun&apos;s small coffee request is a useful opening example. Use it
              to learn the complete loop: identify the product, take it from the shelf, verify its price,
              return to the counter, and finish the transaction. Later requests add products or quantities,
              but the same sequence applies.
            </p>
            <div className={styles.orderCard}>
              <div className={styles.orderImage}>
                <Image src="/images/guides/read-order.webp" alt="Illustrated handwritten shop order with product symbols" fill sizes="(max-width: 768px) 100vw, 28vw" />
              </div>
              <div>
                <span>First-sale example</span>
                <h3>Junjun&apos;s first request</h3>
                <ol>
                  <li>Wait for the request to finish.</li>
                  <li>Move to the shelf that holds the requested product.</li>
                  <li>Take one matching item and verify it before returning.</li>
                  <li>Complete the payment step and let the dialogue continue.</li>
                </ol>
                <p>This is a navigation example, not a fixed price sheet. Check the value shown in your game.</p>
              </div>
            </div>
          </section>

          <section id="important-clues" className={styles.clueSection}>
            <div className={styles.clueIcon}><Icon name="eye" size={28} /></div>
            <div>
              <p className="eyebrow">Story clues</p>
              <h2>Important Story Clues</h2>
              <p>
                Treat repeated names, references to debts, changes in how regular customers speak, and shifts
                in the soundtrack as narrative evidence. The game points toward a desperate act of survival
                and its consequences, but leaves you to hear the full shape of that truth as the shift unfolds.
                Let the final sequence supply the answer before reading the full Story page.
              </p>
            </div>
          </section>

          <section id="story-events">
            <p className="eyebrow">Progressing the narrative</p>
            <h2>Story Events</h2>
            <p>
              You do not need to hunt for optional combat encounters or collect a separate lore archive.
              Progress comes from completing the current sale, choosing a visible response, and allowing the
              scene to finish. If nothing appears to happen, first check that you have supplied the exact
              quantity and exact change; then wait for the audio or dialogue transition instead of clicking rapidly.
            </p>
            <p>
              The store&apos;s visual routine is intentionally repetitive. What matters is the difference between
              one visit and the next: a new concern, a familiar rumor repeated with a different meaning, or an
              environmental cue that makes the same counter feel less comfortable.
            </p>
          </section>

          <section id="ending">
            <p className="eyebrow">Final sequence</p>
            <h2>Reaching the Ending</h2>
            <p>
              Finish the remaining customer sequence and stay through the last transition. The game does not
              present a secret-route checklist or a separate ending path. If you want the final reveal interpreted
              after you see it, continue to the
              spoiler-heavy <Link href="/story/#ending-explained">ending explanation</Link>.
            </p>
          </section>

          <section className={styles.mistakes}>
            <div><Icon name="warning" size={27} /><h2>Common Mistakes &amp; Fixes</h2></div>
            <ul>
              <li><strong>Clicking too early:</strong> wait for the current line or transition to finish.</li>
              <li><strong>Taking a similar item:</strong> use the price check before handing it over.</li>
              <li><strong>Keeping a wrong product:</strong> hold left click over its matching shelf slot to return it.</li>
              <li><strong>Incorrect change:</strong> recalculate the exact difference rather than matching the payment total.</li>
              <li><strong>Missing the story:</strong> do not treat dialogue as a delay between store tasks.</li>
            </ul>
          </section>
        </article>
      </div>

      <section className={styles.related}>
        <div className="container">
          <p className="eyebrow">Keep listening</p><h2>Related Guides</h2>
          <div>
            <Link href="/guides/controls/"><Icon name="mouse" size={25} /><span><strong>Controls Guide</strong><small>Every currently documented input.</small></span><Icon name="arrow" size={18} /></Link>
            <Link href="/story/"><Icon name="book" size={25} /><span><strong>Story Explained</strong><small>Plot, clues, and interpretation.</small></span><Icon name="arrow" size={18} /></Link>
            <Link href="/characters/"><Icon name="message" size={25} /><span><strong>Characters</strong><small>The people behind the counter talk.</small></span><Icon name="arrow" size={18} /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
