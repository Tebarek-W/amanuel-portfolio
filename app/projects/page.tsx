import type { Metadata } from "next"
import { ContributionsList } from "@/components/contributions-list"
import { SectionHeading } from "@/components/section-heading"
import { pageSeo } from "@/lib/seo"

export const metadata: Metadata = pageSeo({
  title: "Projects",
  description:
    "Data management contributions across research programs where Amanuel Tadele supported survey operations, quality assurance, and analysis-ready datasets.",
  path: "/projects",
})

export default function ProjectsPage() {
  return (
    <div className="section-y">
      <div className="container-page">
        <SectionHeading
          eyebrow="Projects"
          title="Data management contributions"
        />
        <div className="mt-10">
          <ContributionsList />
        </div>
      </div>
    </div>
  )
}
