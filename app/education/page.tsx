import type { Metadata } from "next"
import Link from "next/link"
import { CredentialLightbox } from "@/components/credential-lightbox"
import { SectionHeading } from "@/components/section-heading"
import { Button } from "@/components/ui/button"
import { education } from "@/data/education"

export const metadata: Metadata = {
  title: "Education",
  description:
    "Academic education of Amanuel Tadele Dabarsho — MSc in Data Science and BA in Geography and Environmental Studies from Addis Ababa University.",
}

export default function EducationPage() {
  return (
    <div className="section-y">
      <div className="container-page">
        <SectionHeading
          eyebrow="Education"
          title="Academic credentials"
          description="Graduate and undergraduate degrees in Data Science and Geography & Environmental Studies from Addis Ababa University, including thesis research and official diploma verification."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {education.map((item) => (
            <article
              key={item.id}
              className="surface-panel flex h-full flex-col justify-between p-6"
            >
              <div>
                <h2 className="font-heading text-2xl font-semibold tracking-tight text-ink">
                  {item.degree}
                </h2>
                <p className="mt-2 text-sm text-ink-muted">
                  {item.institution}
                </p>
                <p className="mt-1 font-mono text-xs text-teal">
                  {item.dateLabel}
                </p>
                {item.distinction ? (
                  <p className="mt-4 text-sm font-medium text-teal">
                    {item.distinction}
                  </p>
                ) : null}
                {item.statusNote ? (
                  <p className="mt-2 text-xs text-ink-muted">
                    {item.statusNote}
                  </p>
                ) : null}
                {item.thesisOrEssay ? (
                  <div className="mt-5 border-t border-border pt-4">
                    <p className="text-xs font-semibold tracking-[0.12em] text-ink uppercase">
                      {item.id.startsWith("msc") ? "Master's Thesis" : "Senior Essay"}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                      {item.thesisOrEssay}
                    </p>
                  </div>
                ) : null}
              </div>

              {item.credentialImage ? (
                <div className="mt-6 border-t border-border pt-5">
                  <div className="mb-3 flex items-center justify-between gap-2">
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

        <div className="mt-10 flex flex-wrap gap-3">
          <Button
            size="lg"
            nativeButton={false}
            render={<Link href="/certificates" />}
          >
            View certificates
          </Button>
          <Button
            size="lg"
            variant="outline"
            nativeButton={false}
            render={<Link href="/experience" />}
          >
            View experience
          </Button>
        </div>
      </div>
    </div>
  )
}
