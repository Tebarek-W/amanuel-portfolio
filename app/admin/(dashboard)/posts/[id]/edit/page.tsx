import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Suspense } from "react"
import { AdminPostForm } from "@/components/admin-post-form"
import { SectionHeading } from "@/components/section-heading"
import { getPostById } from "@/lib/posts"

export const metadata: Metadata = {
  title: "Edit post",
  robots: { index: false, follow: false },
}

export const instant = false

type EditPageProps = {
  params: Promise<{ id: string }>
}

export default function AdminEditPostPage({ params }: EditPageProps) {
  return (
    <div className="section-y !pt-10">
      <div className="container-page max-w-3xl">
        <SectionHeading
          eyebrow="Edit"
          title="Update post"
          description="Changes to published posts appear on the public blog after saving."
        />
        <Suspense fallback={<div className="mt-8 h-64 animate-pulse rounded-lg bg-muted" />}>
          <EditPostContent params={params} />
        </Suspense>
      </div>
    </div>
  )
}

async function EditPostContent({
  params,
}: {
  params: EditPageProps["params"]
}) {
  const { id } = await params
  const post = await getPostById(id)
  if (!post) notFound()

  return (
    <div className="surface-panel mt-8 p-5 sm:p-6">
      <AdminPostForm post={post} />
    </div>
  )
}
