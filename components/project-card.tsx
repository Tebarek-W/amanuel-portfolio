import Link from "next/link"
import { ArrowUpRight, ExternalLink } from "lucide-react"
import type { Project } from "@/data/projects"
import { projectCategories } from "@/data/projects"
import { Badge } from "@/components/ui/badge"
import { MotionReveal } from "@/components/motion-reveal"
import { cn } from "@/lib/utils"

type ProjectCardProps = {
  project: Project
  index?: number
  className?: string
}

export function ProjectCard({ project, index = 0, className }: ProjectCardProps) {
  return (
    <MotionReveal delay={Math.min(index * 0.04, 0.2)}>
      <article
        className={cn(
          "surface-panel-interactive group flex h-full flex-col p-5",
          className
        )}
      >
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="secondary">
            {projectCategories[project.category].label}
          </Badge>
          <span className="text-xs text-ink-muted">{project.dateLabel}</span>
        </div>

        <h3 className="mt-4 font-heading text-lg font-semibold tracking-tight text-ink text-balance">
          <Link
            href={`/projects/${project.slug}`}
            className="rounded-sm transition-colors hover:text-teal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            {project.title}
          </Link>
        </h3>

        <p className="mt-2 text-sm text-ink-muted">{project.organization}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
          {project.contribution}
        </p>

        {project.surveySize ? (
          <p className="mt-4 border-t border-border pt-3 font-mono text-xs text-teal">
            {project.surveySize}
          </p>
        ) : null}

        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1 text-sm font-medium text-ink transition-colors group-hover:text-teal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            View project
            <ArrowUpRight className="size-4" aria-hidden />
          </Link>
          {project.externalUrl ? (
            <a
              href={project.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-teal hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              {project.externalLabel ?? "External source"}
              <ExternalLink className="size-3.5" aria-hidden />
            </a>
          ) : null}
        </div>
      </article>
    </MotionReveal>
  )
}
