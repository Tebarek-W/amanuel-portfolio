import type { MetadataRoute } from "next"

/**
 * Robots configuration.
 * Host is left relative until amanueltd.com.et is confirmed as the live domain.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
  }
}
