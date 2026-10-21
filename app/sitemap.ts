import type { MetadataRoute } from "next"
import { getAllProjectSlugs } from "@/data/projects"
import { getPublishedPosts } from "@/lib/posts"

/**
 * Sitemap with relative-friendly absolute URLs.
 * Update baseUrl in data/site.ts / here once amanueltd.com.et is confirmed live.
 * Until then, Vercel preview / deployment host should be configured via env if needed.
 */
const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://amanueltd.com.et"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    "",
    "/about",
    "/experience",
    "/projects",
    "/services",
    "/publications",
    "/certificates",
    "/blog",
    "/contact",
  ]

  const projectRoutes = getAllProjectSlugs().map(
    (slug) => `/projects/${slug}`
  )

  let blogRoutes: string[] = []
  try {
    const posts = await getPublishedPosts("all")
    blogRoutes = posts.map((post) => `/blog/${post.slug}`)
  } catch {
    blogRoutes = []
  }

  return [...staticRoutes, ...projectRoutes, ...blogRoutes].map((path) => ({
    url: `${baseUrl}${path}`,
    // Fixed lastModified avoids unstable `new Date()` during prerender with cacheComponents.
    lastModified: "2026-10-21",
    changeFrequency: path.startsWith("/projects/") || path.startsWith("/blog/")
      ? "monthly"
      : "weekly",
    priority:
      path === ""
        ? 1
        : path.startsWith("/projects/") || path.startsWith("/blog/")
          ? 0.7
          : 0.8,
  }))
}
