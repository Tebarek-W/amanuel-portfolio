import Link from "next/link"
import { CopyrightYear } from "@/components/copyright-year"
import { SocialLinks } from "@/components/social-links"
import { Separator } from "@/components/ui/separator"
import { getPublicSocialLinks, siteConfig } from "@/data/site"

export function SiteFooter() {
  const social = getPublicSocialLinks()

  return (
    <footer className="border-t border-border bg-ink text-primary-foreground">
      <div className="container-page section-y !py-12">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <p className="font-heading text-lg font-semibold">
              {siteConfig.name}
            </p>
            <p className="mt-1 text-xs tracking-wide text-primary-foreground/55">
              {siteConfig.roleLine}
            </p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-primary-foreground/75">
              Research specialist focused on research data management, digital
              survey systems, statistical analysis, and evidence for decision-making.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.14em] text-primary-foreground/60 uppercase">
              Navigate
            </p>
            <ul className="mt-4 space-y-2">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-foreground/85 transition-colors hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.14em] text-primary-foreground/60 uppercase">
              Connect
            </p>
            <div className="mt-4">
              <SocialLinks links={social} />
            </div>
            <p className="mt-4 text-sm text-primary-foreground/70">
              {siteConfig.location}
            </p>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/15" />

        <p className="text-sm text-primary-foreground/60">
          © <CopyrightYear /> {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
