import type { MetadataRoute } from "next"
import { getAllProjectSlugs } from "@/data/projects"

/**
 * Sitemap with relative-friendly absolute URLs.
 * Update baseUrl in data/site.ts / here once amanueltd.com.et is confirmed live.
 * Until then, Vercel preview / deployment host should be configured via env if needed.
 */
const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://amanueltd.com.et"

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/experience",
    "/projects",
    "/services",
    "/publications",
    "/certificates",
    "/contact",
  ]

  const projectRoutes = getAllProjectSlugs().map(
    (slug) => `/projects/${slug}`
  )

  return [...staticRoutes, ...projectRoutes].map((path) => ({
    url: `${baseUrl}${path}`,
    // Fixed lastModified avoids unstable `new Date()` during prerender with cacheComponents.
    lastModified: "2026-10-19",
    changeFrequency: path.startsWith("/projects/") ? "monthly" : "weekly",
    priority: path === "" ? 1 : path.startsWith("/projects/") ? 0.7 : 0.8,
  }))
}
