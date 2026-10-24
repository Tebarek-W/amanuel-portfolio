import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { connection } from "next/server"
import { Suspense } from "react"
import { MarkdownContent } from "@/components/markdown-content"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { getPublishedPostBySlug } from "@/lib/posts"
import { pageSeo } from "@/lib/seo"
import { cn } from "@/lib/utils"
import { ArrowLeft } from "lucide-react"

type BlogPostPageProps = {
  params: Promise<{ slug: string }>
}

/** Dynamic post routes use URL params + database reads. */
export const instant = false

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  try {
    const post = await getPublishedPostBySlug(slug)
    if (!post) return { title: "Post not found" }
    const description = post.excerpt || post.title
    return pageSeo({
      title: post.title,
      description,
      path: `/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedAt?.toISOString(),
      images: post.coverImageUrl
        ? [post.coverImageUrl, "/opengraph-image"]
        : ["/opengraph-image"],
    })
  } catch {
    return { title: "Blog" }
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  return (
    <div className="section-y">
      <div className="container-page max-w-3xl">
        <Link
          href="/blog"
          className={cn(
            buttonVariants({ variant: "ghost", size: "sm" }),
            "mb-6 -ml-2"
          )}
        >
          <ArrowLeft className="size-4" aria-hidden />
          All posts
        </Link>

        <Suspense fallback={<PostFallback />}>
          <BlogPostContent params={params} />
        </Suspense>
      </div>
    </div>
  )
}

async function BlogPostContent({
  params,
}: {
  params: BlogPostPageProps["params"]
}) {
  await connection()
  const { slug } = await params
  const post = await getPublishedPostBySlug(slug)
  if (!post) notFound()

  return (
    <article>
      <div className="flex flex-wrap items-center gap-2">
        <Badge variant="secondary">
          {post.type === "achievement" ? "Achievement" : "Article"}
        </Badge>
        {post.publishedAt ? (
          <time
            dateTime={post.publishedAt.toISOString()}
            className="font-mono text-xs text-ink-muted"
          >
            {new Intl.DateTimeFormat("en", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }).format(post.publishedAt)}
          </time>
        ) : null}
      </div>

      <h1 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-ink text-balance sm:text-4xl">
        {post.title}
      </h1>

      {post.excerpt ? (
        <p className="mt-4 text-lg leading-relaxed text-ink-muted">
          {post.excerpt}
        </p>
      ) : null}

      {post.coverImageUrl ? (
        <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-lg border border-border bg-muted">
          <Image
            src={post.coverImageUrl}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
            unoptimized
            priority
          />
        </div>
      ) : null}

      <div className="mt-10">
        <MarkdownContent content={post.body} />
      </div>
    </article>
  )
}

function PostFallback() {
  return (
    <div aria-hidden className="animate-pulse space-y-4">
      <div className="h-5 w-28 rounded bg-muted" />
      <div className="h-10 max-w-xl rounded bg-muted" />
      <div className="h-4 w-full rounded bg-muted" />
      <div className="h-4 w-11/12 rounded bg-muted" />
    </div>
  )
}
