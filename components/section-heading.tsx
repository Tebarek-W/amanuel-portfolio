import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: "left" | "center"
  className?: string
  id?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  id,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <p className="mb-2.5 text-[0.7rem] font-semibold tracking-[0.16em] text-teal uppercase sm:mb-3 sm:text-xs">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className="font-heading text-[1.7rem] font-semibold leading-snug tracking-tight text-ink text-balance sm:text-4xl sm:leading-tight"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-3 max-w-xl text-[0.95rem] leading-relaxed text-ink-muted sm:mt-4 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  )
}
