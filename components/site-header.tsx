"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { siteConfig } from "@/data/site"
import { DownloadCvButton } from "@/components/download-cv-button"
import { MobileNavigation } from "@/components/mobile-navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-paper/90 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="group flex min-w-0 flex-col focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          <span className="truncate font-heading text-sm font-semibold tracking-tight text-ink sm:text-base">
            {siteConfig.name}
          </span>
          <span className="truncate text-[0.7rem] tracking-[0.08em] text-ink-muted uppercase">
            Data Manager · Survey Programmer
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 md:flex"
        >
          {siteConfig.nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-2.5 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
                  active
                    ? "bg-teal-muted text-ink"
                    : "text-ink-muted hover:bg-muted hover:text-ink"
                )}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <DownloadCvButton
            className="hidden lg:inline-flex"
            size="default"
            showIcon={false}
          />
          <Button
            nativeButton={false}
            render={<Link href="/contact" />}
            className="hidden sm:inline-flex"
            size="lg"
          >
            Let&apos;s Connect
          </Button>
          <MobileNavigation />
        </div>
      </div>
    </header>
  )
}
