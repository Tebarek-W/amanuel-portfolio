import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { siteConfig } from "@/data/site"
import { cn } from "@/lib/utils"

export default function NotFound() {
  return (
    <div className="hero-glow flex flex-1 items-center">
      <div className="container-page section-y max-w-2xl">
        <p className="font-mono text-sm text-teal">404</p>
        <h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight text-ink">
          Page not found
        </h1>
        <p className="mt-4 text-base leading-relaxed text-ink-muted">
          The page you requested is not part of {siteConfig.shortName}&apos;s
          portfolio. You can return home or browse projects and services.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/"
            className={cn(buttonVariants({ size: "lg" }))}
          >
            Back to homepage
          </Link>
          <Link
            href="/projects"
            className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
          >
            View projects
          </Link>
        </div>
      </div>
    </div>
  )
}
