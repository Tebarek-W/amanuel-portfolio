"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu } from "lucide-react"
import { siteConfig } from "@/data/site"
import { DownloadCvButton } from "@/components/download-cv-button"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function MobileNavigation() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button
            variant="outline"
            size="icon"
            className="md:hidden"
            aria-label="Open navigation menu"
          />
        }
      >
        <Menu className="size-4" aria-hidden />
      </SheetTrigger>
      <SheetContent side="right" className="w-[min(100%,20rem)] p-0">
        <SheetHeader className="border-b border-border p-5">
          <SheetTitle className="text-left">{siteConfig.shortName}</SheetTitle>
          <SheetDescription className="text-left">
            {siteConfig.title}
          </SheetDescription>
        </SheetHeader>
        <nav aria-label="Mobile" className="flex flex-col gap-1 p-4">
          {siteConfig.nav.map((item) => (
            <SheetClose
              key={item.href}
              render={
                <Link
                  href={item.href}
                  className="rounded-md px-3 py-3 text-base font-medium text-ink transition-colors hover:bg-teal-muted/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  onClick={() => setOpen(false)}
                />
              }
            >
              {item.label}
            </SheetClose>
          ))}
          <div className="mt-3 space-y-2">
            <DownloadCvButton className="w-full" />
            <SheetClose
              render={
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center rounded-md bg-ink px-3 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-ink/90"
                  onClick={() => setOpen(false)}
                />
              }
            >
              Let&apos;s Connect
            </SheetClose>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
