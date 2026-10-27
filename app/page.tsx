import Link from "next/link"
import { ContactSection } from "@/components/contact-section"
import { ExpertiseCard } from "@/components/expertise-card"
import { HeroSection } from "@/components/hero-section"
import { LatestBlogSection } from "@/components/latest-blog-section"
import { OrganizationsSection } from "@/components/organizations-section"
import { ProjectCard } from "@/components/project-card"
import { SectionHeading } from "@/components/section-heading"
import { ServiceCard } from "@/components/service-card"
import { WorkflowDiagram } from "@/components/workflow-diagram"
import { Button } from "@/components/ui/button"
import { getFeaturedProjects } from "@/data/projects"
import { services } from "@/data/services"
import { expertiseAreas } from "@/data/skills"

export default function HomePage() {
  const featuredProjects = getFeaturedProjects().slice(0, 6)

  return (
    <>
      <HeroSection />

      <section
        id="expertise"
        className="section-y relative overflow-hidden"
        aria-labelledby="expertise-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 editorial-grid opacity-[0.35]"
          aria-hidden
        />
        <div className="container-page relative">
          <SectionHeading
            id="expertise-heading"
            eyebrow="Expertise"
            title="Capabilities across the research data lifecycle"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {expertiseAreas.map((area, index) => (
              <ExpertiseCard key={area.id} area={area} index={index} />
            ))}
          </div>
        </div>
      </section>

      <OrganizationsSection />

      <section
        id="projects"
        className="section-y border-y border-border bg-surface"
        aria-labelledby="projects-heading"
      >
        <div className="container-page">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              id="projects-heading"
              eyebrow="Selected projects"
              title="Data management contributions to research programs"
              description="Selected national, multi-region, and experimental studies demonstrating digital survey programming, field quality assurance, and delivery of analysis-ready datasets."
            />
            <Button
              variant="outline"
              size="lg"
              nativeButton={false}
              render={<Link href="/projects" />}
              className="shrink-0 self-start sm:self-auto"
            >
              View all projects
            </Button>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="services"
        className="section-y"
        aria-labelledby="services-heading"
      >
        <div className="container-page">
          <SectionHeading
            id="services-heading"
            eyebrow="Services"
            title="Practical support for research and M&E teams"
            description="End-to-end research data management services across digital survey programming, high-frequency quality checks, statistical analysis, and reporting."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="impact"
        className="section-y border-y border-border bg-surface"
        aria-labelledby="impact-heading"
      >
        <div className="container-page">
          <SectionHeading
            id="impact-heading"
            eyebrow="Research operations"
            title="How reliable research data gets built"
            description="A practical workflow spanning survey programming, field monitoring, validation, cleaning, documentation, and analysis-ready delivery."
          />
          <div className="mt-10">
            <WorkflowDiagram />
          </div>
        </div>
      </section>

      <LatestBlogSection />

      <div className="border-b border-border bg-paper">
        <ContactSection compact />
      </div>
    </>
  )
}
