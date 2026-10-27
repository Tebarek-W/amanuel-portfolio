import type { Publication } from "@/data/publications"
import { formatAuthorList } from "@/data/publications"
import { cn } from "@/lib/utils"

type PublicationItemProps = {
  publication: Publication
  className?: string
  /** Compact citation row for category lists (default). */
  variant?: "list" | "card"
}

export function PublicationItem({
  publication,
  className,
  variant = "list",
}: PublicationItemProps) {
  const authors = formatAuthorList(publication.authors)

  if (variant === "card") {
    return (
      <article className={cn("surface-panel-interactive p-5 sm:p-6", className)}>
        <p className="font-mono text-xs text-ink-muted">{publication.dateLabel}</p>
        <h3 className="mt-3 font-heading text-xl font-semibold tracking-tight text-ink text-balance">
          {publication.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-muted">
          {authors}
        </p>
        <p className="mt-3 text-sm text-ink-muted">{publication.venue}</p>
      </article>
    )
  }

  return (
    <li className={cn("pl-1", className)}>
      <p className="font-heading text-base font-semibold tracking-tight text-ink text-balance sm:text-lg">
        {publication.title}
      </p>
      <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
        <span>{authors}</span>
        <span>, {publication.venue}, {publication.dateLabel}.</span>
      </p>
    </li>
  )
}
