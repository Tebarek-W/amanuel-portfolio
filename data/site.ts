/**
 * Central site configuration for the public portfolio.
 */

export type SocialLink = {
  label: string
  href: string
}

export type ContactEmail = {
  address: string
}

export const siteConfig = {
  name: "Amanuel Tadele",
  shortName: "Amanuel Tadele",
  title: "Research Specialist",
  roleLine: "Data Manager | Research Assistant | Research/Survey Programmer",
  tagline: "Turning Data into Actionable Insights",
  location: "Addis Ababa, Ethiopia",
  phone: "+251 91 658 6619",
  preferredPublicEmailKey: "gmail" as const,
  emails: {
    gmail: {
      address: "amangeo251@gmail.com",
    },
  } satisfies Record<string, ContactEmail>,
  employers: [
    {
      name: "FDRE Policy Studies Institute (PSI)",
      href: "https://psi.org.et",
      role: "Data Manager",
    },
    {
      name: "Addis Economic Research PLC (AER)",
      href: "https://aer.et",
      role: "Database Manager",
    },
  ] as const,
  social: {
    linkedInPrimary: {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/amantd",
    },
    github: {
      label: "GitHub",
      href: "https://github.com/amanueltd",
    },
    x: {
      label: "X",
      href: "https://x.com/amanuel_td",
    },
    telegram: {
      label: "Telegram",
      href: "https://t.me/amanuel_td",
    },
  } satisfies Record<string, SocialLink>,
  nav: [
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Services", href: "/services" },
    { label: "Publications", href: "/publications" },
    { label: "Blog", href: "/blog" },
  ] as const,
} as const

export function getPreferredEmail(): ContactEmail {
  return siteConfig.emails[siteConfig.preferredPublicEmailKey]
}

export function getPublicSocialLinks(): SocialLink[] {
  return [
    siteConfig.social.linkedInPrimary,
    siteConfig.social.github,
    siteConfig.social.x,
    siteConfig.social.telegram,
  ]
}

export const heroCopy = {
  headline: "Turning Data into Actionable Insights",
  supporting:
    "I am a research and data professional specializing in digital data collection, data quality assurance, statistical analysis and machine learning. I help organizations transform complex data into reliable evidence and actionable insights.",
  expertiseLabels: [
    "Digital Data Collection",
    "Data Analysis",
    "Data Quality Assurance",
    "Machine Learning",
    "Deep Learning",
    "Health Data Science",
  ] as const,
}

export const aboutCopy = {
  paragraphs: [
    "Amanuel Tadele is a research professional with over seven years of experience in digital data collection, survey programming, field data quality assurance and data management.",
    "I hold an MSc in Data Science and a BA in Geography and Environmental Studies from Addis Ababa University. Throughout my career, I have contributed to multidisciplinary research projects in collaboration with national and international research institutions.",
    "My expertise includes designing and programming digital data collection instruments for Computer-Assisted Personal Interviewing (CAPI) and Computer-Assisted Telephone Interviewing (CATI), supervising field data quality, managing large datasets and implementing data validation and quality assurance procedures. I combine technical expertise with a strong commitment to data accuracy, integrity and operational efficiency.",
    "Building on my experience in research data systems, I apply data science and machine learning approaches to transform data into reliable, actionable insight that supports research, policy development and informed decision making.",
  ] as const,
}
