"use client"

import { useActionState } from "react"
import type { Post } from "@/db/schema"
import { createPostAction, updatePostAction } from "@/app/admin/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

type AdminPostFormProps = {
  post?: Post
}

export function AdminPostForm({ post }: AdminPostFormProps) {
  const action = post
    ? updatePostAction.bind(null, post.id)
    : createPostAction
  const [state, formAction, pending] = useActionState(action, undefined)

  return (
    <form action={formAction} className="space-y-5">
      <div>
        <label htmlFor="title" className="text-sm font-medium text-ink">
          Title
        </label>
        <Input
          id="title"
          name="title"
          required
          defaultValue={post?.title ?? ""}
          className="mt-2 h-10"
        />
      </div>

      <div>
        <label htmlFor="slug" className="text-sm font-medium text-ink">
          Slug (optional)
        </label>
        <Input
          id="slug"
          name="slug"
          defaultValue={post?.slug ?? ""}
          className="mt-2 h-10"
          placeholder="auto-generated-from-title"
        />
      </div>

      <div>
        <label htmlFor="type" className="text-sm font-medium text-ink">
          Type
        </label>
        <select
          id="type"
          name="type"
          defaultValue={post?.type ?? "article"}
          className="mt-2 flex h-10 w-full rounded-lg border border-input bg-transparent px-2.5 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          <option value="article">Article</option>
          <option value="achievement">Achievement</option>
        </select>
      </div>

      <div>
        <label htmlFor="excerpt" className="text-sm font-medium text-ink">
          Excerpt
        </label>
        <Textarea
          id="excerpt"
          name="excerpt"
          rows={3}
          defaultValue={post?.excerpt ?? ""}
          className="mt-2"
          placeholder="Short summary shown on cards"
        />
      </div>

      <div>
        <label htmlFor="coverImageUrl" className="text-sm font-medium text-ink">
          Cover image URL (optional)
        </label>
        <Input
          id="coverImageUrl"
          name="coverImageUrl"
          type="url"
          defaultValue={post?.coverImageUrl ?? ""}
          className="mt-2 h-10"
          placeholder="https://…"
        />
      </div>

      <div>
        <label htmlFor="body" className="text-sm font-medium text-ink">
          Body (Markdown)
        </label>
        <Textarea
          id="body"
          name="body"
          required
          rows={14}
          defaultValue={post?.body ?? ""}
          className="mt-2 font-mono text-sm"
          placeholder="Write your post in Markdown…"
        />
      </div>

      <label className="flex items-center gap-2 text-sm text-ink">
        <input
          type="checkbox"
          name="published"
          defaultChecked={post?.published ?? false}
          className="size-4 rounded border-border"
        />
        Publish immediately
      </label>

      {state?.error ? (
        <p className="text-sm text-destructive" role="alert">
          {state.error}
        </p>
      ) : null}

      <div className="flex flex-wrap gap-3">
        <Button type="submit" size="lg" disabled={pending}>
          {pending ? "Saving…" : post ? "Update post" : "Create post"}
        </Button>
      </div>
    </form>
  )
}
