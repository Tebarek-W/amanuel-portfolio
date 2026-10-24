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
  personalSite: {
    label: "Public Google Site",
    href: "https://sites.google.com/view/amanuel-td",
  },
  cvDownload: {
    label: "Download CV",
    href: "/Amanuel-Tadele-Dabarsho-CV.docx",
    fileName: "Amanuel-Tadele-Dabarsho-CV.docx",
  },
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
    { label: "Experience", href: "/experience" },
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
  identity: "Amanuel Tadele | Research Specialist",
  headline: "Turning Data into Actionable Insights",
  supporting:
    "I help organizations transform their data into actionable and reliable evidence to support better decision-making — including digital data collection, survey programming, data quality assurance, statistical analysis, and machine learning.",
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
  summary:
    "I am a data management professional with 7+ years of experience, currently serving as a Data Manager at the FDRE Policy Studies Institute (PSI) and Addis Economic Research PLC (AER). I have a proven track record in data collection, field data quality supervision, data collection tool programming, and data management. I hold a Bachelor of Arts in Geography and Environmental Studies from Addis Ababa University, and an MSc in Data Science from the same university.",
  approach:
    "I design and program effective CAPI and CATI data collection tools, supervise field data quality, and deliver clean analysis-ready datasets — combining technical expertise with practical research experience so decision-makers can work from evidence they can trust.",
  focus:
    "My career focus includes research data management, monitoring and evaluation support, statistical analysis, geospatial analysis, and applied machine learning for development and policy research in Ethiopia and comparable research settings.",
  googleSiteParagraphs: [
    "My expertise has been developed through diverse research projects with organizations such as PSI, CSA (formerly), the Oxford Martin Programme on the Future of Development at the University of Oxford, New York University Abu Dhabi, the World Bank, IFPRI, ILRI, CIMMYT, IFAD, JSI-L10K, New York University, Arba Minch University, and KU Leuven.",
    "I am committed to adopting useful technologies and methods while ensuring data accuracy, efficiency, and reliability. My experience managing large datasets and programming CAPI/CATI instruments supports more efficient field data collection.",
  ] as const,
}
