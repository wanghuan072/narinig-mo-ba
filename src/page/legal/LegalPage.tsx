import Link from "next/link";
import { JsonLd } from "@/seo/JsonLd";
import { breadcrumbJsonLd } from "@/seo/metadata";
import { legalTdk, siteTdk } from "@/seo/tdk";
import styles from "@/style/page/legal/legal.module.css";

type LegalPageKey = keyof typeof legalTdk;

const legalContent = {
  privacy: {
    label: "Legal",
    heading: "Privacy Policy",
    intro: "This policy explains the limited information handled when you browse Narinig Mo Ba Guide. It applies to narinigmoba.live and was last updated on September 11, 2026.",
    sections: [
      ["Information handled while you browse", "This site is a read-only fan guide. We do not offer accounts, comments, payments, newsletters, or contact forms. Like most websites, the hosting service may process basic technical details such as IP address, browser type, device information, referring page, and the pages requested. These details help deliver the site, protect it from abuse, and understand whether pages are working."],
      ["Cookies and similar storage", "The site may use essential browser storage needed for normal delivery, accessibility preferences, or basic performance measurement. We do not intentionally use this site to build advertising profiles or sell personal information. Your browser settings let you remove or block cookies, although some site functions may be affected."],
      ["Other websites", "Narinig Mo Ba Guide does not host, distribute, or operate the game. If you independently visit another website after leaving this guide, that website controls any information you provide there and has its own privacy practices."],
      ["How long information is kept", "We do not maintain a player profile database. Technical records held by hosting or security providers are retained only for their normal operational, legal, and security needs. We do not use them to identify individual visitors unless necessary to investigate misuse or comply with a valid legal obligation."],
      ["Children's privacy", "This site is not directed at children under the age required by applicable privacy law to consent to online data processing. If you believe a child has sent personal information to this site, contact us so we can review the situation."],
      ["Policy updates and contact", "We may revise this policy when the site changes or when a legal update makes clarification useful. The date above will change when the text is materially updated. Privacy questions can be sent to wyong@narinigmoba.live."],
    ],
  },
  terms: {
    label: "Legal",
    heading: "Terms of Service",
    intro: "These terms describe the permitted use of Narinig Mo Ba Guide, an independent fan-made player site at narinigmoba.live. By using the site, you agree to these terms.",
    sections: [
      ["What this site provides", "Narinig Mo Ba Guide offers player-written walkthroughs, controls help, story discussion, and character pages. It is not the game itself, a storefront, a download source, or official support. Story pages may contain clearly marked spoilers, and you choose whether to continue reading them."],
      ["Permitted use", "You may read, share a link to, and quote short portions of this site with clear attribution and a link back to the relevant page. Do not copy substantial portions of the writing, present the guide as your own, interfere with the site, attempt to bypass security measures, or use automated tools in a way that disrupts normal access."],
      ["Independent fan site", "This website is created for players and is not affiliated with, endorsed by, sponsored by, or operated by the original game, its creators, or any game marketplace. Game names, characters, artwork, screenshots, and other related materials remain the property of their respective owners."],
      ["Availability", "The guide is provided as available and may be changed, corrected, or removed without notice. We do not control the game's availability, price, technical requirements, updates, or support channels."],
      ["No warranty", "We aim to keep gameplay help clear and careful, but updates to the game can make a guide incomplete or outdated. Use the information at your own discretion. To the fullest extent permitted by law, this site provides no warranty that every page will be uninterrupted, error-free, or suitable for a particular purpose."],
      ["Questions about these terms", "If you have a question about permitted use, a correction, or a rights concern, email wyong@narinigmoba.live. We may update these terms when the site changes; continued use after an update means you accept the revised version."],
    ],
  },
  copyright: {
    label: "Legal",
    heading: "Copyright Notice",
    intro: "This notice explains how Narinig Mo Ba Guide handles its own writing and respects the intellectual property connected with Narinig Mo Ba.",
    sections: [
      ["Guide content", "Unless otherwise stated, the original written guides, page layouts, and original editorial illustrations on narinigmoba.live are copyright Narinig Mo Ba Guide. You may link to any page and quote short excerpts with a clear link, but you may not reproduce full guides, scrape the site, or republish its original work as your own without permission."],
      ["Game-related material", "Narinig Mo Ba, its title, characters, game assets, and related intellectual property belong to their respective rights holders. Their appearance in discussion is for identification, commentary, and player guidance. This site does not claim ownership of the original game or imply a partnership with its creators."],
      ["Original artwork and illustrations", "Images made for this guide are editorial illustrations, not game screenshots unless a caption says otherwise. They are intended to set the tone of the guide and explain its topics. Do not represent them as official game artwork or use them to advertise an unrelated product or service."],
      ["Rights concerns and removal requests", "If you own rights in material on this site and believe it has been used in a way that requires correction or removal, email wyong@narinigmoba.live. Include the page URL, a description of the material, your relationship to it, and enough information for us to understand the request. We will review clear, good-faith notices and respond as appropriate."],
      ["No waiver of rights", "Nothing on this site transfers ownership of any copyright, trademark, or other intellectual property. Rights holders retain all rights not expressly granted here."],
    ],
  },
  about: {
    label: "About",
    heading: "About Narinig Mo Ba Guide",
    intro: "Narinig Mo Ba Guide is an independent fan-made site for players who want to learn the shop routine and talk through the game's story.",
    sections: [
      ["Why this guide exists", "Narinig Mo Ba turns a small sari-sari store routine into a tense, conversation-led horror experience. A first playthrough can leave players looking for a simple controls reminder, help with an order, or a place to revisit the ending. This site keeps those needs together while making spoilers easy to spot."],
      ["How pages are written", "Gameplay pages focus on practical actions a player can use at the counter: reading an order, checking an item, confirming prices, and giving change. Story and character pages separate what a player can observe from interpretation, especially where the game leaves a question open."],
      ["Independent fan discussion", "Narinig Mo Ba Guide does not host, distribute, or represent the game. It is a fan project, so its explanations and interpretations should never be mistaken for statements from the game's creators."],
      ["Keeping the guide useful", "Pages are reviewed when details need clarification, new player questions reveal a gap, or an update changes how the game behaves. If you spot an error, an unclear step, or an accessibility issue, send the relevant page link and a short note to wyong@narinigmoba.live."],
    ],
  },
  contact: {
    label: "Contact",
    heading: "Contact Us",
    intro: "For questions about Narinig Mo Ba Guide, please write to wyong@narinigmoba.live. This is an email contact only; the site does not use a contact form.",
    sections: [
      ["Corrections and gameplay feedback", "If a guide step is unclear or no longer matches the game, include the page URL, the part that needs attention, and what you experienced. Specific details help us review the wording without asking you to share unnecessary personal information."],
      ["Copyright and rights questions", "For a copyright question or removal request, include the page URL, a description of the material, your relationship to it, and a way to verify the request if needed. See the Copyright Notice for more detail on what helps us review a rights concern."],
      ["Accessibility feedback", "If you encounter a barrier while reading the site, tell us the page URL, the device or browser you were using, and the task that was difficult. We welcome practical feedback that makes the guide easier to use for more players."],
      ["What this address cannot provide", "This address cannot provide official technical support, refunds, account assistance, or game keys. Those matters belong to the original game's creators or the platform where the game is released. We will not ask you for passwords, payment details, or other sensitive information."],
      ["Email address", "Write to wyong@narinigmoba.live. Please do not send sensitive personal information. We will use the information in your message only to understand and respond to the request."],
    ],
  },
} as const;

export function LegalPage({ page }: { page: LegalPageKey }) {
  const seo = legalTdk[page];
  const content = legalContent[page];
  const jsonLd = [
    breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Legal", path: "/legal/privacy-policy/" }, { name: content.heading, path: seo.path }]),
    { "@context": "https://schema.org", "@type": "WebPage", name: seo.title, description: seo.description, url: new URL(seo.path, siteTdk.domain).toString(), dateModified: seo.updated },
  ];

  return <main id="main-content">
    <JsonLd data={jsonLd} />
    <header className={styles.header}>
      <div className={`container ${styles.headerInner}`}>
        <p className="eyebrow">{content.label}</p>
        <h1>{content.heading}</h1>
        <p>{content.intro}</p>
      </div>
    </header>
    <article className={`container ${styles.article}`}>
      <nav className={styles.localNav} aria-label="Legal pages">
        <Link href="/legal/privacy-policy/" rel="noopener noreferrer nofollow">Privacy Policy</Link>
        <Link href="/legal/terms-of-service/" rel="noopener noreferrer nofollow">Terms of Service</Link>
        <Link href="/legal/copyright/" rel="noopener noreferrer nofollow">Copyright</Link>
        <Link href="/legal/about-us/" rel="noopener noreferrer nofollow">About Us</Link>
        <Link href="/legal/contact-us/" rel="noopener noreferrer nofollow">Contact Us</Link>
      </nav>
      <div className={styles.copy}>
        {content.sections.map(([heading, body]) => <section key={heading}><h2>{heading}</h2><p>{body}</p></section>)}
        <p className={styles.email}>Email: <a href="mailto:wyong@narinigmoba.live" rel="noopener noreferrer nofollow">wyong@narinigmoba.live</a></p>
      </div>
    </article>
  </main>;
}
