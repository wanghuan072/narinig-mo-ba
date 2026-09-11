import Link from "next/link";
import Image from "next/image";
import { primaryNavigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { siteTdk } from "@/seo/tdk";
import styles from "@/style/layout/site-footer.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <Link className={styles.brand} href="/">
          <span className={styles.brandMark}><Image src={siteTdk.logo} alt="" width={42} height={48} /></span>
          <span><strong>Narinig Mo Ba</strong><small>An independent player guide</small></span>
        </Link>
        <nav className={styles.nav} aria-label="Footer navigation">
          {primaryNavigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>
        <p className={styles.signoff}>Same neighborhood.<br />Different stories.</p>
      </div>
      <div className={`container ${styles.legal}`}>
        <p className={styles.legalTitle}>Legal</p>
        <nav className={styles.legalLinks} aria-label="Legal navigation">
          <Link href="/legal/privacy-policy/" rel="noopener noreferrer nofollow">Privacy Policy</Link>
          <Link href="/legal/terms-of-service/" rel="noopener noreferrer nofollow">Terms of Service</Link>
          <Link href="/legal/copyright/" rel="noopener noreferrer nofollow">Copyright</Link>
          <Link href="/legal/about-us/" rel="noopener noreferrer nofollow">About Us</Link>
          <Link href="/legal/contact-us/" rel="noopener noreferrer nofollow">Contact Us</Link>
        </nav>
      </div>
      <div className={`container ${styles.bottom}`}>
        <p>Copyright © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        <p>This website is an independent fan site and is not affiliated with the original game or its creators.</p>
      </div>
    </footer>
  );
}
