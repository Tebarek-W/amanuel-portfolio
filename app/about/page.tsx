import type { Metadata } from "next"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Button } from "@/components/ui/button"
import { education } from "@/data/education"
import { roleSummaries } from "@/data/projects"
import { skillGroups } from "@/data/skills"
import { aboutCopy, siteConfig } from "@/data/site"

export const metadata: Metadata = {
  title: "About",
  description:
    "About Amanuel Tadele Dabarsho — data manager, research assistant, and research/survey programmer supporting digital surveys, data quality, analysis, and evidence-based research.",
}

export default function AboutPage() {
  return (
    <div className="section-y">
      <div className="container-page">
        <SectionHeading
          eyebrow="About"
          title="Bridging research design, field data, and analysis-ready evidence"
          description={aboutCopy.summary}
        />

        <p className="mt-4 font-mono text-sm text-teal">{siteConfig.roleLine}</p>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6 text-base leading-relaxed text-ink-muted">
            <p>{aboutCopy.approach}</p>
            {aboutCopy.googleSiteParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
            <p>{aboutCopy.focus}</p>
            <p>{siteConfig.experienceNote}</p>
            <p>
              Public profile:{" "}
              <a
                href={siteConfig.personalSite.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-teal underline-offset-2 hover:underline"
              >
                sites.google.com/view/amanuel-td
              </a>
            </p>
          </div>

          <aside className="surface-panel h-fit space-y-4 p-5">
            <h2 className="font-heading text-lg font-semibold text-ink">
              Currently
            </h2>
            <ul className="space-y-3 text-sm text-ink-muted">
              {siteConfig.employers.map((employer) => (
                <li key={employer.href}>
                  <span className="font-medium text-ink">{employer.role}</span>
                  <br />
                  <a
                    href={employer.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-teal hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  >
                    {employer.name}
                    <ExternalLink className="size-3.5" aria-hidden />
                  </a>
                </li>
              ))}
              <li>{siteConfig.location}</li>
            </ul>
            <Button nativeButton={false} render={<Link href="/contact" />}>
              Let&apos;s Connect
            </Button>
          </aside>
        </div>

        <section className="mt-16" aria-labelledby="roles-heading">
          <SectionHeading
            id="roles-heading"
            eyebrow="Experience"
            title="Documented role highlights"
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {[roleSummaries.psi, roleSummaries.aer].map((role) => (
              <article key={role.organization} className="surface-panel p-5">
                <h3 className="font-heading text-lg font-semibold text-ink">
                  {role.title}
                </h3>
                <p className="mt-1 text-sm text-ink-muted">{role.organization}</p>
                <ul className="mt-4 space-y-2">
                  {role.highlights.map((item) => (
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
        </section>

        <section className="mt-16" aria-labelledby="education-heading">
          <SectionHeading
            id="education-heading"
            eyebrow="Education"
            title="Academic credentials"
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {education.map((item) => (
              <article key={item.id} className="surface-panel p-5">
                <h3 className="font-heading text-lg font-semibold text-ink">
                  {item.degree}
                </h3>
                <p className="mt-1 text-sm text-ink-muted">
                  {item.institution} · {item.dateLabel}
                </p>
                {item.distinction ? (
                  <p className="mt-2 text-sm text-teal">{item.distinction}</p>
                ) : null}
                {item.statusNote ? (
                  <p className="mt-1 text-xs text-ink-muted">{item.statusNote}</p>
                ) : null}
                {item.thesisOrEssay ? (
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    {item.thesisOrEssay}
                  </p>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16" aria-labelledby="skills-heading">
          <SectionHeading
            id="skills-heading"
            eyebrow="Tools"
            title="Technical skills"
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <article key={group.id} className="surface-panel p-5">
                <h3 className="font-heading text-base font-semibold text-ink">
                  {group.title}
                </h3>
                <ul className="mt-3 space-y-1.5">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-ink-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
