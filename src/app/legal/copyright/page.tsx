import type { Metadata } from "next";
import { LegalPage } from "@/page/legal/LegalPage";
import { createPageMetadata } from "@/seo/metadata";
import { legalTdk } from "@/seo/tdk";

export const metadata: Metadata = createPageMetadata(legalTdk.copyright);
export default function CopyrightPage() { return <LegalPage page="copyright" />; }
