import type { Metadata } from "next"
import { ContributionsList } from "@/components/contributions-list"
import { ProjectsFilter } from "@/components/projects-filter"
import { SectionHeading } from "@/components/section-heading"
import { projects } from "@/data/projects"
import { pageSeo } from "@/lib/seo"

export const metadata: Metadata = pageSeo({
  title: "Projects",
  description:
    "Selected research projects and data management contributions where Amanuel Tadele supported survey operations, quality assurance, and analysis-ready datasets.",
  path: "/projects",
})

export default function ProjectsPage() {
  return (
    <div className="section-y">
      <div className="container-page space-y-16">
        <div>
          <SectionHeading
            eyebrow="Projects"
            title="Research data management portfolio"
            description="Browse CV-backed project cards with filters, then review the year-by-year contributions list mirrored from Amanuel’s public Google Site."
          />
          <div className="mt-10">
            <ProjectsFilter projects={projects} />
          </div>
        </div>

        <div>
          <SectionHeading
            eyebrow="Google Site mirror"
            title="Data management contributions by year"
            description="Structured the same way as the public contributions page (2022–2024), with portfolio detail pages and original source links."
          />
          <div className="mt-8">
            <ContributionsList />
          </div>
        </div>
      </div>
    </div>
  )
}
