import type { Metadata, Viewport } from "next";
import { Bitter, Source_Sans_3 } from "next/font/google";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { siteConfig } from "@/config/site";
import "@/style/globals.css";

const display = Bitter({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: "Narinig Mo Ba Guide — Walkthrough, Story & Controls", template: "%s" },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  category: "games",
  icons: { icon: "/favicon.ico", shortcut: "/favicon.ico" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#07141b",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <head>
        <link rel="preconnect" href="https://games.pokepath.site" />
      </head>
      <body>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
