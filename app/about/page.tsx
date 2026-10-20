import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { CredentialLightbox } from "@/components/credential-lightbox"
import { DownloadCvButton } from "@/components/download-cv-button"
import { SectionHeading } from "@/components/section-heading"
import { Button } from "@/components/ui/button"
import { education } from "@/data/education"
import { media } from "@/data/media"
import { skillGroups } from "@/data/skills"
import { aboutCopy, siteConfig } from "@/data/site"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "About",
  description:
    "About Amanuel Tadele — data manager, research assistant, and research/survey programmer supporting digital surveys, data quality, analysis, and evidence-based research.",
}

function ProfileCard({
  className,
  imageSizes,
  priority = false,
}: {
  className?: string
  imageSizes: string
  priority?: boolean
}) {
  return (
    <aside className={cn("surface-panel h-fit space-y-3.5 p-4", className)}>
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-md border border-border/80 bg-muted">
        <Image
          src={media.portrait.src}
          alt={media.portrait.alt}
          fill
          sizes={imageSizes}
          className="object-cover object-top"
          priority={priority}
        />
      </div>
      <h2 className="font-heading text-base font-semibold text-ink">Currently</h2>
      <ul className="space-y-2.5 text-sm text-ink-muted">
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
      <div className="flex flex-col gap-2">
        <DownloadCvButton className="w-full" />
        <Button nativeButton={false} render={<Link href="/contact" />}>
          Let&apos;s Connect
        </Button>
      </div>
    </aside>
  )
}

export default function AboutPage() {
  return (
    <div>
      <div className="container-page section-y">
        <div className="grid items-start gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="min-w-0">
            <SectionHeading
              eyebrow="About"
              title="Bridging research design, field data, and analysis-ready evidence"
              description={aboutCopy.summary}
            />

            <p className="mt-4 font-mono text-xs leading-relaxed text-teal sm:text-sm">
              {siteConfig.roleLine}
            </p>

            <ProfileCard
              className="mx-auto mt-8 w-full max-w-[14rem] sm:max-w-[16rem] lg:hidden"
              imageSizes="224px"
              priority
            />

            <div className="mt-8 space-y-5 text-[0.95rem] leading-relaxed text-ink-muted sm:mt-10 sm:space-y-6 sm:text-base">
              <p>{aboutCopy.approach}</p>
              {aboutCopy.googleSiteParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
              <p>{aboutCopy.focus}</p>
              <p>
                Public profile:{" "}
                <a
                  href={siteConfig.personalSite.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="break-all font-medium text-teal underline-offset-2 hover:underline sm:break-normal"
                >
                  sites.google.com/view/amanuel-td
                </a>
              </p>
            </div>

            <div className="mt-8 sm:mt-10">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
                nativeButton={false}
                render={<Link href="/experience" />}
              >
                View full experience
              </Button>
            </div>
          </div>

          <ProfileCard
            className="mx-auto hidden w-4/5 lg:ml-auto lg:mr-0 lg:block"
            imageSizes="290px"
          />
        </div>
      </div>

      <div className="container-page section-y !pt-12 sm:!pt-16">
        <section aria-labelledby="education-heading">
          <SectionHeading
            id="education-heading"
            eyebrow="Education"
            title="Academic credentials"
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {education.map((item) => (
              <article
                key={item.id}
                className="surface-panel flex h-full flex-col justify-between p-5"
              >
                <div>
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
                    <p className="mt-1 text-xs text-ink-muted">
                      {item.statusNote}
                    </p>
                  ) : null}
                  {item.thesisOrEssay ? (
                    <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                      {item.thesisOrEssay}
                    </p>
                  ) : null}
                </div>

                {item.credentialImage ? (
                  <div className="mt-5 border-t border-border pt-4">
                    <div className="mb-2.5 flex items-center justify-between gap-2">
                      <p className="text-xs font-semibold tracking-[0.12em] text-ink uppercase">
                        Official Diploma Scan
                      </p>
                      {item.credentialSerial ? (
                        <span className="font-mono text-xs text-teal">
                          {item.credentialSerial}
                        </span>
                      ) : null}
                    </div>
                    <CredentialLightbox
                      src={item.credentialImage}
                      alt={item.credentialTitle ?? item.degree}
                      title={item.credentialTitle ?? item.degree}
                      subtitle={`${item.institution} · ${item.dateLabel}`}
                      credentialId={item.credentialSerial}
                    />
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 sm:mt-16" aria-labelledby="skills-heading">
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
