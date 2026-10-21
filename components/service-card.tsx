import Link from "next/link"
import type { Service } from "@/data/services"
import { MotionReveal } from "@/components/motion-reveal"
import { cn } from "@/lib/utils"

type ServiceCardProps = {
  service: Service
  index?: number
  href?: string
  className?: string
}

export function ServiceCard({
  service,
  index = 0,
  href = "/services",
  className,
}: ServiceCardProps) {
  return (
    <MotionReveal delay={Math.min(index * 0.04, 0.2)}>
      <article className={cn("surface-panel-interactive group h-full p-5", className)}>
        <p className="font-mono text-xs text-teal">
          {String(index + 1).padStart(2, "0")}
        </p>
        <h3 className="mt-3 font-heading text-lg font-semibold text-ink transition-colors group-hover:text-teal">
          <Link
            href={`${href}#${service.slug}`}
            className="rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            {service.title}
          </Link>
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-muted">
          {service.summary}
        </p>
        <ul className="mt-4 space-y-2">
          {service.deliverables.slice(0, 3).map((item) => (
            <li
              key={item}
              className="flex gap-2 text-sm text-ink-muted before:mt-2 before:size-1 before:shrink-0 before:rounded-full before:bg-teal before:content-['']"
            >
              {item}
            </li>
          ))}
        </ul>
      </article>
    </MotionReveal>
  )
}
