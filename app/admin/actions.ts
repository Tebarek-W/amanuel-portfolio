"use server"

import { eq } from "drizzle-orm"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { z } from "zod"
import { getDb, isDatabaseConfigured } from "@/db"
import { posts, type PostType } from "@/db/schema"
import {
  checkLoginThrottle,
  clearFailedLogin,
  createAdminSession,
  destroyAdminSession,
  isAdminAuthenticated,
  recordFailedLogin,
  verifyAdminPassword,
} from "@/lib/auth"
import { ensureUniqueSlug, slugify } from "@/lib/posts"

const postSchema = z.object({
  title: z.string().trim().min(3, "Title is required."),
  slug: z.string().trim().optional(),
  excerpt: z.string().trim().max(500).optional().default(""),
  body: z.string().trim().min(1, "Body is required."),
  type: z.enum(["article", "achievement"]),
  coverImageUrl: z.string().trim().default(""),
  published: z.boolean().optional().default(false),
})

async function requireAdmin() {
  if (!(await isAdminAuthenticated())) {
    throw new Error("Unauthorized")
  }
  if (!isDatabaseConfigured()) {
    throw new Error("Database is not configured.")
  }
}

function revalidateBlog() {
  revalidatePath("/blog")
  revalidatePath("/")
  revalidatePath("/admin")
  revalidatePath("/sitemap.xml")
}

export async function loginAction(
  _prev: { error?: string } | undefined,
  formData: FormData
): Promise<{ error?: string }> {
  const password = String(formData.get("password") ?? "")
  const throttleKey = "admin-login"
  const throttle = checkLoginThrottle(throttleKey)
  if (!throttle.allowed) {
    return {
      error: `Too many attempts. Try again in ${Math.ceil(throttle.retryAfterMs / 1000)}s.`,
    }
  }

  try {
    if (!verifyAdminPassword(password)) {
      recordFailedLogin(throttleKey)
      return { error: "Invalid password." }
    }
  } catch {
    return { error: "Admin login is not configured on the server." }
  }

  clearFailedLogin(throttleKey)
  await createAdminSession()
  redirect("/admin")
}

export async function logoutAction() {
  await destroyAdminSession()
  redirect("/admin/login")
}

export async function createPostAction(
  _prev: { error?: string } | undefined,
  formData: FormData
): Promise<{ error?: string }> {
  await requireAdmin()

  const parsed = postSchema.safeParse({
    title: formData.get("title"),
    slug: formData.get("slug") || undefined,
    excerpt: formData.get("excerpt") ?? "",
    body: formData.get("body"),
    type: formData.get("type"),
    coverImageUrl: formData.get("coverImageUrl") ?? "",
    published: formData.get("published") === "on",
  })

  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Invalid form data." }
  }

  const data = parsed.data
  if (data.coverImageUrl && !URL.canParse(data.coverImageUrl)) {
    return { error: "Cover image must be a valid URL." }
  }
  const baseSlug = slugify(data.slug || data.title)
  const slug = await ensureUniqueSlug(baseSlug)
  const now = new Date()
  const db = getDb()

  await db.insert(posts).values({
    title: data.title,
    slug,
    excerpt: data.excerpt ?? "",
    body: data.body,
    type: data.type as PostType,
    coverImageUrl: data.coverImageUrl || null,
    published: data.published,
    publishedAt: data.published ? now : null,
    createdAt: now,
    updatedAt: now,
  })

  revalidateBlog()
  redirect("/admin")
}

export async function updatePostAction(
  id: string,
  _prev: { error?: string } | undefined,
  formData: FormData
): Promise<{ error?: string }> {
  await requireAdmin()

  const parsed = postSchema.safeParse({
    title: formData.get("title"),
    slug: formData.get("slug") || undefined,
    excerpt: formData.get("excerpt") ?? "",
    body: formData.get("body"),
    type: formData.get("type"),
    coverImageUrl: formData.get("coverImageUrl") ?? "",
    published: formData.get("published") === "on",
  })

  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Invalid form data." }
  }

  const data = parsed.data
  if (data.coverImageUrl && !URL.canParse(data.coverImageUrl)) {
    return { error: "Cover image must be a valid URL." }
  }
  const baseSlug = slugify(data.slug || data.title)
  const slug = await ensureUniqueSlug(baseSlug, id)
  const now = new Date()
  const db = getDb()

  const existing = await db.select().from(posts).where(eq(posts.id, id)).limit(1)
  const current = existing[0]
  if (!current) {
    return { error: "Post not found." }
  }

  await db
    .update(posts)
    .set({
      title: data.title,
      slug,
      excerpt: data.excerpt ?? "",
      body: data.body,
      type: data.type as PostType,
      coverImageUrl: data.coverImageUrl || null,
      published: data.published,
      publishedAt: data.published
        ? (current.publishedAt ?? now)
        : null,
      updatedAt: now,
    })
    .where(eq(posts.id, id))

  revalidateBlog()
  revalidatePath(`/blog/${slug}`)
  if (current.slug !== slug) {
    revalidatePath(`/blog/${current.slug}`)
  }
  redirect("/admin")
}

export async function deletePostAction(id: string) {
  await requireAdmin()
  const db = getDb()
  const existing = await db.select().from(posts).where(eq(posts.id, id)).limit(1)
  const current = existing[0]
  await db.delete(posts).where(eq(posts.id, id))
  revalidateBlog()
  if (current?.slug) {
    revalidatePath(`/blog/${current.slug}`)
  }
}

export async function togglePublishAction(id: string) {
  await requireAdmin()
  const db = getDb()
  const existing = await db.select().from(posts).where(eq(posts.id, id)).limit(1)
  const current = existing[0]
  if (!current) return

  const nextPublished = !current.published
  const now = new Date()
  await db
    .update(posts)
    .set({
      published: nextPublished,
      publishedAt: nextPublished ? (current.publishedAt ?? now) : null,
      updatedAt: now,
    })
    .where(eq(posts.id, id))

  revalidateBlog()
  revalidatePath(`/blog/${current.slug}`)
}
