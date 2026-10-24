import Link from "next/link"
import { connection } from "next/server"
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
  await connection()
  const posts = (await getPublishedPosts("all")).slice(0, 3)

  if (posts.length === 0) {
    return (
      <div className="surface-panel mt-10 px-6 py-10 text-center sm:px-10">
        <p className="font-heading text-lg font-semibold text-ink">
          Blog coming soon
        </p>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-ink-muted">
          Articles and achievements will appear here after the first posts are
          published.
        </p>
        <Button
          variant="outline"
          className="mt-5"
          nativeButton={false}
          render={<Link href="/blog" />}
        >
          Visit blog page
        </Button>
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
