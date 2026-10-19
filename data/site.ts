/**
 * Central site configuration.
 *
 * Sources: CV (Oct 2026), website brief, and public Google Site
 * https://sites.google.com/view/amanuel-td
 *
 * CONFIRMATION FLAGS:
 * - preferredPublicEmail: CV + brief Contacts use amangeo251@gmail.com;
 *   brief header also lists amanuel@amanueltd.com.et (intended domain email).
 * - linkedIn: live Google Site + brief use /in/amantd; CV lists /in/amantdin.
 * - yearsOfExperience: Google Site + brief say 7+; CV summary says 4+.
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
  name: "Amanuel Tadele Dabarsho",
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
    note: "Public list of research contributions with external source links.",
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
      status: "confirmed" as ConfirmationStatus,
      note: "Updated to match the live Google Site link (underscore).",
    },
  } satisfies Record<string, SocialLink>,
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Services", href: "/services" },
    { label: "Publications", href: "/publications" },
    { label: "Certificates", href: "/certificates" },
    { label: "Contact", href: "/contact" },
  ] as const,
  experienceNote:
    "Experienced data management professional. Public Google Site and website brief describe more than seven years of experience; the CV summary says more than four. Exact totals are omitted until confirmed.",
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
  identity: siteConfig.roleLine,
  headline: "Turning Data into Actionable Insights",
  supporting:
    "I help research and policy teams turn survey and administrative data into reliable evidence — through digital data collection, survey programming, field data quality supervision, statistical analysis, and machine learning.",
  expertiseLabels: [
    "Research Data Management",
    "Digital Data Collection",
    "Survey Programming",
    "Statistical Analysis",
    "Machine Learning",
  ] as const,
}

export const aboutCopy = {
  summary:
    "Amanuel is an experienced data management professional currently serving as a Data Manager at the FDRE Policy Studies Institute (PSI) and Addis Economic Research PLC (AER). His public profile presents him as a Data Manager, Research Assistant, and Research/Survey Programmer with a strong track record in data collection, field data quality supervision, survey tool programming, and data management.",
  approach:
    "He designs and programs CAPI and CATI instruments, supervises field data quality, and delivers clean analysis-ready datasets — combining technical tooling with practical research operations so decision-makers can work from evidence they can trust.",
  focus:
    "Career focus includes research data management, monitoring and evaluation support, statistical analysis, geospatial analysis, and applied machine learning for development and policy research in Ethiopia and comparable research settings.",
  googleSiteParagraphs: [
    "His expertise has been developed through diverse research projects with organizations such as PSI, CSA (formerly), the Oxford Martin Programme on the Future of Development at the University of Oxford, New York University Abu Dhabi, the World Bank, IFPRI, ILRI, CIMMYT, IFAD, JSI-L10K, New York University, Arba Minch University, and KU Leuven.",
    "He is committed to data accuracy, efficiency, and reliability, with extensive experience managing large datasets and programming effective Computer-Assisted Personal Interviewing (CAPI) and Computer-Assisted Telephone Interviewing (CATI) tools.",
  ] as const,
}
