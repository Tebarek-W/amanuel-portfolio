export type Organization = {
  id: string
  name: string
  shortName: string
  href: string
  logoSrc: string
  logoAlt: string
}

export const organizations: Organization[] = [
  {
    id: "psi",
    name: "FDRE Policy Studies Institute (PSI)",
    shortName: "PSI",
    href: "https://psi.org.et",
    logoSrc: "/images/organizations/psi-logo.png",
    logoAlt: "Policy Studies Institute logo",
  },
  {
    id: "aer",
    name: "Addis Economic Research PLC (AER)",
    shortName: "AER",
    href: "https://aer.et",
    logoSrc: "/images/organizations/aer-logo.png",
    logoAlt: "Addis Economic Research logo",
  },
]
