"use client"

import { useMemo, useState } from "react"
import type { Post, PostType } from "@/db/schema"
import { BlogCard } from "@/components/blog-card"
import { cn } from "@/lib/utils"

type FilterKey = "all" | PostType

type BlogFiltersProps = {
  posts: Post[]
}

export function BlogFilters({ posts }: BlogFiltersProps) {
  const [filter, setFilter] = useState<FilterKey>("all")

  const counts = useMemo(() => {
    return {
      all: posts.length,
      article: posts.filter((post) => post.type === "article").length,
      achievement: posts.filter((post) => post.type === "achievement").length,
    }
  }, [posts])

  const filtered = useMemo(() => {
    if (filter === "all") return posts
    return posts.filter((post) => post.type === filter)
  }, [posts, filter])

  return (
    <div className="space-y-6 sm:space-y-8">
      <div
        className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0"
        role="group"
        aria-label="Filter blog posts"
      >
        {(
          [
            ["all", "All"],
            ["article", "Articles"],
            ["achievement", "Achievements"],
          ] as const
        ).map(([key, label]) => (
          <button
            key={key}
            type="button"
            aria-pressed={filter === key}
            onClick={() => setFilter(key)}
            className={cn(
              "inline-flex shrink-0 items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:gap-2 sm:px-3 sm:py-2 sm:text-sm",
              filter === key
                ? "border-teal bg-teal-muted text-ink"
                : "border-border bg-surface-elevated text-ink-muted hover:border-teal/40 hover:text-ink"
            )}
          >
            <span>{label}</span>
            <span className="font-mono text-[0.65rem] opacity-70 sm:text-xs">
              {counts[key]}
            </span>
          </button>
        ))}
      </div>

      <p className="text-sm text-ink-muted" aria-live="polite">
        Showing {filtered.length} of {posts.length} posts
      </p>

      {filtered.length > 0 ? (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((post, index) => (
            <BlogCard
              key={post.id}
              post={post}
              priority={index === 0 && Boolean(post.coverImageUrl)}
            />
          ))}
        </div>
      ) : (
        <div className="surface-panel p-8 text-center">
          <p className="text-ink">No posts in this category yet.</p>
        </div>
      )}
    </div>
  )
}
