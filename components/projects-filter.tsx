"use client"

import { useMemo, useState } from "react"
import {
  projectCategories,
  type Project,
  type ProjectCategory,
} from "@/data/projects"
import { ProjectCard } from "@/components/project-card"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

type ProjectsFilterProps = {
  projects: Project[]
}

type FilterKey = "all" | ProjectCategory

export function ProjectsFilter({ projects }: ProjectsFilterProps) {
  const [query, setQuery] = useState("")
  const [category, setCategory] = useState<FilterKey>("all")

  const usedCategories = useMemo(() => {
    const set = new Set(projects.map((project) => project.category))
    return (Object.keys(projectCategories) as ProjectCategory[]).filter((key) =>
      set.has(key)
    )
  }, [projects])

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase()
    return projects.filter((project) => {
      const matchesCategory =
        category === "all" || project.category === category
      const haystack = [
        project.title,
        project.organization,
        project.domain,
        project.contribution,
        project.summary,
      ]
        .join(" ")
        .toLowerCase()
      const matchesQuery = !normalized || haystack.includes(normalized)
      return matchesCategory && matchesQuery
    })
  }, [projects, query, category])

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="flex flex-col gap-4">
        <div className="w-full max-w-md">
          <label htmlFor="project-search" className="sr-only">
            Search projects
          </label>
          <Input
            id="project-search"
            type="search"
            placeholder="Search projects"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="w-full"
          />
        </div>

        <div
          className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0"
          role="group"
          aria-label="Filter by research domain"
        >
          <FilterChip
            active={category === "all"}
            onClick={() => setCategory("all")}
            label="All"
            count={projects.length}
          />
          {usedCategories.map((key) => (
            <FilterChip
              key={key}
              active={category === key}
              onClick={() => setCategory(key)}
              label={projectCategories[key].label}
              count={
                projects.filter((project) => project.category === key).length
              }
            />
          ))}
        </div>
      </div>

      <p className="text-sm text-ink-muted" aria-live="polite">
        Showing {filtered.length} of {projects.length} projects
      </p>

      {filtered.length > 0 ? (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      ) : (
        <div className="surface-panel p-8 text-center">
          <p className="text-ink">No projects match your filters.</p>
          <button
            type="button"
            className="mt-3 text-sm font-medium text-teal hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            onClick={() => {
              setQuery("")
              setCategory("all")
            }}
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  )
}

function FilterChip({
  active,
  onClick,
  label,
  count,
}: {
  active: boolean
  onClick: () => void
  label: string
  count: number
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "inline-flex shrink-0 items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:gap-2 sm:px-3 sm:py-2 sm:text-sm",
        active
          ? "border-teal bg-teal-muted text-ink"
          : "border-border bg-surface-elevated text-ink-muted hover:border-teal/40 hover:text-ink"
      )}
    >
      <span>{label}</span>
      <span className="font-mono text-[0.65rem] opacity-70 sm:text-xs">
        {count}
      </span>
    </button>
  )
}
