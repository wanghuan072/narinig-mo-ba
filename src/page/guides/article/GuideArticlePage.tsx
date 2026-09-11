import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/common/Icon";
import { JsonLd } from "@/seo/JsonLd";
import { breadcrumbJsonLd } from "@/seo/metadata";
import { siteConfig } from "@/config/site";
import { guideArticles, type GuideSlug } from "@/lib/data/content";
import { articleTdk } from "@/seo/tdk";
import styles from "@/style/page/guides/article.module.css";

function ControlsArticle() {
  return <>
    <p>The shop work in Narinig Mo Ba is deliberately simple: listen, choose, check, and hand the order over. What makes an early shift feel awkward is not the number of inputs, but trying to do each step before the game is ready for it. Give yourself a moment to see what is selected before making the next move.</p>
    <p>Use a desktop browser and mouse when you can. Click once inside the game window before the first customer so it has focus. The interface may change as the game is updated, so an in-game prompt always takes priority over a guide written for an earlier build.</p>
    <h2 id="before-you-start">Set up for a calm first order</h2>
    <p>Keep the game window large enough to read its prompts without squinting. Turn the sound on if possible: dialogue and ambient changes are part of the rhythm, and muting them can make it easier to click through a transition too quickly. You do not need to memorize the whole store on the first visit. Learn one shelf, one item, and one interaction at a time.</p>
    <h2 id="quick-controls">The controls you&apos;ll use most</h2>
    <div className={styles.controlList}>
      <div><strong>Left click</strong><span>Pick up an item, use a counter target, or choose a dialogue response.</span></div>
      <div><strong>Hold left click</strong><span>Return a selected product to its matching shelf position when you chose the wrong item.</span></div>
      <div><strong>Hold right click</strong><span>Check a selected product&apos;s price before you finish the order.</span></div>
      <div><strong>View control</strong><span>Follow the on-screen prompt when changing store views; versions can present this differently.</span></div>
    </div>
    <h2 id="working-with-items">Work with one item at a time</h2>
    <p>Most early mistakes happen when an item is picked up before the order is fully understood. Listen to the request, note the item and quantity, then select the product. If it is wrong, return it before looking for a replacement. This keeps the counter readable and makes a correction feel routine rather than stressful.</p>
    <p>There is no advantage in collecting several possible products at once. A cleaner approach is to finish one request in sequence: identify the product, choose it, confirm its price, and only then move toward payment. If two packages look alike, stop at the shelf and compare the requested type rather than relying on colour or the first word you remember.</p>
    <figure className={styles.inlineImage}><Image src="/images/guides/find-items.webp" alt="Illustrated shelf of generic snacks, coffee, and household items" fill sizes="(max-width: 768px) 100vw, 720px" /><figcaption>Guide illustration: compare the product request before choosing from a crowded shelf.</figcaption></figure>
    <h2 id="order-routine">Use the same order routine each time</h2>
    <ol className={styles.steps}>
      <li><strong>Let the request finish.</strong><span>Take in the item and quantity before leaving the counter. The dialogue is not just decoration; it is the clearest record of what the customer asked for.</span></li>
      <li><strong>Choose one product.</strong><span>Move to the relevant shelf, select the closest match, and check that it is the item you meant to take.</span></li>
      <li><strong>Confirm the value.</strong><span>Use the price check before doing the arithmetic. It is quicker to verify once than to rebuild a transaction after the payment is in hand.</span></li>
      <li><strong>Finish before the next action.</strong><span>Wait for the handover or dialogue change to complete. Repeated clicks during a transition are more likely to confuse the sequence than speed it up.</span></li>
    </ol>
    <h2 id="price-checks">Check the price before you count</h2>
    <p>Price checking is useful whenever you are not certain of a product&apos;s value. Check each selected item first, add those prices into one order total, then subtract that total from what the customer paid. Treat the money handed to you as payment, not as the change you need to give back.</p>
    <p>A useful mental check is to ask whether the answer is sensible before you hand it over. When the payment is only a little higher than the total, the change should also be small. When the payment is much higher, take a second look at both the total and the note or coins you were given. This catches many rushed mistakes without turning the moment into a math test.</p>
    <h2 id="story-beat">The routine is part of the story</h2>
    <p>The store loop is not separate from the plot. Each completed order keeps you behind the counter long enough to hear the neighborhood speak around you. Familiar names, money worries, and strained relationships return in different conversations. Do not treat that dialogue as filler: it is how the game lets you assemble the larger situation while you are busy doing ordinary work.</p>
    <p>Later, the same careful pace helps the tonal shift land. A customer can still be asking for something small while the sound, wording, or atmosphere tells you the night is no longer ordinary. Finish the transaction, then take in the change around it. The story does not ask you to solve a separate puzzle; it asks you to notice how much the routine has changed.</p>
    <h2 id="when-inputs-feel-stuck">When an input feels stuck</h2>
    <p>First, wait for dialogue or a scene change to finish. Then click once inside the player and try the action shown on screen. If a selected item will not behave as expected, return it, give the interface a moment to settle, and repeat the current stage rather than continuing with a half-finished order. Refreshing the page is a last resort, not the first fix.</p>
    <div className={styles.callout}><Icon name="mouse" size={22} /><p><strong>Keep the rhythm, not the speed.</strong> A short pause to check the selected item or the change is part of playing well. Narinig Mo Ba is more rewarding when the routine feels deliberate.</p></div>
  </>;
}

function BeginnerArticle() {
  return <>
    <p>Narinig Mo Ba starts as a familiar piece of shop work. That simplicity is the point. Take the opening at a measured pace and the controls, prices, and conversations will become easier to follow without flattening the mood.</p>
    <p>Think of the first shift as learning a small routine, not clearing a difficult challenge. You are allowed to pause between parts of an order, check a value again, or return an item. Those small corrections help the store make sense and leave more room to notice what each visitor is saying.</p>
    <h2 id="settle-in">Settle into the store first</h2>
    <p>Before trying to be quick, get familiar with the counter, the shelf views, and the way the game signals that an action has finished. Let the opening conversation play out. Notice where an order is communicated, where an item is shown once selected, and when the game expects the next step. This first minute makes later requests feel less like guesswork.</p>
    <h2 id="first-order">Handle the first order in four beats</h2>
    <ol className={styles.steps}>
      <li><strong>Hear the whole request.</strong><span>Wait until the customer has finished. Keep the product name and quantity together in your head.</span></li>
      <li><strong>Find and verify the item.</strong><span>Similar packaging can make a rushed choice feel right. Compare the type and the amount before moving on.</span></li>
      <li><strong>Check prices, then total them.</strong><span>Use the price check whenever you need it. Add every item in the request before touching the change.</span></li>
      <li><strong>Give back the difference.</strong><span>Payment minus the full total equals the exact change. Pause if the remaining amount does not look right.</span></li>
    </ol>
    <p>When an order includes more than one item, complete the same check for every product before switching to the payment. It is tempting to calculate while you are still searching, but separating the shelf step from the counter step makes it much easier to spot a missing quantity or a look-alike item.</p>
    <figure className={styles.inlineImage}><Image src="/images/guides/give-change.webp" alt="Illustrated hands returning coins and notes as change" fill sizes="(max-width: 768px) 100vw, 720px" /><figcaption>Guide illustration: give change only after the whole order has been counted.</figcaption></figure>
    <h2 id="slow-down-at-change">Slow down at the change</h2>
    <p>The calculation is simple, but it is the part most affected by hurry. Start from the customer&apos;s payment, take away the complete order total, and only then choose the amount to give back. Do not use the price of the final item as the total, and do not let the look of a large note persuade you that the change must be large.</p>
    <p>If your answer feels wrong, run the order again from the start: item prices first, total second, payment third, change last. Rechecking the sequence takes only a few seconds and is more reliable than trying to rescue the number in your head.</p>
    <h2 id="small-habits">Small habits that help</h2>
    <ul className={styles.tipList}>
      <li>Use a desktop mouse if you can. The game is most comfortable when you have a precise pointer for shelves and counter actions.</li>
      <li>Let dialogue and scene changes finish before making another input.</li>
      <li>Read the item and quantity as a pair; remembering only one is how a near-match slips in.</li>
      <li>Check a price before committing to the total, especially when you are unsure.</li>
      <li>Keep the sound on. Shifts in tone are part of how the game sets its pace.</li>
      <li>Finish once before opening story or ending explanations if you want the reveal unspoiled.</li>
    </ul>
    <h2 id="when-stuck">When an order feels stuck</h2>
    <p>Stop and identify where the loop broke: the requested item, the selected item, the price, or the remaining change. Rechecking one stage is faster than guessing at all of them. If the player has stopped responding, make sure the game window has focus, wait for any transition to finish, and try the current prompt again.</p>
    <p>If you still cannot see what went wrong, return to the customer&apos;s request and rebuild the transaction in order. This is kinder to a first playthrough than looking up a story explanation or jumping to a spoiler-heavy walkthrough. The satisfaction is in recognizing the routine for yourself.</p>
    <h2 id="protect-the-first-playthrough">Protect the first playthrough</h2>
    <p>If you prefer to discover the final turn alone, stop here. If not, the practical rhythm above also explains why the ending works: you have spent the whole game learning to treat the counter as safe and the neighborhood chatter as background.</p>
    <h2 id="ending-context">What the ending changes</h2>
    <p><strong>Full story spoilers:</strong> this guide reads the final reveal as suggesting Junjun&apos;s death and turning the gossip heard during the shift into something far more serious. It also reads Mare&apos;s closing confrontation as pointing toward her involvement, while the exact chain of responsibility remains open for players to piece together from the dialogue. The horror is not just the final image; it is the realization that the neighborhood had been passing around fragments of a real crisis.</p>
    <p>That is why listening matters even when an order feels routine. The game connects prices, payments, and quiet conversations to questions of pressure, debt, and responsibility. It does not give every motive a neat answer, but it gives enough for the player to understand that the people behind the stories were never just background color.</p>
    <div className={styles.callout}><Icon name="sound" size={22} /><p><strong>Listen between sales.</strong> The work loop is only half the experience. Let conversations and the changing atmosphere breathe instead of treating them as delays between orders.</p></div>
  </>;
}

export function GuideArticlePage({ slug }: { slug: GuideSlug }) {
  const article = guideArticles[slug];
  const seo = articleTdk[slug];
  const sections = slug === "controls"
    ? [["Before you start", "before-you-start"], ["Quick controls", "quick-controls"], ["Working with items", "working-with-items"], ["Order routine", "order-routine"], ["Price checks", "price-checks"], ["Story beat", "story-beat"], ["When inputs feel stuck", "when-inputs-feel-stuck"]]
    : [["Settle in", "settle-in"], ["First order", "first-order"], ["Change", "slow-down-at-change"], ["Small habits", "small-habits"], ["When stuck", "when-stuck"], ["First playthrough", "protect-the-first-playthrough"], ["Ending context", "ending-context"]];
  const jsonLd = [
    breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Guides", path: "/guides/" }, { name: article.title, path: seo.path }]),
    { "@context": "https://schema.org", "@type": "Article", headline: article.title, description: seo.description, mainEntityOfPage: new URL(seo.path, siteConfig.url).toString(), author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, dateModified: seo.updated },
  ];

  return <main id="main-content">
    <JsonLd data={jsonLd} />
    <section className={styles.articleHeader}>
      <div className={`container ${styles.headerGrid}`}>
        <div className={styles.headerCopy}>
          <Link className={styles.backLink} href="/guides/"><Icon name="arrow" size={16} /> All guides</Link>
          <p className="eyebrow">{article.label}</p><h1>{article.title}</h1><p>{article.description}</p>
          <div className={styles.articleMeta}><span>{article.readTime}</span><span>Player guide</span></div>
        </div>
        <figure className={styles.articleCover}>
          <Image src={article.image} alt={article.alt} fill sizes="(max-width: 768px) 100vw, 45vw" preload />
          <figcaption>Guide illustration</figcaption>
        </figure>
      </div>
    </section>
    <article className={styles.article}>
      <div className={`container ${styles.articleGrid}`}>
        <aside className={styles.contents}><p>In this guide</p><nav>{sections.map(([label, id]) => <a href={`#${id}`} key={id}>{label}</a>)}</nav></aside>
        <div className={styles.body}>{slug === "controls" ? <ControlsArticle /> : <BeginnerArticle />}</div>
      </div>
    </article>
    <section className={styles.next}><div className="container"><p className="eyebrow">Keep reading</p><h2>{slug === "controls" ? "Ready for the first shift?" : "Need a control reminder?"}</h2><Link className="button button-primary" href={slug === "controls" ? "/guides/beginner-tips/" : "/guides/controls/"}>{slug === "controls" ? "Read beginner tips" : "Read controls guide"} <Icon name="arrow" size={18} /></Link></div></section>
  </main>;
}
