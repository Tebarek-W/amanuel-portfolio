import Link from "next/link"
import { Suspense } from "react"
import { BlogCard } from "@/components/blog-card"
import { SectionHeading } from "@/components/section-heading"
import { Button } from "@/components/ui/button"
import { getPublishedPosts } from "@/lib/posts"

export function LatestBlogSection() {
  return (
    <section
      id="blog"
      className="section-y border-y border-border bg-surface"
      aria-labelledby="blog-heading"
    >
      <div className="container-page">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            id="blog-heading"
            eyebrow="Blog"
            title="Latest articles and achievements"
            description="Recent notes and milestones from research and professional practice."
          />
          <Button
            variant="outline"
            size="lg"
            nativeButton={false}
            render={<Link href="/blog" />}
            className="shrink-0 self-start sm:self-auto"
          >
            View all posts
          </Button>
        </div>

        <Suspense fallback={<BlogPreviewFallback />}>
          <LatestBlogPosts />
        </Suspense>
      </div>
    </section>
  )
}

async function LatestBlogPosts() {
  const posts = (await getPublishedPosts("all")).slice(0, 3)

  if (posts.length === 0) {
    return (
      <div className="surface-panel mt-10 p-8 text-center">
        <p className="text-ink">No published posts yet.</p>
        <p className="mt-2 text-sm text-ink-muted">
          Check back soon for articles and achievements.
        </p>
      </div>
    )
  }

  return (
    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  )
}

function BlogPreviewFallback() {
  return (
    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3" aria-hidden>
      {[0, 1, 2].map((item) => (
        <div key={item} className="surface-panel h-48 animate-pulse bg-muted/60" />
      ))}
    </div>
  )
}
