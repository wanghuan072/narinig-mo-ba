import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { siteTdk } from "@/seo/tdk";

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
};

export function createPageMetadata({
  title,
  description,
  path = "/",
}: MetadataInput): Metadata {
  const canonical = new URL(path, siteConfig.url).toString();

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.shortName,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: siteTdk.image,
          width: 1730,
          height: 909,
          alt: "Narinig Mo Ba Guide — a night-time sari-sari store scene",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteTdk.image],
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.path, siteConfig.url).toString(),
    })),
  };
}
