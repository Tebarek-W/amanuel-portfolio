import Link from "next/link"
import { CertificateCard } from "@/components/certificate-card"
import { ContactSection } from "@/components/contact-section"
import { ExpertiseCard } from "@/components/expertise-card"
import { HeroSection } from "@/components/hero-section"
import { LatestBlogSection } from "@/components/latest-blog-section"
import { ProjectCard } from "@/components/project-card"
import { PublicationItem } from "@/components/publication-item"
import { SectionHeading } from "@/components/section-heading"
import { ServiceCard } from "@/components/service-card"
import { WorkflowDiagram } from "@/components/workflow-diagram"
import { Button } from "@/components/ui/button"
import { certificates } from "@/data/certificates"
import { education } from "@/data/education"
import { getFeaturedProjects } from "@/data/projects"
import { publications } from "@/data/publications"
import { services } from "@/data/services"
import { expertiseAreas } from "@/data/skills"

export default function HomePage() {
  const featuredProjects = getFeaturedProjects().slice(0, 6)
  const previewCertificates = certificates.slice(0, 4)

  return (
    <>
      <HeroSection />

      <section
        id="expertise"
        className="section-y"
        aria-labelledby="expertise-heading"
      >
        <div className="container-page">
          <SectionHeading
            id="expertise-heading"
            eyebrow="Expertise"
            title="Capabilities across the research data lifecycle"
            description="From survey programming and field monitoring to cleaning, analysis, visualization, and geospatial work."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {expertiseAreas.map((area, index) => (
              <ExpertiseCard key={area.id} area={area} index={index} />
            ))}
          </div>
        </div>
      </section>

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
            description="End-to-end research data management services across digital survey programming, high-frequency quality checks, statistical analysis, reporting, and GIS."
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

      <section
        id="credentials"
        className="section-y"
        aria-labelledby="credentials-heading"
      >
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              id="credentials-heading"
              eyebrow="Education"
              title="Academic foundation"
            />
            <ul className="mt-8 space-y-4">
              {education.map((item) => (
                <li key={item.id} className="surface-panel p-5">
                  <h3 className="font-heading text-lg font-semibold text-ink">
                    {item.degree}
                  </h3>
                  <p className="mt-1 text-sm text-ink-muted">
                    {item.institution} · {item.dateLabel}
                  </p>
                  {item.distinction ? (
                    <p className="mt-2 text-sm text-teal">{item.distinction}</p>
                  ) : null}
                  {item.thesisOrEssay ? (
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                      {item.thesisOrEssay}
                    </p>
                  ) : null}
                </li>
              ))}
            </ul>
            <Button
              variant="outline"
              className="mt-6"
              nativeButton={false}
              render={<Link href="/about#education-heading" />}
            >
              About &amp; academic credentials
            </Button>
          </div>

          <div>
            <SectionHeading
              eyebrow="Certificates"
              title="Professional training"
              description="Selected certificates relevant to field research, reproducible workflows, survey methods, data science, and GIS."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {previewCertificates.map((certificate) => (
                <CertificateCard
                  key={certificate.id}
                  certificate={certificate}
                />
              ))}
            </div>
            <Button
              variant="outline"
              className="mt-6"
              nativeButton={false}
              render={<Link href="/certificates" />}
            >
              View all certificates
            </Button>
          </div>
        </div>
      </section>

      <section
        id="publications"
        className="section-y border-y border-border bg-surface"
        aria-labelledby="publications-heading"
      >
        <div className="container-page">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              id="publications-heading"
              eyebrow="Publications"
              title="Research data outputs"
              description="Published research datasets and collaborative survey outputs."
            />
            <Button
              variant="outline"
              size="lg"
              nativeButton={false}
              render={<Link href="/publications" />}
              className="shrink-0 self-start sm:self-auto"
            >
              View publications
            </Button>
          </div>
          <div className="mt-10 space-y-4">
            {publications.map((publication) => (
              <PublicationItem
                key={publication.id}
                publication={publication}
              />
            ))}
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
