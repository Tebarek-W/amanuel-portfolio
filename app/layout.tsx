import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { siteConfig } from "@/data/site"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Professional portfolio of Amanuel Tadele — research specialist in research data management, digital data collection, statistical analysis, geospatial analysis, and machine learning.",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description:
      "Turning data into actionable insights through research data management, digital surveys, quality assurance, and analysis.",
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description:
      "Research specialist focused on research data management, digital data collection, and evidence for decision-making.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
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
