import type { Metadata } from "next"
import Link from "next/link"
import { redirect } from "next/navigation"
import { Suspense } from "react"
import { ArrowLeft, LockKeyhole } from "lucide-react"
import { AdminLoginForm } from "@/components/admin-login-form"
import { siteConfig } from "@/data/site"
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
    <div className="hero-glow relative flex min-h-[70vh] items-center border-b border-border">
      <div className="container-page w-full py-16 sm:py-20">
        <div className="mx-auto w-full max-w-md">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-1.5 text-sm text-ink-muted transition-colors hover:text-teal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            <ArrowLeft className="size-3.5" aria-hidden />
            Back to site
          </Link>

          <div className="surface-panel overflow-hidden">
            <div className="border-b border-border/80 bg-teal-muted/40 px-5 py-5 sm:px-7 sm:py-6">
              <div className="flex items-start gap-3">
                <span
                  className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-lg border border-teal/20 bg-paper text-teal shadow-sm"
                  aria-hidden
                >
                  <LockKeyhole className="size-5" />
                </span>
                <div>
                  <p className="font-mono text-[0.65rem] tracking-[0.16em] text-teal uppercase">
                    Admin
                  </p>
                  <h1 className="mt-1 font-heading text-2xl font-semibold tracking-tight text-ink text-balance sm:text-[1.7rem]">
                    Sign in to manage posts
                  </h1>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    Private area for {siteConfig.name} — create and publish
                    articles and achievements.
                  </p>
                </div>
              </div>
            </div>

            <div className="px-5 py-6 sm:px-7 sm:py-7">
              <AdminLoginForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function LoginFallback() {
  return (
    <div className="hero-glow flex min-h-[70vh] items-center">
      <div className="container-page w-full py-16">
        <div className="mx-auto max-w-md space-y-4">
          <div className="h-4 w-28 animate-pulse rounded bg-muted" />
          <div className="surface-panel h-64 animate-pulse bg-muted/50" />
        </div>
      </div>
    </div>
  )
}
