import type { Metadata } from "next"
import Link from "next/link"
import { SectionHeading } from "@/components/section-heading"
import { Button } from "@/components/ui/button"
import { services } from "@/data/services"
import { pageSeo } from "@/lib/seo"

export const metadata: Metadata = pageSeo({
  title: "Services",
  description:
    "Professional services in digital data collection, data quality assurance, research and M&E support, statistical analysis, visualization, and geospatial analysis.",
  path: "/services",
})

export default function ServicesPage() {
  return (
    <div className="section-y">
      <div className="container-page">
        <SectionHeading title="Services" />

        <div className="mt-12 space-y-8">
          {services.map((service, index) => (
            <article
              key={service.slug}
              id={service.slug}
              className="surface-panel scroll-mt-24 p-6 sm:p-8"
            >
              <p className="font-mono text-xs text-teal">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-2 font-heading text-2xl font-semibold tracking-tight text-ink">
                {service.title}
              </h2>

              <ul className="mt-5 space-y-2">
                {service.deliverables.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-sm text-ink-muted before:mt-2 before:size-1 before:shrink-0 before:rounded-full before:bg-teal before:content-['']"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          <Button size="lg" nativeButton={false} render={<Link href="/contact" />}>
            Discuss a project
          </Button>
          <Button
            size="lg"
            variant="outline"
            nativeButton={false}
            render={<Link href="/projects" />}
          >
            See related projects
          </Button>
        </div>
      </div>
    </div>
  )
}
