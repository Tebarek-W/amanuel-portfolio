import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { CredentialLightbox } from "@/components/credential-lightbox"
import { SectionHeading } from "@/components/section-heading"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MotionReveal } from "@/components/motion-reveal"
import { experienceLetters, experienceRoles } from "@/data/experience"

type ExperienceSectionProps = {
  showProjectNotes?: boolean
  showPageLink?: boolean
  showCredentialLetters?: boolean
}

export function ExperienceSection({
  showProjectNotes = true,
  showPageLink = false,
  showCredentialLetters = true,
}: ExperienceSectionProps) {
  return (
    <section className="section-y" aria-labelledby="experience-heading">
      <div className="container-page space-y-16">
        <div>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              id="experience-heading"
              eyebrow="Experience"
              title="Professional roles in research data management"
              description="Leading survey programming, high-frequency quality assurance, field coordination, and dataset delivery at the FDRE Policy Studies Institute (PSI) and Addis Economic Research PLC (AER)."
            />
            {showPageLink ? (
              <Button
                variant="outline"
                size="lg"
                nativeButton={false}
                render={<Link href="/experience" />}
                className="shrink-0 self-start sm:self-auto"
              >
                View experience
              </Button>
            ) : null}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {experienceRoles.map((role, index) => (
              <MotionReveal key={role.id} delay={Math.min(index * 0.05, 0.15)}>
                <article className="surface-panel flex h-full flex-col p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-mono text-xs tracking-wide text-teal uppercase">
                      Role {String(index + 1).padStart(2, "0")}
                    </p>
                    {role.period ? (
                      <span className="font-mono text-xs text-ink-muted">
                        {role.period}
                      </span>
                    ) : null}
                  </div>
                  <h3 className="mt-2 font-heading text-2xl font-semibold tracking-tight text-ink">
                    {role.title}
                  </h3>
                  <p className="mt-1 text-sm text-ink-muted">
                    {role.organizationHref ? (
                      <a
                        href={role.organizationHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-medium text-ink hover:text-teal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                      >
                        {role.organization}
                        <ExternalLink className="size-3.5" aria-hidden />
                      </a>
                    ) : (
                      role.organization
                    )}
                    {role.formerly ? (
                      <span className="text-ink-muted"> · {role.formerly}</span>
                    ) : null}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                    {role.summary}
                  </p>

                  <h4 className="mt-6 text-xs font-semibold tracking-[0.12em] text-ink uppercase">
                    Key accomplishments
                  </h4>
                  <ul className="mt-3 space-y-2">
                    {role.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 text-sm leading-relaxed text-ink-muted before:mt-2 before:size-1 before:shrink-0 before:rounded-full before:bg-teal before:content-['']"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>

                  {showProjectNotes ? (
                    <>
                      <h4 className="mt-6 text-xs font-semibold tracking-[0.12em] text-ink uppercase">
                        Selected projects
                      </h4>
                      <ul className="mt-3 space-y-1.5">
                        {role.selectedProjectNotes.map((item) => (
                          <li key={item} className="text-sm text-ink-muted">
                            {item}
                          </li>
                        ))}
                      </ul>
                      <Link
                        href="/projects"
                        className="mt-4 inline-flex text-sm font-medium text-teal hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                      >
                        Browse all projects
                      </Link>
                    </>
                  ) : null}
                </article>
              </MotionReveal>
            ))}
          </div>
        </div>

        {showCredentialLetters ? (
          <div className="border-t border-border pt-14">
            <SectionHeading
              eyebrow="Institutional Letters"
              title="Verified work experience & recommendation letters"
              description="Official certificates of service and letters of recommendation from PSI, AER, New York University (PEDL), Node Consult PLC, and GREEN Professional Services PLC."
            />

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {experienceLetters.map((letter) => (
                <article
                  key={letter.id}
                  className="surface-panel flex h-full flex-col justify-between p-5"
                >
                  <div>
                    <div className="mb-4">
                      <CredentialLightbox
                        src={letter.image}
                        alt={`${letter.title} — ${letter.organization}`}
                        title={letter.title}
                        subtitle={`${letter.organization} · Issued ${letter.dateIssued}`}
                        aspectClassName="aspect-[3/4]"
                        credentialId={letter.referenceNo}
                      />
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <Badge variant="outline">{letter.role}</Badge>
                      <span className="font-mono text-xs text-teal">
                        {letter.period}
                      </span>
                    </div>
                    <h3 className="mt-3 font-heading text-base font-semibold text-ink">
                      {letter.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-ink-muted">
                      {letter.organization}
                    </p>
                    <p className="mt-2.5 text-xs leading-relaxed text-ink-muted">
                      {letter.summary}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-border pt-3 text-xs text-ink-muted">
                    <span>Issued {letter.dateIssued}</span>
                    {letter.referenceNo ? (
                      <span className="font-mono">
                        Ref: {letter.referenceNo}
                      </span>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}
