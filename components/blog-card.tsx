import Image from "next/image"
import Link from "next/link"
import type { Post } from "@/db/schema"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

type BlogCardProps = {
  post: Post
  className?: string
}

function formatDate(value: Date | null) {
  if (!value) return ""
  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(value)
}

export function BlogCard({ post, className }: BlogCardProps) {
  return (
    <article className={cn("surface-panel flex h-full flex-col overflow-hidden", className)}>
      {post.coverImageUrl ? (
        <Link href={`/blog/${post.slug}`} className="relative block aspect-[16/9] bg-muted">
          <Image
            src={post.coverImageUrl}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
            unoptimized
          />
        </Link>
      ) : null}

      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="secondary">
            {post.type === "achievement" ? "Achievement" : "Article"}
          </Badge>
          {post.publishedAt ? (
            <time
              dateTime={post.publishedAt.toISOString()}
              className="font-mono text-xs text-ink-muted"
            >
              {formatDate(post.publishedAt)}
            </time>
          ) : null}
        </div>

        <h3 className="mt-3 font-heading text-xl font-semibold tracking-tight text-ink text-balance">
          <Link
            href={`/blog/${post.slug}`}
            className="hover:text-teal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            {post.title}
          </Link>
        </h3>

        {post.excerpt ? (
          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink-muted">
            {post.excerpt}
          </p>
        ) : null}

        <Link
          href={`/blog/${post.slug}`}
          className="mt-auto pt-4 text-sm font-medium text-teal hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          Read more
        </Link>
      </div>
    </article>
  )
}
