import { ExternalLink, ShieldCheck } from "lucide-react"
import type { Certificate } from "@/data/certificates"
import { certificateTopics } from "@/data/certificates"
import { CredentialLightbox } from "@/components/credential-lightbox"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

type CertificateCardProps = {
  certificate: Certificate
  showImage?: boolean
  className?: string
}

export function CertificateCard({
  certificate,
  showImage = true,
  className,
}: CertificateCardProps) {
  return (
    <article
      className={cn(
        "surface-panel flex h-full flex-col justify-between p-5",
        className
      )}
    >
      <div>
        {showImage && certificate.image ? (
          <div className="mb-4">
            <CredentialLightbox
              src={certificate.image}
              alt={`${certificate.title} — ${certificate.issuer}`}
              title={certificate.title}
              subtitle={`${certificate.issuer} · ${certificate.dateLabel}`}
              verifyUrl={certificate.verifyUrl}
              credentialId={certificate.credentialId}
            />
          </div>
        ) : null}

        <div className="flex flex-wrap items-center justify-between gap-2">
          <Badge variant="secondary">
            {certificateTopics[certificate.topic]}
          </Badge>
          <span className="font-mono text-xs text-teal">
            {certificate.dateLabel}
          </span>
        </div>

        <h3 className="mt-3 font-heading text-base font-semibold text-ink">
          {certificate.title}
        </h3>
        <p className="mt-1.5 text-sm font-medium text-ink-muted">
          {certificate.issuer}
        </p>

        {certificate.description ? (
          <p className="mt-2.5 text-xs leading-relaxed text-ink-muted">
            {certificate.description}
          </p>
        ) : null}
      </div>

      {certificate.verifyUrl || certificate.credentialId ? (
        <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-border pt-3 text-xs">
          {certificate.credentialId ? (
            <span className="inline-flex items-center gap-1 font-mono text-ink-muted">
              <ShieldCheck className="size-3.5 text-teal" aria-hidden />
              ID: {certificate.credentialId}
            </span>
          ) : null}
          {certificate.verifyUrl ? (
            <a
              href={certificate.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium text-teal hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              Verify on Coursera
              <ExternalLink className="size-3.5" aria-hidden />
            </a>
          ) : null}
        </div>
      ) : null}
    </article>
  )
}
