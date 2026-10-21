import type { MetadataRoute } from "next";

import { projectSlugs } from "@/domain/portfolio";

const siteUrl = "https://ivangenes.github.io";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projectSlugs.map((slug) => ({
      url: `${siteUrl}/work/${slug}/`,
      changeFrequency: "yearly" as const,
      priority: 0.8,
    })),
  ];
}
