import type { MetadataRoute } from "next";
import { site } from "@/content/site";

// Metadata-based sitemap. Single-page portfolio → one canonical URL.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
