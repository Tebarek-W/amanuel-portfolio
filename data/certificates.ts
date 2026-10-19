export type CertificateTopic =
  | "field-research"
  | "reproducible-research"
  | "data-science"
  | "survey-methods"
  | "gis"
  | "foundations"

export type Certificate = {
  id: string
  title: string
  issuer: string
  dateLabel: string
  topic: CertificateTopic
}

export const certificateTopics: Record<CertificateTopic, string> = {
  "field-research": "Field research operations",
  "reproducible-research": "Reproducible research",
  "data-science": "Data science",
  "survey-methods": "Survey methods",
  gis: "Geospatial analysis",
  foundations: "Foundations",
}

export const certificates: Certificate[] = [
  {
    id: "wb-dime-field-research",
    title: "Manage Successful Field Research",
    issuer: "World Bank DIME",
    dateLabel: "Nov 2024",
    topic: "field-research",
  },
  {
    id: "wb-dime-reproducible",
    title: "Reproducible Research Fundamentals",
    issuer: "World Bank DIME",
    dateLabel: "Dec 2023",
    topic: "reproducible-research",
  },
  {
    id: "umich-applied-ds",
    title: "Applied Data Science with Python",
    issuer: "University of Michigan / Coursera",
    dateLabel: "2022",
    topic: "data-science",
  },
  {
    id: "jhu-household-surveys",
    title: "Household Surveys for Program Evaluation",
    issuer: "Johns Hopkins / Coursera",
    dateLabel: "2023",
    topic: "survey-methods",
  },
  {
    id: "ucdavis-gis",
    title: "Geographic Information Systems (GIS)",
    issuer: "UC Davis / Coursera",
    dateLabel: "2022",
    topic: "gis",
  },
  {
    id: "cmos-spss",
    title: "Basic Computer & SPSS Application",
    issuer: "CMOS",
    dateLabel: "2019",
    topic: "foundations",
  },
]
