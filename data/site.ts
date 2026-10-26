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
    "I am a seasoned Data Management Professional with over seven years of experience. Currently serving as a Data Manager at FDRE Policy Studies Institute (PSI) and Addis Economic Research PLC (AER), I have a proven track record in data collection, field data quality supervision, data collection tool programming, and data management. I hold a Bachelor of Arts in Geography and Environmental Studies from Addis Ababa University.",
  organizations:
    "My expertise has been developed through diverse research projects with renowned organizations such as PSI (Policy Studies Institute), CSA (Central Statistics Agency, Formerly), Oxford Martin Programme on the Future of Development at the University of Oxford, New York University Abu Dhabi, WB, IFPRI, ILRI, CIMMYT, IFAD, JSI-L10K, New York University, Arba Minch University, and KU Leuven. I am an expert at adopting cutting-edge technologies and methodologies and am unwaveringly committed to ensuring data accuracy, efficiency, and reliability. My extensive experience has given me a comprehensive understanding of data management principles and best practices.",
  priorRoles:
    "In my previous roles, I demonstrated my ability to manage large datasets, ensuring their integrity and accuracy. I have a proven track record of designing and programming effective data collection tools for Computer-Assisted Personal Interviewing (CAPI) and Computer-Assisted Telephone Interviewing (CATI), which have significantly improved the efficiency of data collection processes.",
}
