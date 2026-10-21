import { and, desc, eq } from "drizzle-orm"
import { getDb, isDatabaseConfigured } from "@/db"
import { posts, type Post, type PostType } from "@/db/schema"

export function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 180)
}

function isTransientDbError(error: unknown) {
  const message =
    error instanceof Error
      ? `${error.message} ${error.cause instanceof Error ? error.cause.message : ""}`
      : String(error)
  return /fetch failed|ECONNRESET|ETIMEDOUT|network|connecting to database/i.test(
    message
  )
}

async function safeQuery<T>(fallback: T, run: () => Promise<T>): Promise<T> {
  const attempts = 3
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      return await run()
    } catch (error) {
      const retry = attempt < attempts && isTransientDbError(error)
      console.error(
        `[posts] database query failed (attempt ${attempt}/${attempts}):`,
        error
      )
      if (!retry) return fallback
      await new Promise((resolve) => setTimeout(resolve, 250 * attempt))
    }
  }
  return fallback
}

export async function getPublishedPosts(type?: PostType | "all") {
  if (!isDatabaseConfigured()) return [] as Post[]
  return safeQuery([] as Post[], async () => {
    const db = getDb()
    if (type && type !== "all") {
      return db
        .select()
        .from(posts)
        .where(and(eq(posts.published, true), eq(posts.type, type)))
        .orderBy(desc(posts.publishedAt), desc(posts.createdAt))
    }
    return db
      .select()
      .from(posts)
      .where(eq(posts.published, true))
      .orderBy(desc(posts.publishedAt), desc(posts.createdAt))
  })
}

export async function getPublishedPostBySlug(slug: string) {
  if (!isDatabaseConfigured()) return null
  return safeQuery(null, async () => {
    const db = getDb()
    const rows = await db
      .select()
      .from(posts)
      .where(and(eq(posts.slug, slug), eq(posts.published, true)))
      .limit(1)
    return rows[0] ?? null
  })
}

export async function getAllPostsAdmin() {
  const db = getDb()
  return db
    .select()
    .from(posts)
    .orderBy(desc(posts.updatedAt), desc(posts.createdAt))
}

export async function getPostById(id: string) {
  const db = getDb()
  const rows = await db.select().from(posts).where(eq(posts.id, id)).limit(1)
  return rows[0] ?? null
}

export async function ensureUniqueSlug(base: string, excludeId?: string) {
  const db = getDb()
  let candidate = base || "post"
  let attempt = 0
  while (attempt < 50) {
    const rows = await db
      .select({ id: posts.id })
      .from(posts)
      .where(eq(posts.slug, candidate))
      .limit(1)
    const existing = rows[0]
    if (!existing || (excludeId && existing.id === excludeId)) {
      return candidate
    }
    attempt += 1
    candidate = `${base}-${attempt + 1}`
  }
  return `${base}-${Date.now()}`
}
