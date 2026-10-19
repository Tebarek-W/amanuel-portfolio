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
          className={`mt-10 grid gap-8 ${showForm ? "lg:grid-cols-[0.9fr_1.1fr]" : ""}`}
        >
          <div className="space-y-6">
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-ink-muted">
                <Mail className="mt-0.5 size-4 shrink-0 text-teal" aria-hidden />
                <div>
                  <a
                    href={`mailto:${email.address}`}
                    className="font-medium text-ink hover:text-teal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  >
                    {email.address}
                  </a>
                  <p className="mt-1 text-xs">{email.note}</p>
                </div>
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

            <SocialLinks links={social} showLabels />

            <div className="space-y-2 text-sm">
              <a
                href={siteConfig.personalSite.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-teal underline-offset-2 hover:underline"
              >
                Public Google Site
              </a>
              <br />
              <a
                href={siteConfig.dataManagementContributions.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-teal underline-offset-2 hover:underline"
              >
                Data management contributions list
              </a>
            </div>

            {!compact ? (
              <div className="rounded-lg border border-dashed border-border bg-muted/40 p-4 text-xs leading-relaxed text-ink-muted">
                <p className="font-medium text-ink">Details needing confirmation</p>
                <ul className="mt-2 list-disc space-y-1 pl-4">
                  <li>
                    Alternate email: {siteConfig.emails.professional.address} (
                    {siteConfig.emails.professional.note})
                  </li>
                  <li>
                    LinkedIn CV alternate:{" "}
                    {siteConfig.social.linkedInAlternate.href} (live Google Site
                    uses /in/amantd)
                  </li>
                  <li>
                    Intended domain: {siteConfig.intendedDomain} (not confirmed live)
                  </li>
                </ul>
              </div>
            ) : null}

            {compact ? (
              <Button nativeButton={false} render={<Link href="/contact" />} size="lg">
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
