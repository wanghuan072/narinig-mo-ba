import type { Metadata } from "next";
import { GuideArticlePage } from "@/page/guides/article/GuideArticlePage";
import { createPageMetadata } from "@/seo/metadata";
import { articleTdk } from "@/seo/tdk";

export const metadata: Metadata = createPageMetadata(articleTdk["beginner-tips"]);

export default function BeginnerTipsGuidePage() { return <GuideArticlePage slug="beginner-tips" />; }
