import { getPreferredEmail, getPublicSocialLinks, siteConfig } from "@/data/site"
import { getSiteUrl } from "@/lib/seo"

const siteDescription =
  "Professional portfolio of Amanuel Tadele — research specialist in research data management, digital data collection, statistical analysis, geospatial analysis, and machine learning."

export function JsonLd() {
  const siteUrl = getSiteUrl()
  const email = getPreferredEmail().address
  const sameAs = [
    siteConfig.personalSite.href,
    ...getPublicSocialLinks().map((link) => link.href),
  ]

  const graph = [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteConfig.name,
      description: siteDescription,
      publisher: { "@id": `${siteUrl}/#person` },
      inLanguage: "en",
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: siteConfig.name,
      url: siteUrl,
      jobTitle: siteConfig.title,
      description: siteConfig.roleLine,
      email,
      telephone: siteConfig.phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Addis Ababa",
        addressCountry: "ET",
      },
      sameAs,
      worksFor: siteConfig.employers.map((employer) => ({
        "@type": "Organization",
        name: employer.name,
        url: employer.href,
      })),
    },
  ]

  const payload = {
    "@context": "https://schema.org",
    "@graph": graph,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  )
}
