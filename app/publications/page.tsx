import type { Metadata } from "next"
import { PublicationItem } from "@/components/publication-item"
import { SectionHeading } from "@/components/section-heading"
import { publications } from "@/data/publications"

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Publications and research data outputs associated with Amanuel Tadele, including the National Survey on Persons with Disabilities in Ethiopia research data record.",
}

export default function PublicationsPage() {
  return (
    <div className="section-y">
      <div className="container-page">
        <SectionHeading
          eyebrow="Publications"
          title="Research data and scholarly outputs"
          description="Published research datasets and collaborative survey outputs."
        />

        <div className="mt-10 space-y-5">
          {publications.map((publication) => (
            <PublicationItem
              key={publication.id}
              publication={publication}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
