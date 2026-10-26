import { ExternalLink } from "lucide-react"
import type { Publication } from "@/data/publications"
import { cn } from "@/lib/utils"

type PublicationItemProps = {
  publication: Publication
  className?: string
  /** Compact row for category lists (default). */
  variant?: "list" | "card"
}

export function PublicationItem({
  publication,
  className,
  variant = "list",
}: PublicationItemProps) {
  const authors = (
    <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
      {publication.authors.map((author, index) => (
        <span key={author}>
          {author === "Amanuel Tadele" ? (
            <strong className="font-semibold text-ink">{author}</strong>
          ) : (
            author
          )}
          {index < publication.authors.length - 1 ? ", " : ""}
        </span>
      ))}
    </p>
  )

  const meta = (
    <p className="mt-1.5 text-sm text-ink-muted">
      <span>{publication.venue}</span>
      <span className="text-border"> · </span>
      <span>{publication.dateLabel}</span>
    </p>
  )

  const doi = publication.doi ? (
    <div className="mt-2">
      {publication.url ? (
        <a
          href={publication.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-teal hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          DOI: {publication.doi}
          <ExternalLink className="size-3.5" aria-hidden />
        </a>
      ) : (
        <span className="text-sm text-ink-muted">DOI: {publication.doi}</span>
      )}
    </div>
  ) : null

  const note = publication.note ? (
    <p className="mt-2 text-xs leading-relaxed text-ink-muted">{publication.note}</p>
  ) : null

  if (variant === "card") {
    return (
      <article className={cn("surface-panel-interactive p-5 sm:p-6", className)}>
        <p className="font-mono text-xs text-ink-muted">{publication.dateLabel}</p>
        <h3 className="mt-3 font-heading text-xl font-semibold tracking-tight text-ink text-balance">
          {publication.title}
        </h3>
        {authors}
        <p className="mt-3 text-sm text-ink-muted">{publication.venue}</p>
        {doi}
        {note}
      </article>
    )
  }

  return (
    <li className={cn("border-b border-border/70 py-5 last:border-b-0", className)}>
      <h3 className="font-heading text-base font-semibold tracking-tight text-ink text-balance sm:text-lg">
        {publication.title}
      </h3>
      {authors}
      {meta}
      {doi}
      {note}
    </li>
  )
}
