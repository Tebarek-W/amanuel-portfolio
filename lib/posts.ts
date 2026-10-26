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

function errorText(error: unknown) {
  if (!(error instanceof Error)) return String(error)
  const digest =
    typeof (error as Error & { digest?: unknown }).digest === "string"
      ? (error as Error & { digest: string }).digest
      : ""
  const cause = error.cause instanceof Error ? error.cause.message : ""
  return `${error.message} ${cause} ${digest}`
}

/** Next aborts in-flight fetches when a prerender window ends — do not retry those. */
function isPrerenderAbort(error: unknown) {
  return /HANGING_PROMISE_REJECTION|prerendering, fetch\(\) rejects/i.test(
    errorText(error)
  )
}

/** Neon scale-to-zero / brief network blips while compute wakes. */
function isTransientDbError(error: unknown) {
  return /fetch failed|Error connecting to database|ECONNRESET|ETIMEDOUT|UND_ERR_|socket|network/i.test(
    errorText(error)
  )
}

function sleep(ms: number) {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, ms)
  })
}

async function safeQuery<T>(fallback: T, run: () => Promise<T>): Promise<T> {
  try {
    return await run()
  } catch (error) {
    if (isPrerenderAbort(error)) {
      return fallback
    }

    // Neon idle computes often fail the first HTTP query while waking; one retry usually works.
    if (isTransientDbError(error)) {
      try {
        await sleep(1500)
        return await run()
      } catch (retryError) {
        if (!isPrerenderAbort(retryError)) {
          console.warn(
            "[posts] database unavailable after retry (Neon may still be waking). Showing empty posts.",
            retryError instanceof Error ? retryError.message : retryError
          )
        }
        return fallback
      }
    }

    console.warn(
      "[posts] database query failed:",
      error instanceof Error ? error.message : error
    )
    return fallback
  }
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
