import { ExternalLink } from "lucide-react"
import type { Publication } from "@/data/publications"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

type PublicationItemProps = {
  publication: Publication
  className?: string
}

export function PublicationItem({ publication, className }: PublicationItemProps) {
  return (
    <article className={cn("surface-panel p-5 sm:p-6", className)}>
      <div className="flex flex-wrap items-center gap-2">
        <Badge variant="outline">Research data</Badge>
        <span className="text-xs text-ink-muted">{publication.dateLabel}</span>
      </div>

      <h3 className="mt-4 font-heading text-xl font-semibold tracking-tight text-ink text-balance">
        {publication.title}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-ink-muted">
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

      <p className="mt-3 text-sm text-ink-muted">{publication.venue}</p>

      {publication.doi ? (
        <div className="mt-4 flex flex-wrap items-center gap-3">
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
          {publication.doiStatus === "as-supplied" ? (
            <span className="text-xs text-ink-muted">
              Displayed as supplied — independent verification pending
            </span>
          ) : null}
        </div>
      ) : null}

      {publication.note ? (
        <p className="mt-3 text-xs leading-relaxed text-ink-muted">{publication.note}</p>
      ) : null}
    </article>
  )
}
