import type { Metadata } from "next"
import { PublicationItem } from "@/components/publication-item"
import { SectionHeading } from "@/components/section-heading"
import {
  getPublicationsByCategory,
  publicationCategories,
  publicationCategoryLabels,
} from "@/data/publications"
import { pageSeo } from "@/lib/seo"

export const metadata: Metadata = pageSeo({
  title: "Publications",
  description:
    "Journal articles and research data outputs associated with Amanuel Tadele.",
  path: "/publications",
})

export default function PublicationsPage() {
  return (
    <div className="section-y">
      <div className="container-page">
        <SectionHeading title="Publications" />

        <div className="mt-10 space-y-12">
          {publicationCategories.map((category) => {
            const items = getPublicationsByCategory(category)
            const label = publicationCategoryLabels[category]

            return (
              <section
                key={category}
                aria-labelledby={`publications-${category}`}
              >
                <h2
                  id={`publications-${category}`}
                  className="font-heading text-xl font-semibold tracking-tight text-ink sm:text-2xl"
                >
                  {label}
                </h2>

                {items.length > 0 ? (
                  <ol className="mt-2 list-none border-t border-border">
                    {items.map((publication) => (
                      <PublicationItem
                        key={publication.id}
                        publication={publication}
                        variant="list"
                      />
                    ))}
                  </ol>
                ) : (
                  <p className="mt-4 border-t border-border pt-5 text-sm text-ink-muted">
                    No {label.toLowerCase()} listed yet.
                  </p>
                )}
              </section>
            )
          })}
        </div>
      </div>
    </div>
  )
}
