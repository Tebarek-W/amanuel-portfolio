import { siteConfig } from "@/data/site"

export type ExperienceLetter = {
  id: string
  title: string
  organization: string
  role: string
  dateIssued: string
  period: string
  referenceNo?: string
  image: string
  summary: string
}

export type ExperienceRole = {
  id: string
  title: string
  organization: string
  organizationHref?: string
  formerly?: string
  period?: string
  summary: string
  highlights: string[]
  selectedProjectNotes: string[]
  credentialLetter?: ExperienceLetter
}

export const experienceLetters: ExperienceLetter[] = [
  {
    id: "aer-letter-2022",
    title: "Database Manager Experience Certificate",
    organization: "Addis Economic Research PLC (AER)",
    role: "Database Manager",
    dateIssued: "Sep 30, 2022",
    period: "Aug 2021 – Jul 2022",
    referenceNo: "AER-333/15",
    image: "/credentials/aer-database-manager-experience.jpg",
    summary:
      "Certifies Database Manager responsibilities across Gender Norms & Female-Owned Enterprises and IFAD Rural Poor Stimulus Facility impact analysis — including SurveyCTO CATI/CAPI design, automated HFC, audio audits, enumerator training, and weekly cleaned dataset delivery.",
  },
  {
    id: "psi-letter-2022",
    title: "Database Manager Certificate of Service",
    organization: "FDRE Policy Studies Institute (PSI)",
    role: "Database Manager",
    dateIssued: "Aug 1, 2022",
    period: "Apr 14, 2022 – May 24, 2022",
    referenceNo: "PSI/0159/14",
    image: "/credentials/psi-urban-land-lease-experience.jpg",
    summary:
      "Certifies outstanding performance as Database Manager on 'Market Efficiency and Governance of Urban Land Lease in Ethiopia' — designing SurveyCTO templates, training teams on CAPI, and running automated high-frequency checks.",
  },
  {
    id: "nyu-pedl-letter-2021",
    title: "Letter of Recommendation — Database Manager",
    organization: "New York University (NYU) / PEDL Research Project",
    role: "Database Manager",
    dateIssued: "Aug 15, 2021",
    period: "Feb 1, 2020 – Jul 30, 2021",
    image: "/credentials/nyu-pedl-database-manager-recommendation.jpg",
    summary:
      "Signed by Co-PI Dr. Eyoual Demeke for the NYU / PEDL pilot study 'The Impact of Social Norms on Female-Owned Businesses', recognizing SurveyCTO programming, CAPI training, daily automated HFCs, field coordination, and data cleaning.",
  },
  {
    id: "node-consult-letter-2020",
    title: "Work Experience Certificate — Data Quality Auditor",
    organization: "Node Consult PLC",
    role: "Auditor",
    dateIssued: "Dec 21, 2020",
    period: "Apr 21, 2020 – Oct 21, 2020",
    image: "/credentials/node-consult-hipcie-auditor-experience.jpg",
    summary:
      "Certifies six months as Auditor on the Hawassa Industrial Park Community Impact Evaluation (HIPCIE) project — conducting audit surveys, spot-checks, re-interviews, and daily resolution of central team data quality reports.",
  },
  {
    id: "green-professional-letter-2019",
    title: "Multi-Project Field Supervision & Enumeration Certificate",
    organization: "GREEN Professional Services PLC",
    role: "Supervisor & Enumerator",
    dateIssued: "Jan 10, 2019",
    period: "Jul 2017 – Jan 2019",
    referenceNo: "GPS/448/2018",
    image: "/credentials/green-professional-services-experience.jpg",
    summary:
      "Documents five major agricultural and livelihood surveys across SNNPR, Oromia, and Amhara (PASIDP Rounds 3 & 4, LIVES Endline, PSN4 Livelihood Transfer Baseline, and CIMMYT Survey) using CSPro tablet systems.",
  },
]

export const experienceRoles: ExperienceRole[] = [
  {
    id: "psi-data-manager",
    title: "Data Manager",
    organization: "FDRE Policy Studies Institute (PSI)",
    organizationHref: siteConfig.employers[0].href,
    formerly: "formerly EDRI",
    period: "2022 – Present",
    summary:
      "Lead data management for multidisciplinary national and sector research surveys — programming CAPI/CATI tools, supervising field data quality, and delivering analysis-ready datasets and monitoring dashboards.",
    highlights: [
      "Boosted survey efficiency through CAPI/CATI tools (SurveyCTO, KoboToolbox).",
      "Improved data quality by implementing automated high-frequency checks (HFC).",
      "Strengthened field team capacity with training and real-time technical support.",
      "Delivered interactive dashboards for real-time monitoring and clean datasets.",
      "Produced preliminary analysis reports that informed project decisions.",
    ],
    selectedProjectNotes: [
      "National Survey on Persons with Disabilities (9,200 households)",
      "Multidimensional Child Poverty and Deprivations (7,091 households)",
      "Digital Credit and Borrowers’ Welfare (1,173 firm cases)",
      "Child Grant Pilot Program assessment (1,569 households)",
      "Sports Betting Impacts national study (2,680 mixed-mode cases)",
      "Education to Work Transition (4,061 phone survey instances)",
    ],
    credentialLetter: experienceLetters[1],
  },
  {
    id: "aer-database-manager",
    title: "Database Manager",
    organization: "Addis Economic Research PLC (AER)",
    organizationHref: siteConfig.employers[1].href,
    period: "2021 – Present",
    summary:
      "Support research operations with survey form design, automated quality checks, audio audits, field coordination, data cleaning, and real-time monitoring dashboards.",
    highlights: [
      "Designed electronic survey forms for CATI and CAPI using SurveyCTO.",
      "Implemented automated high-frequency checks (HFC) and daily audio audits.",
      "Trained enumerators and supervisors on CAPI utilization, data entry, and reporting.",
      "Monitored data quality continuously and coordinated with field staff.",
      "Designed dashboards for real-time data monitoring and delivered weekly cleaned datasets.",
    ],
    selectedProjectNotes: [
      "Improving Labor Migration to the Middle East (3,829 baseline cases)",
      "IFPRI Risk-Contingent Credit / RCC (1,040 households)",
      "Digital Payment Technologies among MSMEs (800 firm cases)",
      "IFPRI/ILRI conflict-affected livelihoods (180 kebele experiment cases)",
      "Information Frictions in Ethiopian Labor Market (1,818 experiment instances)",
      "IFAD RPSF-1 impact analysis (391 households)",
    ],
    credentialLetter: experienceLetters[0],
  },
]
