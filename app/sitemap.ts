import type { MetadataRoute } from "next"
import { getAllProjectSlugs } from "@/data/projects"
import { getPublishedPosts } from "@/lib/posts"
import { getSiteUrl } from "@/lib/seo"

const baseUrl = getSiteUrl()

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    "",
    "/about",
    "/experience",
    "/projects",
    "/services",
    "/publications",
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
