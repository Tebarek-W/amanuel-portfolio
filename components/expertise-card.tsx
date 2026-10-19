import type { ExpertiseArea } from "@/data/skills"
import { MotionReveal } from "@/components/motion-reveal"
import { cn } from "@/lib/utils"

type ExpertiseCardProps = {
  area: ExpertiseArea
  index?: number
  className?: string
}

export function ExpertiseCard({ area, index = 0, className }: ExpertiseCardProps) {
  return (
    <MotionReveal delay={Math.min(index * 0.05, 0.25)}>
      <article
        className={cn(
          "surface-panel h-full p-5 transition-colors hover:border-teal/30",
          className
        )}
      >
        <div className="mb-3 flex items-center gap-3">
          <span
            className="flex size-8 items-center justify-center rounded-md bg-teal-muted font-mono text-xs font-semibold text-teal"
            aria-hidden
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="font-heading text-base font-semibold text-ink">
            {area.title}
          </h3>
        </div>
        <p className="text-sm leading-relaxed text-ink-muted">{area.description}</p>
      </article>
    </MotionReveal>
  )
}
