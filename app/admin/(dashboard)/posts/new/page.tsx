import type { Metadata } from "next"
import { AdminPostForm } from "@/components/admin-post-form"
import { SectionHeading } from "@/components/section-heading"

export const metadata: Metadata = {
  title: "New post",
  robots: { index: false, follow: false },
}

export const instant = false

export default function AdminNewPostPage() {
  return (
    <div className="section-y !pt-10">
      <div className="container-page max-w-3xl">
        <SectionHeading
          eyebrow="Create"
          title="New post"
          description="Write an article or achievement. Markdown is supported in the body."
        />
        <div className="surface-panel mt-8 p-5 sm:p-6">
          <AdminPostForm />
        </div>
      </div>
    </div>
  )
}
