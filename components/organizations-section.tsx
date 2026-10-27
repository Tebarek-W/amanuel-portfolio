import Image from "next/image"
import { SectionHeading } from "@/components/section-heading"
import { organizations } from "@/data/organizations"

export function OrganizationsSection() {
  return (
    <section
      id="organizations"
      className="section-y border-y border-border bg-surface"
      aria-labelledby="organizations-heading"
    >
      <div className="container-page">
        <SectionHeading
          id="organizations-heading"
          eyebrow="Affiliations"
          title="Organizations worked with"
        />

        <ul className="mt-10 grid gap-5 sm:grid-cols-2">
          {organizations.map((org) => (
            <li key={org.id}>
              <a
                href={org.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-border/80 bg-paper px-5 py-5 transition-colors hover:border-teal/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:gap-5 sm:px-6"
              >
                <span className="relative flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border/60 bg-white sm:size-20">
                  <Image
                    src={org.logoSrc}
                    alt={org.logoAlt}
                    width={80}
                    height={80}
                    className="size-full object-contain p-2"
                  />
                </span>
                <span className="min-w-0">
                  <span className="block font-mono text-[0.65rem] tracking-[0.14em] text-teal uppercase">
                    {org.shortName}
                  </span>
                  <span className="mt-1 block font-heading text-base font-semibold tracking-tight text-ink transition-colors group-hover:text-teal sm:text-lg">
                    {org.name}
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
