import type { Metadata } from "next";
import { GuideArticlePage } from "@/page/guides/article/GuideArticlePage";
import { createPageMetadata } from "@/seo/metadata";
import { articleTdk } from "@/seo/tdk";

export const metadata: Metadata = createPageMetadata(articleTdk.controls);

export default function ControlsGuidePage() { return <GuideArticlePage slug="controls" />; }
