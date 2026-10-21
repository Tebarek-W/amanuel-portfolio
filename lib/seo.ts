import type { Metadata } from "next"

const FALLBACK_SITE_URL = "https://amanueltd.com.et"

/** Absolute site origin used for metadataBase, sitemap, robots, and JSON-LD. */
export function getSiteUrl() {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim() || FALLBACK_SITE_URL
  return raw.replace(/\/$/, "")
}

type PageSeoInput = {
  title: string
  description: string
  path: string
  type?: "website" | "article"
  publishedTime?: string
  images?: string[]
}

/** Shared title/description/canonical/OG/Twitter metadata for public pages. */
export function pageSeo({
  title,
  description,
  path,
  type = "website",
  publishedTime,
  images = ["/opengraph-image"],
}: PageSeoInput): Metadata {
  const canonical = path.startsWith("/") ? path : `/${path}`

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type,
      images,
      ...(type === "article" && publishedTime
        ? { publishedTime }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images,
    },
  }
}
