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
  const citation = (
    <>
      {authors},{" "}
      <strong className="font-semibold text-ink">
        &ldquo;{publication.title}.&rdquo;
      </strong>{" "}
      {publication.venue}, {publication.dateLabel}.
      {publication.doi ? (
        <>
          {" "}
          {publication.url ? (
            <a
              href={publication.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              doi: {publication.doi}
            </a>
          ) : (
            <>doi: {publication.doi}</>
          )}
        </>
      ) : null}
    </>
  )

  if (variant === "card") {
    return (
      <article className={cn("surface-panel-interactive p-5 sm:p-6", className)}>
        <p className="text-sm leading-relaxed text-ink-muted">{citation}</p>
      </article>
    )
  }

  return (
    <li className={cn("pl-1 text-sm leading-relaxed text-ink sm:text-[0.95rem]", className)}>
      {citation}
    </li>
  )
}
