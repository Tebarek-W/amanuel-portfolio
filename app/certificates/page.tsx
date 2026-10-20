import type { Metadata } from "next"
import { CertificateCard } from "@/components/certificate-card"
import { CredentialLightbox } from "@/components/credential-lightbox"
import { SectionHeading } from "@/components/section-heading"
import { Badge } from "@/components/ui/badge"
import {
  certificates,
  certificateTopics,
  type CertificateTopic,
} from "@/data/certificates"
import { experienceLetters } from "@/data/experience"

export const metadata: Metadata = {
  title: "Certificates & Credentials",
  description:
    "Verified professional certificates, Coursera specializations, field research credentials, and official experience letters of Amanuel Tadele Dabarsho.",
}

export default function CertificatesPage() {
  const topics = Object.keys(certificateTopics) as CertificateTopic[]

  return (
    <div className="section-y">
      <div className="container-page space-y-16">
        <div>
          <SectionHeading
            eyebrow="Certificates & Credentials"
            title="Professional training and verified credentials"
            description="Official course certificates from the World Bank DIME, Johns Hopkins University, the University of Michigan, and UC Davis, alongside field survey credentials and institutional service letters. Select any document to inspect the full scan."
          />

          <div className="mt-12 space-y-14">
            {topics.map((topic) => {
              const items = certificates.filter(
                (certificate) => certificate.topic === topic
              )
              if (items.length === 0) return null
              return (
                <section key={topic} aria-labelledby={`topic-${topic}`}>
                  <h2
                    id={`topic-${topic}`}
                    className="font-heading text-xl font-semibold text-ink"
                  >
                    {certificateTopics[topic]}
                  </h2>
                  <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((certificate) => (
                      <CertificateCard
                        key={certificate.id}
                        certificate={certificate}
                        showImage
                      />
                    ))}
                  </div>
                </section>
              )
            })}
          </div>
        </div>

        <section
          aria-labelledby="experience-letters-heading"
          className="border-t border-border pt-14"
        >
          <SectionHeading
            id="experience-letters-heading"
            eyebrow="Institutional Verification"
            title="Official experience and recommendation letters"
            description="Stamped certificates of service and letters of recommendation from research institutions and survey firms."
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
                    <span className="font-mono">Ref: {letter.referenceNo}</span>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
