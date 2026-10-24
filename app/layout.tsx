import type { Metadata } from "next"
import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"
import { JsonLd } from "@/components/json-ld"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { siteConfig } from "@/data/site"
import { getSiteUrl } from "@/lib/seo"
import "./globals.css"

const siteUrl = getSiteUrl()
const rootTitle = `${siteConfig.name} | ${siteConfig.title}`
const rootDescription =
  "Professional portfolio of Amanuel Tadele — research specialist in research data management, digital data collection, statistical analysis, geospatial analysis, and machine learning."
const ogDescription =
  "Turning data into actionable insights through research data management, digital surveys, quality assurance, and analysis."

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: rootTitle,
    template: `%s | ${siteConfig.name}`,
  },
  description: rootDescription,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  keywords: [
    "Amanuel Tadele",
    "research data management",
    "digital data collection",
    "SurveyCTO",
    "data quality",
    "statistical analysis",
    "machine learning",
    "Ethiopia",
    "Policy Studies Institute",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: rootTitle,
    description: ogDescription,
    siteName: siteConfig.name,
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: rootTitle,
    description:
      "Research specialist focused on research data management, digital data collection, and evidence for decision-making.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${GeistSans.variable} ${GeistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <JsonLd />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-ink focus:px-3 focus:py-2 focus:text-sm focus:text-primary-foreground"
        >
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  )
}
