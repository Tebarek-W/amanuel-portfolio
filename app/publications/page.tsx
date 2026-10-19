import type { Metadata } from "next"
import { PublicationItem } from "@/components/publication-item"
import { SectionHeading } from "@/components/section-heading"
import { publications } from "@/data/publications"

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Publications and research data outputs associated with Amanuel Tadele Dabarsho, including the National Survey on Persons with Disabilities in Ethiopia research data record.",
}

export default function PublicationsPage() {
  return (
    <div className="section-y">
      <div className="container-page">
        <SectionHeading
          eyebrow="Publications"
          title="Research data and documented outputs"
          description="Only records supplied in the CV and website brief are listed. Journal names, abstracts, and peer-review status are not invented."
        />

        <div className="mt-10 space-y-5">
          {publications.map((publication) => (
            <PublicationItem
              key={publication.id}
              publication={publication}
            />
          ))}
        </div>

        <p className="mt-8 text-sm text-ink-muted">
          The website brief includes a Journals heading without additional
          journal entries. When verified journal publications are available,
          they can be added to{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
            data/publications.ts
          </code>
          .
        </p>
      </div>
    </div>
  )
}
