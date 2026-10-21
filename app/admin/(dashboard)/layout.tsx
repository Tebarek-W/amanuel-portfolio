import Link from "next/link"
import { redirect } from "next/navigation"
import { Suspense } from "react"
import { logoutAction } from "@/app/admin/actions"
import { Button } from "@/components/ui/button"
import { isDatabaseConfigured } from "@/db"
import { isAdminAuthenticated } from "@/lib/auth"

/** Admin uses cookies() for auth — allow blocking Instant Shell. */
export const instant = false

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Suspense fallback={<AdminLayoutFallback />}>
      <AdminAuthGate>{children}</AdminAuthGate>
    </Suspense>
  )
}

async function AdminAuthGate({ children }: { children: React.ReactNode }) {
  if (!(await isAdminAuthenticated())) {
    redirect("/admin/login")
  }

  return (
    <div>
      <div className="border-b border-border bg-surface">
        <div className="container-page flex flex-wrap items-center justify-between gap-3 py-4">
          <div>
            <p className="font-heading text-lg font-semibold text-ink">
              Blog admin
            </p>
            <p className="text-xs text-ink-muted">
              Create and publish articles &amp; achievements
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              nativeButton={false}
              render={<Link href="/admin" />}
            >
              All posts
            </Button>
            <Button
              size="sm"
              nativeButton={false}
              render={<Link href="/admin/posts/new" />}
            >
              New post
            </Button>
            <Button
              variant="outline"
              size="sm"
              nativeButton={false}
              render={<Link href="/blog" />}
            >
              View blog
            </Button>
            <form action={logoutAction}>
              <Button type="submit" variant="ghost" size="sm">
                Sign out
              </Button>
            </form>
          </div>
        </div>
      </div>

      {!isDatabaseConfigured() ? (
        <div className="container-page pt-6">
          <p className="rounded-lg border border-dashed border-border bg-muted/40 p-4 text-sm text-ink-muted">
            <strong className="text-ink">DATABASE_URL</strong> is not set. Add a
            Neon connection string to <code>.env.local</code> and run{" "}
            <code>npm run db:push</code>.
          </p>
        </div>
      ) : null}

      {children}
    </div>
  )
}

function AdminLayoutFallback() {
  return (
    <div className="container-page section-y">
      <div className="h-10 w-48 animate-pulse rounded-md bg-muted" />
      <div className="mt-8 h-40 animate-pulse rounded-lg bg-muted" />
    </div>
  )
}
