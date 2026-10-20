"use client"

import Link from "next/link"
import { motion, useReducedMotion } from "motion/react"
import { heroCopy, siteConfig } from "@/data/site"
import { DataMotif } from "@/components/data-motif"
import { DownloadCvButton } from "@/components/download-cv-button"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="hero-glow relative overflow-hidden border-b border-border">
      <div className="container-page grid items-center gap-8 py-10 sm:gap-12 sm:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-24">
        <div className="min-w-0">
          <motion.p
            className="text-xs font-medium tracking-[0.04em] text-teal sm:text-sm sm:tracking-[0.06em] sm:uppercase"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className="sm:hidden">{siteConfig.title}</span>
            <span className="hidden sm:inline">{heroCopy.identity}</span>
          </motion.p>

          <motion.h1
            className="mt-3 font-heading text-[1.85rem] font-semibold leading-[1.15] tracking-tight text-ink text-balance sm:mt-4 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: prefersReducedMotion ? 0 : 0.05 }}
          >
            {heroCopy.headline}
          </motion.h1>

          <motion.p
            className="mt-4 text-[0.95rem] leading-relaxed text-ink-muted sm:mt-5 sm:max-w-xl sm:text-lg"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: prefersReducedMotion ? 0 : 0.1 }}
          >
            {heroCopy.supporting}
          </motion.p>

          <motion.p
            className="mt-3 hidden max-w-xl text-base leading-relaxed text-ink-muted sm:block"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: prefersReducedMotion ? 0 : 0.12 }}
          >
            {heroCopy.supportingSecondary}
          </motion.p>

          <motion.div
            className="mt-7 flex flex-col gap-2.5 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-3"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: prefersReducedMotion ? 0 : 0.15 }}
          >
            <Button
              size="lg"
              className="w-full sm:w-auto"
              nativeButton={false}
              render={<Link href="/projects" />}
            >
              View my projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto"
              nativeButton={false}
              render={<Link href="/contact" />}
            >
              Contact me
            </Button>
            <DownloadCvButton className="w-full sm:w-auto" />
          </motion.div>

          <motion.ul
            className="mt-6 flex flex-wrap gap-1.5 sm:mt-8 sm:gap-2"
            aria-label="Core expertise"
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: prefersReducedMotion ? 0 : 0.2 }}
          >
            {heroCopy.expertiseLabels.map((label) => (
              <li key={label}>
                <Badge
                  variant="outline"
                  className="rounded-md px-2 py-0.5 text-[0.7rem] sm:px-2.5 sm:py-1 sm:text-xs"
                >
                  {label}
                </Badge>
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          className="mx-auto hidden w-full max-w-sm justify-self-end sm:block lg:mx-0 lg:max-w-none"
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: prefersReducedMotion ? 0 : 0.1 }}
        >
          <DataMotif />
        </motion.div>
      </div>
    </section>
  )
}
