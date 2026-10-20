"use client"

import Image from "next/image"
import { motion, useReducedMotion } from "motion/react"
import { media } from "@/data/media"
import { siteConfig } from "@/data/site"
import { cn } from "@/lib/utils"

type PortraitFrameProps = {
  className?: string
  priority?: boolean
  caption?: string
}

export function PortraitFrame({
  className,
  priority = false,
  caption = siteConfig.roleLine,
}: PortraitFrameProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.figure
      className={cn(
        "relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-[26rem]",
        className
      )}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <div className="absolute -inset-3 -z-10 rounded-[1.75rem] bg-gradient-to-br from-teal/20 via-transparent to-ink/10" />
      <div className="editorial-grid absolute inset-6 -z-10 rounded-2xl opacity-40" />

      <div className="relative overflow-hidden rounded-[1.35rem] border border-border/80 bg-surface-elevated shadow-[0_18px_50px_oklch(0.22_0.035_250_/_0.12)]">
        <div className="relative aspect-[4/5] w-full">
          <Image
            src={media.portrait.src}
            alt={media.portrait.alt}
            fill
            priority={priority}
            sizes="(max-width: 1024px) 90vw, 420px"
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
        </div>

        <figcaption className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
          <p className="font-mono text-[0.68rem] tracking-[0.14em] text-teal-muted uppercase">
            {siteConfig.name}
          </p>
          <p className="mt-1 text-xs font-medium text-white/95 sm:text-sm">
            {caption}
          </p>
        </figcaption>
      </div>
    </motion.figure>
  )
}
