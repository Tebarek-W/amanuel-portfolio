import { Code2, Link2, Send, X } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import type { SocialLink } from "@/data/site"
import { cn } from "@/lib/utils"

const iconMap: Record<string, LucideIcon> = {
  LinkedIn: Link2,
  GitHub: Code2,
  X: X,
  Telegram: Send,
}

type SocialLinksProps = {
  links: SocialLink[]
  className?: string
  showLabels?: boolean
}

export function SocialLinks({
  links,
  className,
  showLabels = false,
}: SocialLinksProps) {
  return (
    <ul className={cn("flex flex-wrap items-center gap-2", className)}>
      {links.map((link) => {
        const Icon = iconMap[link.label]
        return (
          <li key={link.href}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center gap-2 rounded-md border border-border bg-surface-elevated px-3 py-2 text-sm text-ink transition-colors hover:border-teal/40 hover:bg-teal-muted/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
                !showLabels && "size-10 justify-center px-0"
              )}
              aria-label={link.label}
            >
              {Icon ? <Icon className="size-4" aria-hidden /> : null}
              {showLabels ? <span>{link.label}</span> : null}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
