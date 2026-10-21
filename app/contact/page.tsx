import type { Metadata } from "next"
import { ContactSection } from "@/components/contact-section"
import { pageSeo } from "@/lib/seo"

export const metadata: Metadata = pageSeo({
  title: "Contact",
  description:
    "Contact Amanuel Tadele for research data management, digital survey systems, quality assurance, analysis, and visualization support.",
  path: "/contact",
})

export default function ContactPage() {
  return (
    <div className="hero-glow min-h-[70vh]">
      <ContactSection />
    </div>
  )
}
