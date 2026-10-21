import type { Metadata } from "next"
import { Suspense } from "react"
import { BlogFilters } from "@/components/blog-filters"
import { SectionHeading } from "@/components/section-heading"
import { getPublishedPosts } from "@/lib/posts"

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles and professional achievements from Amanuel Tadele — research data management, survey systems, and analysis.",
}

export default function BlogPage() {
  return (
    <div className="section-y">
      <div className="container-page">
        <SectionHeading
          eyebrow="Blog"
          title="Articles and achievements"
          description="Updates on research work, professional milestones, and notes from the field."
        />

        <div className="mt-10">
          <Suspense fallback={<BlogListFallback />}>
            <BlogList />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

async function BlogList() {
  const posts = await getPublishedPosts("all")

  if (posts.length === 0) {
    return (
      <div className="surface-panel p-8 text-center">
        <p className="text-ink">No published posts yet.</p>
        <p className="mt-2 text-sm text-ink-muted">
          New articles and achievements will appear here once published.
        </p>
      </div>
    )
  }

  return <BlogFilters posts={posts} />
}

function BlogListFallback() {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3" aria-hidden>
      {[0, 1, 2].map((item) => (
        <div key={item} className="surface-panel h-48 animate-pulse bg-muted/60" />
      ))}
    </div>
  )
}
