"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Icon } from "@/components/common/Icon";
import { primaryNavigation } from "@/config/navigation";
import { siteTdk } from "@/seo/tdk";
import styles from "@/style/layout/site-header.module.css";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href.slice(0, -1));
}

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link className={styles.brand} href="/" aria-label="Narinig Mo Ba home">
          <span className={styles.brandMark}><Image src={siteTdk.logo} alt="" width={42} height={48} priority /></span>
          <span>
            <strong>Narinig Mo Ba</strong>
            <small>Listen past the counter</small>
          </span>
        </Link>

        <button
          className={styles.menuButton}
          type="button"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsOpen((value) => !value)}
        >
          <Icon name={isOpen ? "close" : "menu"} size={25} />
        </button>

        <nav
          id="primary-navigation"
          className={`${styles.nav} ${isOpen ? styles.navOpen : ""}`}
          aria-label="Primary navigation"
        >
          {primaryNavigation.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={active ? styles.active : undefined}
                aria-current={active ? "page" : undefined}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
