"use client"

import Link from "next/link"
import { motion, useReducedMotion } from "motion/react"
import { heroCopy, siteConfig } from "@/data/site"
import { DataMotif } from "@/components/data-motif"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="hero-glow relative overflow-hidden border-b border-border">
      <div className="container-page grid items-center gap-12 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-24">
        <div>
          <motion.p
            className="text-sm font-medium tracking-[0.06em] text-teal uppercase"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {heroCopy.identity}
          </motion.p>

          <motion.h1
            className="mt-4 max-w-xl font-heading text-4xl font-semibold tracking-tight text-ink text-balance sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: prefersReducedMotion ? 0 : 0.05 }}
          >
            {heroCopy.headline}
          </motion.h1>

          <motion.p
            className="mt-5 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: prefersReducedMotion ? 0 : 0.1 }}
          >
            {heroCopy.supporting}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: prefersReducedMotion ? 0 : 0.15 }}
          >
            <Button
              size="lg"
              nativeButton={false}
              render={<Link href="/projects" />}
            >
              Explore My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              nativeButton={false}
              render={<Link href="/contact" />}
            >
              Get in Touch
            </Button>
          </motion.div>

          <motion.ul
            className="mt-8 flex flex-wrap gap-2"
            aria-label="Core expertise"
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: prefersReducedMotion ? 0 : 0.2 }}
          >
            {heroCopy.expertiseLabels.map((label) => (
              <li key={label}>
                <Badge variant="outline" className="rounded-md px-2.5 py-1">
                  {label}
                </Badge>
              </li>
            ))}
          </motion.ul>

          <p className="mt-6 max-w-xl text-xs leading-relaxed text-ink-muted">
            {siteConfig.experienceNote}
          </p>
        </div>

        <motion.div
          className="mx-auto w-full justify-self-end lg:mx-0"
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
