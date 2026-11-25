import type { MetadataRoute } from "next"
import { topProjects } from "@/data/projects"
import { getSiteUrl } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl()
  const now = new Date()
  return [
    { url: base, lastModified: now, changeFrequency: "monthly", priority: 1 },
    ...topProjects.map((project) => ({
      url: `${base}/projects/${project.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ]
}
