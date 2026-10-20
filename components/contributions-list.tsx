import Link from "next/link"
import { ExternalLink } from "lucide-react"
import {
  contributionYears,
  contributionsListUrl,
  getContributionsByYear,
} from "@/data/contributions"

/**
 * Year-grouped mirror of the Google Site contributions page.
 * Each row links to an in-site project page and/or the original "Here" source.
 */
export function ContributionsList() {
  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-3 rounded-lg border border-border bg-surface p-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-ink-muted">
          This list mirrors Amanuel&apos;s public{" "}
          <a
            href={contributionsListUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-teal underline-offset-2 hover:underline"
          >
            Data Management Contributions in Research Projects
          </a>{" "}
          page. Use portfolio links for local detail pages, and source links for
          the institutional / registry pages originally labeled “Here”.
        </p>
        <a
          href={contributionsListUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-ink hover:text-teal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          Open Google Site list
          <ExternalLink className="size-3.5" aria-hidden />
        </a>
      </div>

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

                  <div className="flex shrink-0 flex-wrap gap-3 text-sm">
                    {item.projectSlug ? (
                      <Link
                        href={`/projects/${item.projectSlug}`}
                        className="font-medium text-ink hover:text-teal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                      >
                        Portfolio
                      </Link>
                    ) : null}
                    {item.sourceUrl ? (
                      <a
                        href={item.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-medium text-teal hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                      >
                        {item.sourceLabel ?? "Source"}
                        <ExternalLink className="size-3.5" aria-hidden />
                      </a>
                    ) : (
                      <span className="text-xs text-ink-muted">
                        No public source link on Google Site
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </section>
        )
      })}
    </div>
  )
}
