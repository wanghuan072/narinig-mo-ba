import charactersData from "@/data/characters/characters.json";
import guidesData from "@/data/guides/guides.json";
import type { Character, GuideCard } from "@/types/content";

export const characters = charactersData satisfies Character[];
export const guideCards = guidesData satisfies GuideCard[];

export const guideArticles = {
  controls: {
    label: "Controls",
    title: "Narinig Mo Ba Controls: A Mouse-First Guide",
    description: "Get comfortable picking up items, returning a mistake, checking prices, and moving through dialogue before a busy order catches you out.",
    image: "/images/guides/check-price.webp",
    alt: "Illustrated calculator and price tags on a sari-sari store counter",
    readTime: "7 min read · Spoilers included",
  },
  "beginner-tips": {
    label: "First shift",
    title: "Beginner Tips for Your First Shift",
    description: "A calm, practical way to approach the opening: read the order, verify the item, work out the change, and let the conversations breathe.",
    image: "/images/guides/read-order.webp",
    alt: "Illustrated handwritten sari-sari store order beside a pen",
    readTime: "8 min read · Spoilers included",
  },
} as const;

export type GuideSlug = keyof typeof guideArticles;
