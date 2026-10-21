import type { Metadata } from "next"
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
  const posts = isDatabaseConfigured() ? await getAllPostsAdmin() : []
  return <AdminPostList posts={posts} />
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
