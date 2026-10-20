import { Download } from "lucide-react"
import { siteConfig } from "@/data/site"
import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { VariantProps } from "class-variance-authority"

type DownloadCvButtonProps = {
  className?: string
  size?: VariantProps<typeof buttonVariants>["size"]
  variant?: VariantProps<typeof buttonVariants>["variant"]
  showIcon?: boolean
}

export function DownloadCvButton({
  className,
  size = "lg",
  variant = "outline",
  showIcon = true,
}: DownloadCvButtonProps) {
  const { href, fileName, label } = siteConfig.cvDownload

  return (
    <Button
      nativeButton={false}
      size={size}
      variant={variant}
      className={cn(className)}
      render={
        <a href={href} download={fileName} aria-label="Download curriculum vitae" />
      }
    >
      {showIcon ? <Download className="size-4" aria-hidden /> : null}
      {label}
    </Button>
  )
}
