import type { Metadata } from "next"
import Link from "next/link"
import { ExperienceSection } from "@/components/experience-section"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional experience of Amanuel Tadele as Data Manager at the Policy Studies Institute (PSI) and Database Manager at Addis Economic Research PLC (AER).",
}

export default function ExperiencePage() {
  return (
    <div>
      <ExperienceSection />
      <div className="container-page pb-16">
        <div className="flex flex-wrap gap-3">
          <Button
            size="lg"
            nativeButton={false}
            render={<Link href="/projects" />}
          >
            View projects
          </Button>
          <Button
            size="lg"
            variant="outline"
            nativeButton={false}
            render={<Link href="/about" />}
          >
            About
          </Button>
        </div>
      </div>
    </div>
  )
}
