export type CertificateTopic =
  | "field-research"
  | "reproducible-research"
  | "data-science"
  | "survey-methods"
  | "gis"
  | "field-participation"
  | "foundations"

export type Certificate = {
  id: string
  title: string
  issuer: string
  dateLabel: string
  topic: CertificateTopic
  image?: string
  verifyUrl?: string
  credentialId?: string
  description?: string
}

export const certificateTopics: Record<CertificateTopic, string> = {
  "field-research": "Field research operations",
  "reproducible-research": "Reproducible research",
  "survey-methods": "Survey methodology",
  "data-science": "Data science & Python",
  gis: "Geospatial analysis (GIS)",
  "field-participation": "Field survey participation certificates",
  foundations: "Statistical & computing foundations",
}

export const certificates: Certificate[] = [
  {
    id: "wb-dime-field-research",
    title: "Manage Successful Field Research",
    issuer: "World Bank Group Academy · DIME Analytics",
    dateLabel: "Nov 3, 2024",
    topic: "field-research",
    image: "/credentials/wb-dime-manage-successful-field-research.jpg",
    description:
      "Issued by the World Bank Group Academy, DIME Analytics, and the World Bank Group Institute for Economic Development.",
  },
  {
    id: "wb-dime-reproducible",
    title: "Reproducible Research Fundamentals",
    issuer: "The World Bank — Development Impact (DIME) Department",
    dateLabel: "Dec 13, 2023",
    topic: "reproducible-research",
    image: "/credentials/wb-dime-reproducible-research-fundamentals.jpg",
    description:
      "Intensive training (Nov 29 – Dec 13, 2023) on transparent, reproducible data workflows for development impact research.",
  },
  {
    id: "jhu-household-surveys",
    title: "Household Surveys for Program Evaluation in LMICs",
    issuer: "Johns Hopkins University / Coursera",
    dateLabel: "Jan 26, 2023",
    topic: "survey-methods",
    image: "/credentials/jhu-household-surveys-lmics.jpg",
    verifyUrl: "https://coursera.org/verify/GPAEAQ8P4PBV",
    credentialId: "GPAEAQ8P4PBV",
    description:
      "Authorized by the Johns Hopkins Institute for International Programs and Department of International Health.",
  },
  {
    id: "umich-applied-ds",
    title: "Applied Data Science with Python (5-Course Specialization)",
    issuer: "University of Michigan / Coursera",
    dateLabel: "Dec 6, 2022",
    topic: "data-science",
    image: "/credentials/umich-applied-data-science-python.jpg",
    verifyUrl: "https://coursera.org/verify/specialization/RKMDTJH4ZNPZ",
    credentialId: "RKMDTJH4ZNPZ",
    description:
      "5-course specialization: Introduction to Data Science, Applied Plotting & Charting, Applied Machine Learning, Applied Text Mining, and Applied Social Network Analysis in Python.",
  },
  {
    id: "ucdavis-geospatial-analysis",
    title: "Geospatial and Environmental Analysis",
    issuer: "University of California, Davis / Coursera",
    dateLabel: "Nov 27, 2022",
    topic: "gis",
    image: "/credentials/ucdavis-geospatial-environmental-analysis.jpg",
    verifyUrl: "https://coursera.org/verify/T4H8LWFHAUCR",
    credentialId: "T4H8LWFHAUCR",
    description:
      "Spatial analysis workflows, environmental modeling, and raster/vector processing authorized by UC Davis.",
  },
  {
    id: "ucdavis-gis-data-formats",
    title: "GIS Data Formats, Design and Quality",
    issuer: "University of California, Davis / Coursera",
    dateLabel: "Nov 1, 2022",
    topic: "gis",
    image: "/credentials/ucdavis-gis-data-formats-design-quality.jpg",
    verifyUrl: "https://coursera.org/verify/7QKBKU9VK4XA",
    credentialId: "7QKBKU9VK4XA",
    description:
      "Geodatabase design, spatial data formats, cartographic design principles, and spatial data quality management.",
  },
  {
    id: "ucdavis-gis-fundamentals",
    title: "Fundamentals of GIS",
    issuer: "University of California, Davis / Coursera",
    dateLabel: "Oct 29, 2022",
    topic: "gis",
    image: "/credentials/ucdavis-fundamentals-of-gis.jpg",
    verifyUrl: "https://coursera.org/verify/W7RZNDSG6T46",
    credentialId: "W7RZNDSG6T46",
    description:
      "Core geographic information systems concepts, map projections, coordinate systems, and desktop GIS operations.",
  },
  {
    id: "jsi-l10k-surveycto",
    title: "Quantitative Household Data Collection (SurveyCTO)",
    issuer: "JSI Research & Training Institute, Inc. — L10K Project",
    dateLabel: "2020",
    topic: "field-participation",
    image: "/credentials/jsi-l10k-surveycto-certificate.jpg",
    description:
      "Awarded for quantitative household data collection for the baseline evaluation of alternative community engagement options in SNNP region using the SurveyCTO mobile app.",
  },
  {
    id: "kuleuven-amu-odk",
    title: "Rural Household Experiment on Fertility Decision (ODK)",
    issuer: "KU Leuven & Arba Minch University",
    dateLabel: "Sep 6, 2019",
    topic: "field-participation",
    image: "/credentials/kuleuven-amu-fertility-decision-odk.jpg",
    description:
      "Certificate of participation in tablet-based field data collection using ODK in sample rural villages of SNNPR (Jun 24 – Sep 5, 2019).",
  },
  {
    id: "amu-iuc-surveycto-gps",
    title: "Tablet-Based Rural Household Survey & GPS Plot Measurement",
    issuer: "Arba Minch University — AMU-IUC Program",
    dateLabel: "Oct 30, 2018",
    topic: "field-participation",
    image: "/credentials/amu-iuc-rural-household-survey.jpg",
    description:
      "Five-day training and rural household survey covering socio-economic data, GPS plot measurement, and incentivized risk experiments using SurveyCTO (Aug 20 – Oct 30, 2018).",
  },
  {
    id: "cmos-spss",
    title: "Basic Computer & SPSS Application",
    issuer: "CMOS",
    dateLabel: "2019",
    topic: "foundations",
    description:
      "Foundational statistical computing and data management training in SPSS.",
  },
]
