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
import { pageSeo } from "@/lib/seo"
import { cn } from "@/lib/utils"

export const metadata: Metadata = pageSeo({
  title: "About",
  description:
    "About Amanuel Tadele — data manager, research assistant, and research/survey programmer supporting digital surveys, data quality, analysis, and evidence-based research.",
  path: "/about",
})

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
    <aside className={cn("h-fit", className)}>
      {/* Extra room so the offset mat isn’t clipped */}
      <div className="relative pr-2.5 pb-2.5 sm:pr-3 sm:pb-3">
        <div
          className="pointer-events-none absolute -inset-2 -z-10 rounded-[1.35rem] opacity-90 sm:-inset-3"
          aria-hidden
          style={{
            background:
              "radial-gradient(ellipse 80% 70% at 70% 20%, color-mix(in oklch, var(--teal) 22%, transparent), transparent 55%), radial-gradient(ellipse 60% 50% at 15% 90%, color-mix(in oklch, var(--ink) 8%, transparent), transparent 50%)",
          }}
        />

        <div
          className="absolute inset-0 translate-x-2 translate-y-2 rounded-2xl bg-teal-muted/85 sm:translate-x-2.5 sm:translate-y-2.5"
          aria-hidden
        />
        <div
          className="absolute inset-0 translate-x-1 translate-y-1 rounded-2xl border border-teal/25 bg-paper/50 sm:translate-x-1.5 sm:translate-y-1.5"
          aria-hidden
        />

        <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-muted shadow-[0_12px_40px_oklch(0.22_0.035_250_/_0.1)]">
          <div className="relative aspect-[4/5] w-full">
            <Image
              src={media.portrait.src}
              alt={media.portrait.alt}
              fill
              sizes={imageSizes}
              className="object-cover object-top"
              priority={priority}
            />
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-ink/65 via-ink/20 to-transparent"
              aria-hidden
            />
            <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-4">
              <p className="font-mono text-[0.65rem] tracking-[0.14em] text-teal-muted uppercase">
                Profile
              </p>
              <p className="mt-0.5 font-heading text-base font-semibold tracking-tight text-paper sm:text-lg">
                {siteConfig.name}
              </p>
              <p className="mt-0.5 text-xs text-paper/85 sm:text-sm">
                {siteConfig.location} · 7+ years
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="surface-panel relative z-10 mt-5 space-y-4 p-4 sm:mt-6 sm:p-5">
        <div>
          <p className="font-mono text-[0.65rem] tracking-[0.14em] text-teal uppercase">
            Currently
          </p>
          <h2 className="mt-1 font-heading text-base font-semibold tracking-tight text-ink">
            Roles & affiliations
          </h2>
        </div>
        <ul className="space-y-3 text-sm text-ink-muted">
          {siteConfig.employers.map((employer) => (
            <li
              key={employer.href}
              className="border-t border-border/70 pt-3 first:border-t-0 first:pt-0"
            >
              <span className="font-medium text-ink">{employer.role}</span>
              <br />
              <a
                href={employer.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-0.5 inline-flex items-center gap-1 text-teal hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                {employer.name}
                <ExternalLink className="size-3.5" aria-hidden />
              </a>
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-2 border-t border-border/70 pt-4">
          <DownloadCvButton className="w-full" />
          <Button nativeButton={false} render={<Link href="/contact" />}>
            Let&apos;s Connect
          </Button>
        </div>
      </div>
    </aside>
  )
}

export default function AboutPage() {
  return (
    <div>
      <div className="hero-glow border-b border-border">
        <div className="container-page section-y !pb-12 sm:!pb-16">
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
      </div>

      <div className="container-page section-y">
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
