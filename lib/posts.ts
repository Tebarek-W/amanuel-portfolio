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

const TRANSIENT_RETRY_DELAYS_MS = [1500, 2500] as const

async function withDbRetry<T>(run: () => Promise<T>): Promise<T> {
  let lastError: unknown
  const attempts = TRANSIENT_RETRY_DELAYS_MS.length + 1

  for (let attempt = 0; attempt < attempts; attempt += 1) {
    try {
      return await run()
    } catch (error) {
      lastError = error
      if (isPrerenderAbort(error)) throw error
      if (!isTransientDbError(error) || attempt === attempts - 1) throw error
      await sleep(TRANSIENT_RETRY_DELAYS_MS[attempt] ?? 2000)
    }
  }

  throw lastError
}

async function safeQuery<T>(fallback: T, run: () => Promise<T>): Promise<T> {
  try {
    return await withDbRetry(run)
  } catch (error) {
    if (!isPrerenderAbort(error)) {
      console.warn(
        "[posts] database unavailable. Showing empty posts.",
        error instanceof Error ? error.message : error
      )
    }
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
  if (!isDatabaseConfigured()) return [] as Post[]
  return withDbRetry(async () => {
    const db = getDb()
    return db
      .select()
      .from(posts)
      .orderBy(desc(posts.updatedAt), desc(posts.createdAt))
  })
}

export async function getPostById(id: string) {
  if (!isDatabaseConfigured()) return null
  return withDbRetry(async () => {
    const db = getDb()
    const rows = await db.select().from(posts).where(eq(posts.id, id)).limit(1)
    return rows[0] ?? null
  })
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
