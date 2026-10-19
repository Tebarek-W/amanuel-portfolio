import type { Metadata } from "next"
import { CertificateCard } from "@/components/certificate-card"
import { SectionHeading } from "@/components/section-heading"
import {
  certificates,
  certificateTopics,
  type CertificateTopic,
} from "@/data/certificates"

export const metadata: Metadata = {
  title: "Certificates",
  description:
    "Professional certificates and training in field research, reproducible research, data science, survey methods, and GIS.",
}

export default function CertificatesPage() {
  const topics = Object.keys(certificateTopics) as CertificateTopic[]

  return (
    <div className="section-y">
      <div className="container-page">
        <SectionHeading
          eyebrow="Certificates"
          title="Training and professional development"
          description="Certificates are listed as documented in the CV. Certificate images and IDs are not fabricated."
        />

        <div className="mt-12 space-y-12">
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
                <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((certificate) => (
                    <CertificateCard
                      key={certificate.id}
                      certificate={certificate}
                    />
                  ))}
                </div>
              </section>
            )
          })}
        </div>
      </div>
    </div>
  )
}
