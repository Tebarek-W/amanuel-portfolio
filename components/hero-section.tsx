"use client"

import Link from "next/link"
import { motion, useReducedMotion } from "motion/react"
import { heroCopy } from "@/data/site"
import { DataMotif } from "@/components/data-motif"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="hero-glow relative overflow-hidden border-b border-border">
      <div className="container-page grid items-center gap-8 py-12 sm:gap-12 sm:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-24">
        <div className="min-w-0">
          <motion.h1
            className="max-w-[18ch] font-heading text-[1.95rem] font-semibold leading-[1.12] tracking-tight text-ink text-balance sm:max-w-xl sm:text-5xl lg:text-[3.35rem] lg:leading-[1.08]"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            {heroCopy.headline}
          </motion.h1>

          <motion.p
            className="mt-5 max-w-xl text-[0.98rem] leading-relaxed text-ink-muted sm:text-lg"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: prefersReducedMotion ? 0 : 0.1 }}
          >
            {heroCopy.supporting}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-3"
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
          </motion.div>

          <motion.ul
            className="mt-8 flex flex-wrap gap-2 border-t border-border/70 pt-6"
            aria-label="Core expertise"
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: prefersReducedMotion ? 0 : 0.2 }}
          >
            {heroCopy.expertiseLabels.map((label) => (
              <li key={label}>
                <Badge
                  variant="outline"
                  className="rounded-md border-border/80 bg-surface-elevated/70 px-2.5 py-1 text-[0.7rem] sm:text-xs"
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
