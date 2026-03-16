import type { MetadataRoute } from "next";
import { siteConfig, siteUrl } from "../lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(siteConfig.publishedAt),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
