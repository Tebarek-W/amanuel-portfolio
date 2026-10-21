import type { Metadata } from "next"
import { redirect } from "next/navigation"
import { Suspense } from "react"
import { AdminLoginForm } from "@/components/admin-login-form"
import { SectionHeading } from "@/components/section-heading"
import { isAdminAuthenticated } from "@/lib/auth"

export const metadata: Metadata = {
  title: "Admin Login",
  robots: { index: false, follow: false },
}

/** Login checks session cookies — allow blocking Instant Shell. */
export const instant = false

export default function AdminLoginPage() {
  return (
    <Suspense fallback={<LoginFallback />}>
      <AdminLoginContent />
    </Suspense>
  )
}

async function AdminLoginContent() {
  if (await isAdminAuthenticated()) {
    redirect("/admin")
  }

  return (
    <div className="section-y">
      <div className="container-page max-w-md">
        <SectionHeading
          eyebrow="Admin"
          title="Sign in to manage posts"
          description="Use the admin password configured on the server to create articles and achievements."
        />
        <div className="surface-panel mt-8 p-6">
          <AdminLoginForm />
        </div>
      </div>
    </div>
  )
}

function LoginFallback() {
  return (
    <div className="section-y">
      <div className="container-page max-w-md">
        <div className="h-8 w-40 animate-pulse rounded bg-muted" />
        <div className="mt-8 h-48 animate-pulse rounded-lg bg-muted" />
      </div>
    </div>
  )
}
