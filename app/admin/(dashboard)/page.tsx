import type { Metadata } from "next"
import { connection } from "next/server"
import { Suspense } from "react"
import { AdminPostList } from "@/components/admin-post-list"
import { SectionHeading } from "@/components/section-heading"
import { isDatabaseConfigured } from "@/db"
import { getAllPostsAdmin } from "@/lib/posts"

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
}

/** Admin dashboard reads the database — allow blocking Instant Shell. */
export const instant = false

export default function AdminDashboardPage() {
  return (
    <div className="section-y !pt-10">
      <div className="container-page">
        <SectionHeading
          eyebrow="Dashboard"
          title="Posts"
          description="Draft and publish articles or achievements that appear on the public Blog page."
        />
        <div className="mt-8">
          <Suspense fallback={<AdminListFallback />}>
            <AdminPostListLoader />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

async function AdminPostListLoader() {
  await connection()

  if (!isDatabaseConfigured()) {
    return <AdminPostList posts={[]} />
  }

  try {
    const posts = await getAllPostsAdmin()
    return <AdminPostList posts={posts} />
  } catch {
    return (
      <div className="surface-panel p-6 sm:p-8">
        <p className="font-heading text-lg font-semibold text-ink">
          Database temporarily unavailable
        </p>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-muted">
          Could not reach Neon (often while the free-tier compute wakes from
          idle). Wait a few seconds and refresh this page.
        </p>
      </div>
    )
  }
}

function AdminListFallback() {
  return (
    <div className="space-y-3" aria-hidden>
      {[0, 1, 2].map((item) => (
        <div key={item} className="surface-panel h-24 animate-pulse bg-muted/60" />
      ))}
    </div>
  )
}
