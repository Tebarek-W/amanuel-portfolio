import type { Certificate } from "@/data/certificates"
import { certificateTopics } from "@/data/certificates"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

type CertificateCardProps = {
  certificate: Certificate
  className?: string
}

export function CertificateCard({ certificate, className }: CertificateCardProps) {
  return (
    <article className={cn("surface-panel h-full p-5", className)}>
      <Badge variant="secondary">{certificateTopics[certificate.topic]}</Badge>
      <h3 className="mt-3 font-heading text-base font-semibold text-ink">
        {certificate.title}
      </h3>
      <p className="mt-2 text-sm text-ink-muted">{certificate.issuer}</p>
      <p className="mt-4 font-mono text-xs text-teal">{certificate.dateLabel}</p>
    </article>
  )
}
