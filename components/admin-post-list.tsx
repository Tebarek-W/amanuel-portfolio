"use client"

import { useTransition } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import type { Post } from "@/db/schema"
import { deletePostAction, togglePublishAction } from "@/app/admin/actions"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

type AdminPostListProps = {
  posts: Post[]
}

export function AdminPostList({ posts }: AdminPostListProps) {
  const router = useRouter()
  const [pending, startTransition] = useTransition()

  if (posts.length === 0) {
    return (
      <div className="surface-panel p-8 text-center">
        <p className="text-ink-muted">No posts yet.</p>
        <Button
          className="mt-4"
          nativeButton={false}
          render={<Link href="/admin/posts/new" />}
        >
          Create your first post
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-3">
      {posts.map((post) => (
        <article
          key={post.id}
          className="surface-panel flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="outline">
                {post.type === "achievement" ? "Achievement" : "Article"}
              </Badge>
              <Badge variant={post.published ? "secondary" : "outline"}>
                {post.published ? "Published" : "Draft"}
              </Badge>
            </div>
            <h2 className="mt-2 font-heading text-lg font-semibold text-ink">
              {post.title}
            </h2>
            <p className="mt-1 font-mono text-xs text-ink-muted">/{post.slug}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            <Button
              variant="outline"
              size="sm"
              nativeButton={false}
              render={<Link href={`/admin/posts/${post.id}/edit`} />}
            >
              Edit
            </Button>
            {post.published ? (
              <Button
                variant="outline"
                size="sm"
                nativeButton={false}
                render={<Link href={`/blog/${post.slug}`} />}
              >
                View
              </Button>
            ) : null}
            <Button
              variant="secondary"
              size="sm"
              disabled={pending}
              onClick={() =>
                startTransition(async () => {
                  await togglePublishAction(post.id)
                  router.refresh()
                })
              }
            >
              {post.published ? "Unpublish" : "Publish"}
            </Button>
            <Button
              variant="destructive"
              size="sm"
              disabled={pending}
              onClick={() => {
                if (!window.confirm(`Delete “${post.title}”?`)) return
                startTransition(async () => {
                  await deletePostAction(post.id)
                  router.refresh()
                })
              }}
            >
              Delete
            </Button>
          </div>
        </article>
      ))}
    </div>
  )
}
