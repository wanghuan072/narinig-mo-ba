import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { articleTdk, legalTdk, pageTdk } from "@/seo/tdk";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    ...Object.values(pageTdk).map((page) => ({ ...page, priority: page.path === "/" ? 1 : 0.8 })),
    ...Object.values(articleTdk).map((page) => ({ ...page, priority: 0.7 })),
    ...Object.values(legalTdk).map((page) => ({ ...page, priority: 0.3 })),
  ];

  return pages.map((page) => ({
    url: new URL(page.path, siteConfig.url).toString(),
    lastModified: new Date(page.updated),
    changeFrequency: page.path === "/" ? "weekly" : "monthly",
    priority: page.priority,
  }));
}
