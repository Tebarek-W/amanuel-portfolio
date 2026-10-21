/**
 * Central site configuration.
 *
 * Sources:
 * - CV (Oct 2026)
 * - Website draft Google Doc + local brief (files/AT Website.docx,
 *   files/website-draft-google-doc.txt)
 * - Public Google Site https://sites.google.com/view/amanuel-td
 *
 * CONFIRMATION FLAGS:
 * - preferredPublicEmail: CV + draft Contacts use amangeo251@gmail.com;
 *   draft header also lists amanuel@amanueltd.com.et (intended domain email).
 * - linkedIn: live Google Site + draft use /in/amantd; CV lists /in/amantdin.
 * - telegram: Google Site uses t.me/amanuel_td; draft uses t.me/amanueltd.
 * - yearsOfExperience: Google Site + draft say 7+; CV summary says 4+.
 *   Avoid displaying an exact total until confirmed.
 * - domain: amanueltd.com.et is the intended production domain (not confirmed live).
 */

export type ConfirmationStatus = "confirmed" | "needs_confirmation" | "intended"

export type SocialLink = {
  label: string
  href: string
  status: ConfirmationStatus
  note?: string
}

export type ContactEmail = {
  address: string
  status: ConfirmationStatus
  note: string
}

export type OrganizationLink = {
  name: string
  href?: string
  shortName?: string
}

export const siteConfig = {
  name: "Amanuel Tadele",
  shortName: "Amanuel Tadele",
  title: "Research Specialist",
  /** Public role line from https://sites.google.com/view/amanuel-td */
  roleLine: "Data Manager | Research Assistant | Research/Survey Programmer",
  tagline: "Turning Data into Actionable Insights",
  location: "Addis Ababa, Ethiopia",
  phone: "+251 91 658 6619",
  preferredPublicEmailKey: "gmail" as const,
  emails: {
    gmail: {
      address: "amangeo251@gmail.com",
      status: "needs_confirmation" as ConfirmationStatus,
      note: "Listed on CV and in the website brief Contacts section.",
    },
    professional: {
      address: "amanuel@amanueltd.com.et",
      status: "intended" as ConfirmationStatus,
      note: "Listed at the top of the website brief as the domain email. Confirm before public use.",
    },
  } satisfies Record<string, ContactEmail>,
  intendedDomain: "amanueltd.com.et",
  domainStatus: "intended" as ConfirmationStatus,
  personalSite: {
    label: "Public Google Site",
    href: "https://sites.google.com/view/amanuel-td",
    status: "confirmed" as ConfirmationStatus,
    note: "Live public profile used as a content and link source.",
  },
  dataManagementContributions: {
    label: "Data management contributions",
    href: "https://sites.google.com/view/amanuel-td/data-management-contributions-in-research-projects",
    status: "confirmed" as ConfirmationStatus,
    note: "Mirrored on /projects as a year-grouped list; each item links to portfolio details and original source pages where available.",
  },
  /** Served from /public — copied from files/Amanuel Tadele_CV_cred@Oct 2026.docx */
  cvDownload: {
    label: "Download CV",
    href: "/Amanuel-Tadele-Dabarsho-CV.docx",
    fileName: "Amanuel-Tadele-Dabarsho-CV.docx",
  },
  employers: [
    {
      name: "FDRE Policy Studies Institute (PSI)",
      shortName: "PSI",
      href: "https://psi.org.et",
      role: "Data Manager",
    },
    {
      name: "Addis Economic Research PLC (AER)",
      shortName: "AER",
      href: "https://aer.et",
      role: "Database Manager",
    },
  ] as const,
  social: {
    linkedInPrimary: {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/amantd",
      status: "confirmed" as ConfirmationStatus,
      note: "Linked from the live Google Site and website brief. CV lists /in/amantdin as an alternate.",
    },
    linkedInAlternate: {
      label: "LinkedIn (CV alternate)",
      href: "https://www.linkedin.com/in/amantdin",
      status: "needs_confirmation" as ConfirmationStatus,
      note: "From CV only. Not linked on the live Google Site.",
    },
    github: {
      label: "GitHub",
      href: "https://github.com/amanueltd",
      status: "confirmed" as ConfirmationStatus,
      note: "Linked from the live Google Site.",
    },
    x: {
      label: "X",
      href: "https://x.com/amanuel_td",
      status: "confirmed" as ConfirmationStatus,
      note: "Google Site links twitter.com/amanuel_td; X URL used as the current equivalent.",
    },
    telegram: {
      label: "Telegram",
      href: "https://t.me/amanuel_td",
      status: "needs_confirmation" as ConfirmationStatus,
      note: "Google Site uses t.me/amanuel_td; website draft uses t.me/amanueltd. Confirm which is current.",
    },
    telegramAlternate: {
      label: "Telegram (draft alternate)",
      href: "https://t.me/amanueltd",
      status: "needs_confirmation" as ConfirmationStatus,
      note: "From website draft Contacts. Google Site uses amanuel_td.",
    },
  } satisfies Record<string, SocialLink>,
  nav: [
    { label: "About", href: "/about" },
    { label: "Experience", href: "/experience" },
    { label: "Projects", href: "/projects" },
    { label: "Services", href: "/services" },
    { label: "Publications", href: "/publications" },
    { label: "Certificates", href: "/certificates" },
    { label: "Blog", href: "/blog" },
  ] as const,
  experienceNote:
    "Experienced data management professional. Public Google Site and website draft describe more than seven years of experience; the CV summary says more than four. Exact totals are omitted until confirmed.",
  organizationsMentioned: [
    "FDRE Policy Studies Institute (PSI)",
    "Addis Economic Research PLC (AER)",
    "Central Statistics Agency (formerly CSA)",
    "Oxford Martin Programme on the Future of Development",
    "New York University Abu Dhabi",
    "World Bank",
    "IFPRI",
    "ILRI",
    "CIMMYT",
    "IFAD",
    "JSI-L10K",
    "New York University",
    "Arba Minch University",
    "KU Leuven",
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
  /** Draft homepage identity line */
  identity: "Amanuel Tadele | Research Specialist",
  headline: "Turning Data into Actionable Insights",
  supporting:
    "I help organizations transform their data into actionable and reliable evidence to support better decision-making — including digital data collection, survey programming, data quality assurance, statistical analysis, and machine learning.",
  supportingSecondary:
    "I bring together technical expertise and practical research experience to improve data collection, ensure high data quality, generate insights, and support decisions based on evidence.",
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
    "I am an experienced data management professional currently serving as a Data Manager at the FDRE Policy Studies Institute (PSI) and Addis Economic Research PLC (AER). I have a proven track record in data collection, field data quality supervision, data collection tool programming, and data management. I hold a Bachelor of Arts in Geography and Environmental Studies from Addis Ababa University, and an MSc in Data Science from the same university.",
  approach:
    "I design and program effective CAPI and CATI data collection tools, supervise field data quality, and deliver clean analysis-ready datasets — combining technical expertise with practical research experience so decision-makers can work from evidence they can trust.",
  focus:
    "My career focus includes research data management, monitoring and evaluation support, statistical analysis, geospatial analysis, and applied machine learning for development and policy research in Ethiopia and comparable research settings.",
  googleSiteParagraphs: [
    "My expertise has been developed through diverse research projects with organizations such as PSI, CSA (formerly), the Oxford Martin Programme on the Future of Development at the University of Oxford, New York University Abu Dhabi, the World Bank, IFPRI, ILRI, CIMMYT, IFAD, JSI-L10K, New York University, Arba Minch University, and KU Leuven.",
    "I am committed to adopting useful technologies and methods while ensuring data accuracy, efficiency, and reliability. My experience managing large datasets and programming CAPI/CATI instruments supports more efficient field data collection.",
  ] as const,
}
