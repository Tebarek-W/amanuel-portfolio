import type { Metadata } from "next"
import { ExternalLink } from "lucide-react"
import { ProjectsFilter } from "@/components/projects-filter"
import { SectionHeading } from "@/components/section-heading"
import { projects } from "@/data/projects"
import { siteConfig } from "@/data/site"

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected research projects where Amanuel Tadele Dabarsho contributed as a data manager or database manager across national surveys and applied research studies.",
}

export default function ProjectsPage() {
  const withLinks = projects.filter((project) => project.externalUrl).length

  return (
    <div className="section-y">
      <div className="container-page">
        <SectionHeading
          eyebrow="Projects"
          title="Research data management portfolio"
          description="Browse documented project contributions from the CV and public Google Site. Survey sizes and dates appear only where the CV lists them. External links open institutional or registry pages associated with the work."
        />

        <div className="mt-6 flex flex-col gap-3 rounded-lg border border-border bg-surface p-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-ink-muted">
            {withLinks} projects include public source links curated from the{" "}
            <a
              href={siteConfig.dataManagementContributions.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-teal underline-offset-2 hover:underline"
            >
              Google Site contributions list
            </a>
            .
          </p>
          <a
            href={siteConfig.dataManagementContributions.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-ink hover:text-teal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            Open full list
            <ExternalLink className="size-3.5" aria-hidden />
          </a>
        </div>

        <div className="mt-10">
          <ProjectsFilter projects={projects} />
        </div>
      </div>
    </div>
  )
}
