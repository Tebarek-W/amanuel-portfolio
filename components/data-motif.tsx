"use client"

import { motion, useReducedMotion } from "motion/react"

/** Abstract data-inspired graphic for the hero — decorative only. */
export function DataMotif() {
  const prefersReducedMotion = useReducedMotion()

  const bars = [42, 68, 55, 82, 48, 74, 60, 88]

  return (
    <div
      className="relative aspect-square w-full max-w-md"
      aria-hidden
    >
      <div className="absolute inset-0 rounded-2xl border border-border/80 bg-surface-elevated/80 shadow-[0_8px_30px_oklch(0.22_0.035_250_/_0.06)]" />
      <div className="absolute inset-4 rounded-xl border border-dashed border-border editorial-grid opacity-70" />

      <svg
        viewBox="0 0 320 320"
        className="absolute inset-0 size-full p-8"
        role="presentation"
      >
        <motion.path
          d="M40 220 C80 180, 100 240, 140 190 C180 140, 200 170, 260 120"
          fill="none"
          stroke="oklch(0.42 0.07 210)"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={prefersReducedMotion ? false : { pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        {bars.map((height, index) => {
          const x = 48 + index * 28
          const y = 260 - height
          return (
            <motion.rect
              key={x}
              x={x}
              y={y}
              width="14"
              height={height}
              rx="2"
              fill={
                index % 2 === 0
                  ? "oklch(0.42 0.07 210 / 0.35)"
                  : "oklch(0.22 0.035 250 / 0.18)"
              }
              initial={prefersReducedMotion ? false : { scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 1 }}
              style={{ transformOrigin: `${x + 7}px 260px` }}
              transition={{
                duration: 0.5,
                delay: prefersReducedMotion ? 0 : 0.15 + index * 0.05,
                ease: "easeOut",
              }}
            />
          )
        })}
        {[
          [90, 150],
          [150, 130],
          [210, 100],
          [250, 145],
        ].map(([cx, cy], index) => (
          <motion.circle
            key={`${cx}-${cy}`}
            cx={cx}
            cy={cy}
            r="4"
            fill="oklch(0.42 0.07 210)"
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: prefersReducedMotion ? 0 : 0.6 + index * 0.08 }}
          />
        ))}
      </svg>

      <div className="absolute right-6 bottom-6 left-6 rounded-md border border-border bg-paper/90 px-3 py-2 backdrop-blur-sm">
        <p className="font-mono text-[0.65rem] tracking-wide text-ink-muted uppercase">
          Survey → Quality → Insight
        </p>
      </div>
    </div>
  )
}
