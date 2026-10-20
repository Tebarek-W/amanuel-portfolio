"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ExternalLink, Maximize2, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type CredentialLightboxProps = {
  src: string
  alt: string
  title: string
  subtitle?: string
  aspectClassName?: string
  verifyUrl?: string
  credentialId?: string
}

export function CredentialLightbox({
  src,
  alt,
  title,
  subtitle,
  aspectClassName = "aspect-[4/3]",
  verifyUrl,
  credentialId,
}: CredentialLightboxProps) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false)
      }
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [open])

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          "group relative block w-full overflow-hidden rounded-lg border border-border bg-muted/40 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
          aspectClassName
        )}
        aria-label={`Preview credential: ${title}`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-contain p-2 transition-transform duration-300 group-hover:scale-[1.02]"
        />
        <span className="pointer-events-none absolute right-2.5 bottom-2.5 inline-flex items-center gap-1.5 rounded-md bg-ink/85 px-2.5 py-1 text-xs font-medium text-primary-foreground opacity-90 shadow-xs transition-opacity group-hover:opacity-100">
          <Maximize2 className="size-3.5" aria-hidden />
          Inspect scan
        </span>
      </button>

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={title}
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 p-4 backdrop-blur-xs sm:p-6"
          onClick={() => setOpen(false)}
        >
          <div
            className="surface-panel relative flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden bg-paper shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-border px-5 py-4">
              <div>
                <h3 className="font-heading text-lg font-semibold text-ink">
                  {title}
                </h3>
                {subtitle ? (
                  <p className="mt-0.5 text-xs text-ink-muted">{subtitle}</p>
                ) : null}
              </div>
              <Button
                variant="ghost"
                size="icon-sm"
                onClick={() => setOpen(false)}
                aria-label="Close preview"
              >
                <X className="size-4" aria-hidden />
              </Button>
            </div>

            <div className="relative min-h-[55vh] flex-1 bg-muted/30 p-4 sm:min-h-[65vh]">
              <Image
                src={src}
                alt={alt}
                fill
                sizes="90vw"
                className="object-contain p-3"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border px-5 py-3 text-xs text-ink-muted">
              <div className="flex flex-wrap items-center gap-3">
                {credentialId ? (
                  <span className="font-mono">
                    Credential ID: <strong className="text-ink">{credentialId}</strong>
                  </span>
                ) : (
                  <span>Official document scan</span>
                )}
                {verifyUrl ? (
                  <a
                    href={verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-medium text-teal hover:underline"
                  >
                    Verify on Coursera
                    <ExternalLink className="size-3.5" aria-hidden />
                  </a>
                ) : null}
              </div>
              <a
                href={src}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-medium text-ink hover:text-teal"
              >
                Open image in new tab
                <ExternalLink className="size-3.5" aria-hidden />
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
