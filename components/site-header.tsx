"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { siteConfig } from "@/data/site"
import { MobileNavigation } from "@/components/mobile-navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-paper/90 backdrop-blur-md">
      <div className="container-page flex h-14 items-center justify-between gap-3 sm:h-16 sm:gap-4">
        <Link
          href="/"
          className="group min-w-0 flex-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          <span className="block font-heading text-sm font-semibold tracking-tight text-ink sm:text-base">
            {siteConfig.name}
          </span>
          <span className="mt-0.5 hidden text-[0.7rem] tracking-[0.08em] text-ink-muted uppercase sm:block">
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

        <div className="flex shrink-0 items-center gap-2">
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
