export type ProjectCategory =
  | "disability-inclusion"
  | "child-poverty"
  | "financial-inclusion"
  | "housing"
  | "labor-migration"
  | "education"
  | "health-social"
  | "msme-finance"
  | "gender-enterprise"
  | "urban-policy"
  | "food-systems"
  | "digital-governance"

export type ProjectOrg = "PSI" | "AER" | "IFPRI" | "ILRI" | "IFAD" | "Other"

export type Project = {
  slug: string
  title: string
  organization: string
  orgKey: ProjectOrg
  category: ProjectCategory
  domain: string
  dateLabel: string
  surveySize?: string
  contribution: string
  responsibilities: string[]
  tools?: string[]
  featured: boolean
  summary: string
  externalUrl?: string
  externalLabel?: string
}

export const projectCategories: Record<
  ProjectCategory,
  { label: string; description: string }
> = {
  "disability-inclusion": {
    label: "Disability & inclusion",
    description: "National and thematic research on disability and inclusion.",
  },
  "child-poverty": {
    label: "Child poverty & welfare",
    description: "Child-focused poverty, grants, and development research.",
  },
  "financial-inclusion": {
    label: "Finance & credit",
    description: "Digital credit, financial inclusion, and related firm or household surveys.",
  },
  housing: {
    label: "Housing",
    description: "Housing finance, affordability, and quality-of-life research.",
  },
  "labor-migration": {
    label: "Labor & migration",
    description: "Labor markets, migration, and displacement-related studies.",
  },
  education: {
    label: "Education",
    description: "Education-to-work transition and conflict impacts on schooling.",
  },
  "health-social": {
    label: "Health & social",
    description: "Social impacts and related thematic surveys.",
  },
  "msme-finance": {
    label: "MSME & payments",
    description: "Digital payments and access to finance among enterprises.",
  },
  "gender-enterprise": {
    label: "Gender & enterprise",
    description: "Gender norms and female-owned enterprise research.",
  },
  "urban-policy": {
    label: "Urban policy",
    description: "Urban land, city systems, and related policy research.",
  },
  "food-systems": {
    label: "Food systems",
    description: "Diet policy, food security, and related systems research.",
  },
  "digital-governance": {
    label: "Digital governance",
    description: "Public-sector IT governance and related policy work.",
  },
}

export const projects: Project[] = [
  {
    slug: "national-survey-persons-with-disabilities",
    title: "National Survey on Persons with Disabilities in Ethiopia",
    organization: "FDRE Policy Studies Institute (PSI)",
    orgKey: "PSI",
    category: "disability-inclusion",
    domain: "Disability & social inclusion",
    dateLabel: "Aug 23, 2024 – Mar 1, 2025",
    surveySize: "9,200 household survey cases",
    contribution:
      "Data manager responsible for survey data management across a large national household survey.",
    responsibilities: [
      "Managed household survey data workflows for a national disability survey.",
      "Supported CAPI/CATI programming, high-frequency checks, and analysis-ready delivery consistent with PSI data management practice.",
    ],
    tools: ["SurveyCTO", "Kobo", "HFC monitoring"],
    featured: true,
    summary:
      "Large-scale national household survey documenting the situation of persons with disabilities in Ethiopia.",
  },
  {
    slug: "multidimensional-child-poverty",
    title: "State of Multidimensional Child Poverty and Deprivations in Ethiopia",
    organization: "FDRE Policy Studies Institute (PSI)",
    orgKey: "PSI",
    category: "child-poverty",
    domain: "Child poverty & deprivation",
    dateLabel: "Nov 20, 2023 – Mar 8, 2024",
    surveySize: "7,091 household survey cases",
    contribution:
      "Data manager for household survey data collection and quality workflows.",
    responsibilities: [
      "Managed household survey data for a multidimensional child poverty study.",
      "Supported field monitoring, validation, and clean dataset delivery.",
    ],
    featured: true,
    summary:
      "Household survey research on multidimensional child poverty and deprivations in Ethiopia.",
    externalUrl:
      "http://www.psi.org.et/index.php/blog/237-the-state-of-multidimensional-child-poverty-and-deprivations-in-ethiopia-a-research-proposal",
    externalLabel: "PSI research page",
  },
  {
    slug: "digital-credit-borrowers-welfare",
    title:
      "Digital Credit and Borrowers’ Welfare in Ethiopia: A Pilot Random Control Trial Study",
    organization: "FDRE Policy Studies Institute (PSI)",
    orgKey: "PSI",
    category: "financial-inclusion",
    domain: "Digital finance",
    dateLabel: "Apr 24, 2024 – Oct 15, 2025",
    surveySize: "1,173 firm survey cases",
    contribution:
      "Data manager for firm survey data across an extended digital credit research timeline.",
    responsibilities: [
      "Managed firm survey data workflows for digital credit and borrower welfare research.",
      "Supported survey operations, quality checks, and dataset preparation.",
    ],
    featured: true,
    summary:
      "Firm survey research examining digital credit and implications for borrowers' welfare.",
    externalUrl: "https://www.socialscienceregistry.org/trials/13130",
    externalLabel: "AEA RCT Registry",
  },
  {
    slug: "child-grant-pilot-assessment",
    title: "Assessment of the Child Grant Pilot Program in Ethiopia",
    organization: "FDRE Policy Studies Institute (PSI) — UNICEF-funded Annual Working Plan",
    orgKey: "PSI",
    category: "child-poverty",
    domain: "Social protection",
    dateLabel: "Mar 30, 2026 – Apr 20, 2026",
    surveySize: "1,569 household survey cases",
    contribution:
      "Managed household survey data for UNICEF-funded child-focused evidence generation.",
    responsibilities: [
      "Managed household survey cases for the Child Grant Pilot Program assessment.",
      "Supported digital collection and data quality processes for the study window.",
    ],
    featured: true,
    summary:
      "Child-focused research assessing Ethiopia’s Child Grant Pilot Program under a UNICEF-funded evidence generation workstream.",
  },
  {
    slug: "education-to-work-transition",
    title:
      "State of Education to Work Transition of Higher Education Graduates in Ethiopia",
    organization: "FDRE Policy Studies Institute (PSI)",
    orgKey: "PSI",
    category: "education",
    domain: "Education & labor",
    dateLabel: "Jun–Jul 2022",
    surveySize: "4,061 phone survey instances",
    contribution:
      "Managed phone survey data for a national graduate education-to-work transition study.",
    responsibilities: [
      "Managed CATI survey instances and related data quality workflows.",
      "Supported delivery of clean datasets for research use.",
    ],
    featured: true,
    summary:
      "Phone survey research on how higher education graduates transition into work in Ethiopia.",
  },
  {
    slug: "sports-betting-impacts",
    title:
      "National Study on the Social, Economic and Psychological Impacts of Sports Betting in Ethiopia",
    organization: "FDRE Policy Studies Institute (PSI)",
    orgKey: "PSI",
    category: "health-social",
    domain: "Social & behavioral research",
    dateLabel: "Jun 23, 2026 – Jul 15, 2026",
    surveySize: "2,680 survey cases (in-person and phone)",
    contribution:
      "Managed mixed-mode survey cases spanning in-person and phone data collection.",
    responsibilities: [
      "Managed in-person and phone survey cases for a national sports betting impacts study.",
      "Supported real-time monitoring and data quality processes.",
    ],
    featured: true,
    summary:
      "National mixed-mode survey on social, economic, and psychological impacts of sports betting.",
  },
  {
    slug: "scaling-childcare",
    title:
      "Scaling Childcare to Promote Women’s Economic Empowerment and Child Development in Ethiopia",
    organization: "FDRE Policy Studies Institute (PSI)",
    orgKey: "PSI",
    category: "child-poverty",
    domain: "Childcare & women’s economic empowerment",
    dateLabel: "Documented as a PSI data management assignment",
    contribution: "Served as data manager for the project.",
    responsibilities: [
      "Data management support for childcare, women’s empowerment, and child development research.",
    ],
    featured: false,
    summary:
      "Research project on scaling childcare to support women’s economic empowerment and child development.",
  },
  {
    slug: "housing-finance-barriers",
    title: "Investigating Barriers to Access and Usage of Housing Finance in Ethiopia",
    organization: "FDRE Policy Studies Institute (PSI)",
    orgKey: "PSI",
    category: "housing",
    domain: "Housing finance",
    dateLabel: "Apr 20 – May 29, 2023",
    contribution: "Data management contribution to housing finance access research.",
    responsibilities: [
      "Supported survey data management for housing finance barrier research.",
    ],
    featured: false,
    summary:
      "Study investigating barriers to accessing and using housing finance in Ethiopia.",
    externalUrl:
      "http://www.psi.org.et/index.php/blog/250-launching-validation-workshop-on-investigating-barriers-to-access-and-usage-of-housing-finance-in-ethiopia-held",
    externalLabel: "PSI workshop page",
  },
  {
    slug: "housing-provision-quality-of-life",
    title: "Impact Evaluation of Housing Provision on Quality of Life",
    organization: "FDRE Policy Studies Institute (PSI)",
    orgKey: "PSI",
    category: "housing",
    domain: "Housing & wellbeing",
    dateLabel: "Jan 15 – Feb 20, 2023",
    surveySize: "1,171 firm survey cases",
    contribution: "Managed firm survey data for a housing provision impact evaluation.",
    responsibilities: [
      "Managed firm survey data and associated quality workflows.",
    ],
    featured: false,
    summary:
      "Impact evaluation research linking housing provision and quality-of-life outcomes.",
  },
  {
    slug: "international-migration-policy",
    title:
      "Causes, Challenges and Opportunities of International Migration in Ethiopia: Search for Policy Options",
    organization: "FDRE Policy Studies Institute (PSI)",
    orgKey: "PSI",
    category: "labor-migration",
    domain: "Migration policy",
    dateLabel: "Dec 19, 2022 – Jan 24, 2023",
    surveySize: "2,357 survey instances",
    contribution: "Managed survey instances for international migration policy research.",
    responsibilities: [
      "Managed survey data collection workflows and quality monitoring.",
    ],
    featured: false,
    summary:
      "Policy-oriented research on causes, challenges, and opportunities of international migration.",
  },
  {
    slug: "urban-housing-affordability",
    title:
      "Urban Housing Affordability and Its Implication on Poverty and Food Security in Ethiopia",
    organization: "FDRE Policy Studies Institute (PSI)",
    orgKey: "PSI",
    category: "housing",
    domain: "Housing, poverty & food security",
    dateLabel: "Oct 12 – Nov 16, 2022",
    surveySize: "1,598 household survey cases",
    contribution: "Managed household survey data for urban housing affordability research.",
    responsibilities: [
      "Managed household survey data and cleaning workflows.",
    ],
    featured: false,
    summary:
      "Household survey examining urban housing affordability and links to poverty and food security.",
  },
  {
    slug: "trade-finance-ethiopia",
    title: "Trade Finance in Ethiopia: Exploring the Challenges and Possible Solutions",
    organization: "FDRE Policy Studies Institute (PSI)",
    orgKey: "PSI",
    category: "financial-inclusion",
    domain: "Trade finance",
    dateLabel: "Mar–Apr 2023",
    contribution: "Data management contribution to trade finance research.",
    responsibilities: [
      "Supported survey and data management processes for trade finance research.",
    ],
    featured: false,
    summary: "Research exploring challenges and solutions in Ethiopia’s trade finance landscape.",
  },
  {
    slug: "financial-inclusion-older-urban-poor",
    title:
      "Understanding the Barriers to Financial Inclusion of Older Urban Poor in Ethiopia",
    organization: "FDRE Policy Studies Institute (PSI)",
    orgKey: "PSI",
    category: "financial-inclusion",
    domain: "Financial inclusion",
    dateLabel: "Feb–Mar 2023",
    surveySize: "463 household survey cases",
    contribution: "Managed household survey data on financial inclusion barriers.",
    responsibilities: [
      "Managed household survey cases and data quality processes.",
    ],
    featured: false,
    summary:
      "Household survey on barriers to financial inclusion among older urban poor populations.",
  },
  {
    slug: "conflict-child-education",
    title: "The Impact of Conflict on Child Education",
    organization: "FDRE Policy Studies Institute (PSI)",
    orgKey: "PSI",
    category: "education",
    domain: "Education in conflict settings",
    dateLabel: "May–Jun 2023",
    contribution: "Data management contribution to conflict and child education research.",
    responsibilities: [
      "Supported data management for research on conflict impacts on child education.",
    ],
    featured: false,
    summary: "Research on how conflict affects children’s education.",
  },
  {
    slug: "lease-financing",
    title:
      "The Effects of Lease Financing on Small and Medium-sized Enterprises and Inclusion in Ethiopia",
    organization: "FDRE Policy Studies Institute (PSI)",
    orgKey: "PSI",
    category: "financial-inclusion",
    domain: "Lease finance",
    dateLabel: "May–Jul 2023",
    surveySize: "1,367 firm survey cases",
    contribution: "Managed firm survey data for lease financing research.",
    responsibilities: [
      "Managed firm survey data workflows and quality checks.",
    ],
    featured: false,
    summary:
      "Firm survey research on lease financing effects for SMEs and inclusion in Ethiopia.",
    externalUrl:
      "https://idrc-crdi.ca/en/project/effects-lease-financing-small-and-medium-sized-enterprises-and-inclusion-ethiopia",
    externalLabel: "IDRC project page",
  },
  {
    slug: "improving-labor-migration-middle-east",
    title: "Improving Labor Migration to the Middle East",
    organization: "Addis Economic Research PLC (AER)",
    orgKey: "AER",
    category: "labor-migration",
    domain: "Labor migration",
    dateLabel: "Baseline survey (dates not specified in CV)",
    surveySize: "3,829 baseline survey cases",
    contribution: "Managed baseline survey data as Database Manager at AER.",
    responsibilities: [
      "Designed survey forms for CATI/CAPI where required.",
      "Implemented automated high-frequency checks.",
      "Monitored data quality and coordinated with field staff.",
    ],
    featured: true,
    summary:
      "Baseline survey supporting research on improving labor migration to the Middle East.",
  },
  {
    slug: "risk-contingent-credit",
    title:
      "Promoting Resilience and Food Security through Risk-Contingent Credit (RCC) in Africa",
    organization: "Addis Economic Research PLC (AER) / IFPRI",
    orgKey: "IFPRI",
    category: "financial-inclusion",
    domain: "Agricultural finance",
    dateLabel: "Jun 2024 – Sep 2024",
    surveySize: "1,040 household survey cases",
    contribution: "Managed household survey data for the IFPRI RCC survey.",
    responsibilities: [
      "Managed household survey data and quality assurance workflows.",
    ],
    featured: false,
    summary: "IFPRI household survey on risk-contingent credit.",
    externalUrl: "https://www.ifpri.org/project/risk-contingent-credit-resilience/",
    externalLabel: "IFPRI project page",
  },
  {
    slug: "digital-payment-msmes",
    title:
      "Adoption of Digital Payment Technologies and Access to Finance among MSMEs in Ethiopia",
    organization: "Addis Economic Research PLC (AER)",
    orgKey: "AER",
    category: "msme-finance",
    domain: "Digital payments & MSME finance",
    dateLabel: "Dec 2023 – Feb 2024",
    surveySize: "800 firm survey cases",
    contribution: "Managed firm survey data on digital payments and MSME finance access.",
    responsibilities: [
      "Managed firm survey collection, monitoring, and cleaning workflows.",
    ],
    featured: false,
    summary:
      "Firm survey on digital payment adoption and access to finance among MSMEs.",
    externalUrl:
      "https://pedl.cepr.org/content/adoption-digital-payment-technologies-and-access-finance-among-msmes-ethiopia-exploratory-0",
    externalLabel: "PEDL project page",
  },
  {
    slug: "rehabilitation-conflict-affected",
    title:
      "Rehabilitation and Rebuilding of Livelihoods in Conflict-Affected Communities",
    organization: "Addis Economic Research PLC (AER) / IFPRI / ILRI",
    orgKey: "IFPRI",
    category: "labor-migration",
    domain: "Livelihoods & conflict recovery",
    dateLabel: "Nov 2023 – Jan 2024",
    surveySize: "180 kebele experiment data cases",
    contribution: "Managed kebele experiment data for IFPRI/ILRI research.",
    responsibilities: [
      "Managed experimental data and related quality processes.",
    ],
    featured: false,
    summary:
      "Experimental research on rehabilitating livelihoods in conflict-affected communities.",
    externalUrl:
      "https://essp.ifpri.info/2023/10/05/survey-watch-actionable-research-to-inform-rehabilitation-and-rebuilding-of-livelihoods-in-conflict-affected-communities-in-ethiopia/",
    externalLabel: "IFPRI ESSP survey watch",
  },
  {
    slug: "migration-displacement-labor",
    title: "Migration, Displacement, Labor Markets in Ethiopia",
    organization: "Addis Economic Research PLC (AER)",
    orgKey: "AER",
    category: "labor-migration",
    domain: "Migration & labor markets",
    dateLabel: "Apr 2023 – Jul 2023",
    contribution: "Data management contribution to migration and labor market research.",
    responsibilities: [
      "Supported survey programming, HFC, and field coordination as Database Manager.",
    ],
    featured: false,
    summary: "Research on migration, displacement, and labor markets in Ethiopia.",
  },
  {
    slug: "information-frictions-labor-market",
    title: "Information Frictions in Ethiopian Labor Market",
    organization: "Addis Economic Research PLC (AER)",
    orgKey: "AER",
    category: "labor-migration",
    domain: "Labor market experiments",
    dateLabel: "Feb 2023 – Mar 2023",
    surveySize: "1,818 experiment data instances",
    contribution: "Managed experiment data for labor market information frictions research.",
    responsibilities: [
      "Managed experimental data workflows and quality monitoring.",
    ],
    featured: false,
    summary: "Experimental study of information frictions in Ethiopia’s labor market.",
  },
  {
    slug: "gender-norms-female-enterprises",
    title:
      "The Impact of Social Norms and Household Dynamics on Female-owned Enterprises",
    organization: "Addis Economic Research PLC (AER)",
    orgKey: "AER",
    category: "gender-enterprise",
    domain: "Gender & enterprise",
    dateLabel: "Aug 2021 – Mar 2022",
    surveySize: "576 experiment data cases",
    contribution: "Managed experiment data for gender norms and female enterprise research.",
    responsibilities: [
      "Managed experimental data collection and quality assurance.",
    ],
    featured: false,
    summary:
      "Experimental research on gender norms and female-owned enterprises in Ethiopia.",
    externalUrl:
      "https://pedl.cepr.org/content/impact-social-norms-and-household-dynamics-female-owned-enterprises-0",
    externalLabel: "PEDL project page",
  },
  {
    slug: "rpsf-impact-analysis",
    title:
      "Impact Analysis & Reporting for Rural Poor Stimulus Facility (RPSF-1) Ethiopia",
    organization: "Addis Economic Research PLC (AER) / IFAD",
    orgKey: "IFAD",
    category: "financial-inclusion",
    domain: "Rural stimulus evaluation",
    dateLabel: "May–Jul 2022",
    surveySize: "391 household survey cases",
    contribution: "Managed household survey data for IFAD RPSF-1 impact analysis.",
    responsibilities: [
      "Managed household survey data and supported analysis-ready delivery.",
    ],
    featured: false,
    summary:
      "IFAD impact analysis and reporting for Ethiopia’s Rural Poor Stimulus Facility (RPSF-1).",
    externalUrl: "https://webapps.ifad.org/members/eb/136/docs/EB-2022-136-R-21.pdf",
    externalLabel: "IFAD Executive Board document (PDF)",
  },
  {
    slug: "urban-land-lease-markets",
    title: "Characteristics of Urban Land Lease Markets in Ethiopia",
    organization: "FDRE Policy Studies Institute (PSI)",
    orgKey: "PSI",
    category: "urban-policy",
    domain: "Urban land markets",
    dateLabel: "2022",
    contribution:
      "Listed on the public Google Site as a data management contribution in research projects.",
    responsibilities: [
      "Documented as a 2022 data management contribution on the public Google Site.",
    ],
    featured: false,
    summary:
      "Research on characteristics of urban land lease markets in Ethiopia.",
    externalUrl:
      "https://psi.org.et/index.php/blog/283-characteristics-of-urban-land-lease-markets-in-ethiopia-2",
    externalLabel: "PSI research page",
  },
  {
    slug: "addis-ababa-city-ecosystem",
    title: "Addis Ababa City Ecosystem Evaluation Study",
    organization: "FDRE Policy Studies Institute (PSI)",
    orgKey: "PSI",
    category: "urban-policy",
    domain: "Urban systems",
    dateLabel: "2023",
    contribution:
      "Listed on the public Google Site as a data management contribution in research projects.",
    responsibilities: [
      "Documented as a 2023 data management contribution on the public Google Site.",
    ],
    featured: false,
    summary: "Evaluation study of the Addis Ababa city ecosystem.",
    externalUrl:
      "http://www.psi.org.et/index.php/blog/242-launching-workshop-on-addis-ababa-city-ecosystem-evaluation-study-held",
    externalLabel: "PSI workshop page",
  },
  {
    slug: "migration-intentions-benefits",
    title:
      "The Impact of Expected Personal and Household Benefits on Migration Intentions in Ethiopia",
    organization: "Research collaboration (AEA RCT Registry)",
    orgKey: "Other",
    category: "labor-migration",
    domain: "Migration intentions",
    dateLabel: "2023",
    contribution:
      "Listed on the public Google Site as a data management contribution in research projects.",
    responsibilities: [
      "Documented as a 2023 data management contribution on the public Google Site.",
    ],
    featured: false,
    summary:
      "Registered trial research on how expected personal and household benefits relate to migration intentions.",
    externalUrl: "https://www.socialscienceregistry.org/trials/11285",
    externalLabel: "AEA RCT Registry",
  },
  {
    slug: "sustainable-diet-policy",
    title:
      "Leveraging a Systems Approach for a Healthier and Sustainable Diet Policy in Ethiopia",
    organization: "IDRC-supported research",
    orgKey: "Other",
    category: "food-systems",
    domain: "Diet & food systems policy",
    dateLabel: "2024",
    contribution:
      "Listed on the public Google Site as a data management contribution in research projects.",
    responsibilities: [
      "Documented as a 2024 data management contribution on the public Google Site.",
    ],
    featured: false,
    summary:
      "Systems-approach research toward healthier and more sustainable diet policy in Ethiopia.",
    externalUrl:
      "https://idrc-crdi.ca/en/project/leveraging-systems-approach-healthier-and-sustainable-diet-policy-ethiopia",
    externalLabel: "IDRC project page",
  },
  {
    slug: "it-governance-public-sectors",
    title: "IT Governance in Ethiopia Public Sectors: The Need for Policy Intervention",
    organization: "FDRE Policy Studies Institute (PSI)",
    orgKey: "PSI",
    category: "digital-governance",
    domain: "Public-sector IT governance",
    dateLabel: "2024",
    contribution:
      "Listed on the public Google Site as a data management contribution in research projects.",
    responsibilities: [
      "Documented as a 2024 data management contribution on the public Google Site.",
    ],
    featured: false,
    summary:
      "Policy-oriented research on IT governance needs in Ethiopia’s public sectors.",
    externalUrl:
      "https://psi.org.et/index.php/blog/268-it-governance-in-ethiopia-public-sectors-the-need-for-policy-intervention",
    externalLabel: "PSI research page",
  },
  {
    slug: "cbhi-health-service-utilization",
    title:
      "The Impact of Community-Based Health Insurance on Health Service Utilization (CBHI): An Experimental Evidence from Ethiopia",
    organization: "NIERA / Demand-Driven Research Initiative",
    orgKey: "Other",
    category: "health-social",
    domain: "Health insurance & utilization",
    dateLabel: "2024",
    contribution:
      "Listed on the public Google Site as a data management contribution in research projects.",
    responsibilities: [
      "Documented as a 2024 data management contribution on the public Google Site.",
    ],
    featured: true,
    summary:
      "Experimental evidence on how community-based health insurance affects health service utilization in Ethiopia.",
    externalUrl:
      "https://nieraglobal.org/niera_projects/details/demand-driven-research-initiative-ddri",
    externalLabel: "NIERA project page",
  },
]

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured)
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug)
}
