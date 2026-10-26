import Link from "next/link"
import {
  getPreferredEmail,
  getPublicSocialLinks,
  siteConfig,
} from "@/data/site"
import { ContactForm } from "@/components/contact-form"
import { SectionHeading } from "@/components/section-heading"
import { SocialLinks } from "@/components/social-links"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Phone } from "lucide-react"

type ContactSectionProps = {
  showForm?: boolean
  compact?: boolean
}

export function ContactSection({
  showForm = true,
  compact = false,
}: ContactSectionProps) {
  const email = getPreferredEmail()
  const social = getPublicSocialLinks()

  return (
    <section className="section-y" aria-labelledby="contact-heading">
      <div className="container-page">
        <SectionHeading
          id="contact-heading"
          eyebrow="Contact"
          title="Let's discuss your next research data challenge"
          description="Reach out for research data management, digital survey systems, quality assurance, analysis, or visualization support."
        />

        <div
          className={`mt-10 grid gap-8 ${showForm ? "lg:grid-cols-[0.85fr_1.15fr] lg:items-start" : ""}`}
        >
          <div className="space-y-5">
            <div className="surface-panel space-y-5 p-5 sm:p-6">
              <div>
                <p className="font-mono text-[0.65rem] tracking-[0.14em] text-teal uppercase">
                  Reach me
                </p>
                <h3 className="mt-1 font-heading text-base font-semibold text-ink">
                  Direct contact
                </h3>
              </div>
              <ul className="space-y-4">
                <li className="flex gap-3 text-sm text-ink-muted">
                  <Mail className="mt-0.5 size-4 shrink-0 text-teal" aria-hidden />
                  <a
                    href={`mailto:${email.address}`}
                    className="font-medium text-ink break-all hover:text-teal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  >
                    {email.address}
                  </a>
                </li>
                <li className="flex gap-3 text-sm text-ink-muted">
                  <Phone className="mt-0.5 size-4 shrink-0 text-teal" aria-hidden />
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                    className="font-medium text-ink hover:text-teal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  >
                    {siteConfig.phone}
                  </a>
                </li>
                <li className="flex gap-3 text-sm text-ink-muted">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-teal" aria-hidden />
                  <span>{siteConfig.location}</span>
                </li>
              </ul>

              <div className="border-t border-border pt-4">
                <p className="mb-3 text-xs font-semibold tracking-[0.12em] text-ink-muted uppercase">
                  Social
                </p>
                <SocialLinks links={social} showLabels />
              </div>
            </div>

            {compact ? (
              <Button
                nativeButton={false}
                render={<Link href="/contact" />}
                size="lg"
                className="w-full sm:w-auto"
              >
                Go to contact page
              </Button>
            ) : null}
          </div>

          {showForm ? <ContactForm /> : null}
        </div>
      </div>
    </section>
  )
}
