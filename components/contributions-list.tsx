import Link from "next/link"
import { ExternalLink } from "lucide-react"
import {
  contributionYears,
  getContributionsByYear,
} from "@/data/contributions"

/**
 * Year-grouped data management contributions.
 * Each row links to an in-site project page and/or an external source.
 */
export function ContributionsList() {
  return (
    <div className="space-y-10">
      {contributionYears.map((year) => {
        const items = getContributionsByYear(year)
        return (
          <section key={year} aria-labelledby={`contributions-${year}`}>
            <h3
              id={`contributions-${year}`}
              className="font-heading text-xl font-semibold text-ink"
            >
              {year}
            </h3>
            <ol className="mt-4 space-y-3">
              {items.map((item, index) => (
                <li
                  key={`${year}-${item.title}`}
                  className="surface-panel flex flex-col gap-3 p-4 sm:flex-row sm:items-start sm:justify-between"
                >
                  <div className="min-w-0">
                    <p className="font-mono text-xs text-teal">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-1 text-sm font-medium leading-snug text-ink text-balance sm:text-base">
                      {item.projectSlug ? (
                        <Link
                          href={`/projects/${item.projectSlug}`}
                          className="rounded-sm hover:text-teal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                        >
                          {item.title}
                        </Link>
                      ) : (
                        item.title
                      )}
                    </p>
                  </div>

                  {item.sourceUrl ? (
                    <div className="flex shrink-0 flex-wrap gap-3 text-sm">
                      <a
                        href={item.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-medium text-teal hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                      >
                        {item.sourceLabel ?? "Source"}
                        <ExternalLink className="size-3.5" aria-hidden />
                      </a>
                    </div>
                  ) : null}
                </li>
              ))}
            </ol>
          </section>
        )
      })}
    </div>
  )
}
