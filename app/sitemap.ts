import type { MetadataRoute } from "next";
import { SITE } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: SITE.url, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE.url}/privacidad`, lastModified: now, priority: 0.3 },
    { url: `${SITE.url}/aviso-legal`, lastModified: now, priority: 0.3 },
    { url: `${SITE.url}/cookies`, lastModified: now, priority: 0.3 },
  ];
}
