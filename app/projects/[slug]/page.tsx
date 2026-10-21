import type { Metadata } from "next"
import Link from "next/link"
import { Suspense } from "react"
import { notFound } from "next/navigation"
import {
  getAllProjectSlugs,
  getProjectBySlug,
  projectCategories,
} from "@/data/projects"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { pageSeo } from "@/lib/seo"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"

type ProjectPageProps = PageProps<"/projects/[slug]">

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) {
    return { title: "Project not found" }
  }
  return pageSeo({
    title: project.title,
    description: project.summary,
    path: `/projects/${project.slug}`,
  })
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  return (
    <div className="section-y">
      <div className="container-page max-w-3xl">
        <Link
          href="/projects"
          className={cn(
            buttonVariants({ variant: "ghost", size: "sm" }),
            "mb-6 -ml-2"
          )}
        >
          <ArrowLeft className="size-4" aria-hidden />
          All projects
        </Link>

        <Suspense fallback={<ProjectDetailFallback />}>
          <ProjectDetailContent params={params} />
        </Suspense>
      </div>
    </div>
  )
}

async function ProjectDetailContent({
  params,
}: {
  params: ProjectPageProps["params"]
}) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return (
    <>
      <div className="flex flex-wrap items-center gap-2">
        <Badge variant="secondary">
          {projectCategories[project.category].label}
        </Badge>
        <Badge variant="outline">{project.domain}</Badge>
      </div>

      <h1 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-ink text-balance sm:text-4xl">
        {project.title}
      </h1>

      <dl className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="surface-panel p-4">
          <dt className="text-xs tracking-wide text-ink-muted uppercase">
            Organization
          </dt>
          <dd className="mt-1 text-sm font-medium text-ink">
            {project.organization}
          </dd>
        </div>
        <div className="surface-panel p-4">
          <dt className="text-xs tracking-wide text-ink-muted uppercase">
            Timeline
          </dt>
          <dd className="mt-1 text-sm font-medium text-ink">
            {project.dateLabel}
          </dd>
        </div>
        {project.surveySize ? (
          <div className="surface-panel p-4 sm:col-span-2">
            <dt className="text-xs tracking-wide text-ink-muted uppercase">
              Documented survey scale
            </dt>
            <dd className="mt-1 font-mono text-sm font-medium text-teal">
              {project.surveySize}
            </dd>
          </div>
        ) : null}
      </dl>

      <section className="mt-10">
        <h2 className="font-heading text-xl font-semibold text-ink">
          Research context
        </h2>
        <p className="mt-3 text-base leading-relaxed text-ink-muted">
          {project.summary}
        </p>
      </section>

      <section className="mt-10">
        <h2 className="font-heading text-xl font-semibold text-ink">
          Documented contribution
        </h2>
        <p className="mt-3 text-base leading-relaxed text-ink-muted">
          {project.contribution}
        </p>
        <ul className="mt-4 space-y-2">
          {project.responsibilities.map((item) => (
            <li
              key={item}
              className="flex gap-2 text-sm leading-relaxed text-ink-muted before:mt-2 before:size-1.5 before:shrink-0 before:rounded-full before:bg-teal before:content-['']"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      {project.tools && project.tools.length > 0 ? (
        <section className="mt-10">
          <h2 className="font-heading text-xl font-semibold text-ink">
            Tools mentioned
          </h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <li key={tool}>
                <Badge variant="outline">{tool}</Badge>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {project.externalUrl ? (
        <section className="mt-10">
          <h2 className="font-heading text-xl font-semibold text-ink">
            Related public source
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-muted">
            Institutional research page or project brief associated with this study.
          </p>
          <a
            href={project.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-teal hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            {project.externalLabel ?? "Open external source"}
            <ExternalLink className="size-4" aria-hidden />
          </a>
        </section>
      ) : null}
    </>
  )
}

function ProjectDetailFallback() {
  return (
    <div aria-hidden className="animate-pulse space-y-6">
      <div className="flex gap-2">
        <div className="h-5 w-28 rounded-md bg-muted" />
        <div className="h-5 w-36 rounded-md bg-muted" />
      </div>
      <div className="h-10 max-w-xl rounded-md bg-muted" />
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="h-20 rounded-lg bg-muted" />
        <div className="h-20 rounded-lg bg-muted" />
      </div>
      <div className="space-y-3 pt-4">
        <div className="h-6 w-40 rounded-md bg-muted" />
        <div className="h-4 w-full rounded-md bg-muted" />
        <div className="h-4 w-11/12 rounded-md bg-muted" />
      </div>
    </div>
  )
}
