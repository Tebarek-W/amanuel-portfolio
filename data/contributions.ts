/**
 * Year-grouped data management contributions.
 * `projectSlug` connects a list item to this portfolio’s project detail page when available.
 */

export type ContributionItem = {
  year: 2022 | 2023 | 2024
  title: string
  /** External institutional / registry source URL, when present */
  sourceUrl?: string
  sourceLabel?: string
  /** Matching portfolio project slug, when one exists */
  projectSlug?: string
}

export const contributions: ContributionItem[] = [
  // 2022
  {
    year: 2022,
    title:
      "The Impact of Social Norms and Household Dynamics on Female-owned Enterprises",
    sourceUrl:
      "https://pedl.cepr.org/content/impact-social-norms-and-household-dynamics-female-owned-enterprises-0",
    sourceLabel: "PEDL project page",
    projectSlug: "gender-norms-female-enterprises",
  },
  {
    year: 2022,
    title:
      "Impact Analysis and Reporting for Rural Poor Stimulus Facility (RPSF-1) Ethiopia",
    sourceUrl:
      "https://webapps.ifad.org/members/eb/136/docs/EB-2022-136-R-21.pdf",
    sourceLabel: "IFAD document (PDF)",
    projectSlug: "rpsf-impact-analysis",
  },
  {
    year: 2022,
    title: "Characteristics of Urban Land Lease Markets in Ethiopia",
    sourceUrl:
      "https://psi.org.et/index.php/blog/283-characteristics-of-urban-land-lease-markets-in-ethiopia-2",
    sourceLabel: "PSI research page",
    projectSlug: "urban-land-lease-markets",
  },
  {
    year: 2022,
    title:
      "Education to Work Transition of Graduates in Ethiopia: Key Challenges and Insights for Policy Options",
    // Listed on Google Site with "Here", but no working external href was present in the page markup.
    projectSlug: "education-to-work-transition",
  },
  // 2023
  {
    year: 2023,
    title:
      "The Effects of Lease Financing on Small and Medium-sized Enterprises and Inclusion in Ethiopia",
    sourceUrl:
      "https://idrc-crdi.ca/en/project/effects-lease-financing-small-and-medium-sized-enterprises-and-inclusion-ethiopia",
    sourceLabel: "IDRC project page",
    projectSlug: "lease-financing",
  },
  {
    year: 2023,
    title:
      "Investigating Barriers to Access and Usage of Housing Finance in Ethiopia",
    sourceUrl:
      "http://www.psi.org.et/index.php/blog/250-launching-validation-workshop-on-investigating-barriers-to-access-and-usage-of-housing-finance-in-ethiopia-held",
    sourceLabel: "PSI workshop page",
    projectSlug: "housing-finance-barriers",
  },
  {
    year: 2023,
    title: "Addis Ababa City Ecosystem Evaluation Study",
    sourceUrl:
      "http://www.psi.org.et/index.php/blog/242-launching-workshop-on-addis-ababa-city-ecosystem-evaluation-study-held",
    sourceLabel: "PSI workshop page",
    projectSlug: "addis-ababa-city-ecosystem",
  },
  {
    year: 2023,
    title:
      "The impact of expected personal and household benefits on migration intentions in Ethiopia",
    sourceUrl: "https://www.socialscienceregistry.org/trials/11285",
    sourceLabel: "AEA RCT Registry",
    projectSlug: "migration-intentions-benefits",
  },
  {
    year: 2023,
    title:
      "Rehabilitation and Rebuilding of Livelihoods in Conflict-Affected Communities in Ethiopia",
    sourceUrl:
      "https://essp.ifpri.info/2023/10/05/survey-watch-actionable-research-to-inform-rehabilitation-and-rebuilding-of-livelihoods-in-conflict-affected-communities-in-ethiopia/",
    sourceLabel: "IFPRI ESSP survey watch",
    projectSlug: "rehabilitation-conflict-affected",
  },
  // 2024
  {
    year: 2024,
    title:
      "Adoption of Digital Payment Technologies and Access to Finance among MSMEs in Ethiopia: Exploratory Evidence",
    sourceUrl:
      "https://pedl.cepr.org/content/adoption-digital-payment-technologies-and-access-finance-among-msmes-ethiopia-exploratory-0",
    sourceLabel: "PEDL project page",
    projectSlug: "digital-payment-msmes",
  },
  {
    year: 2024,
    title: "The State of Multidimensional Child Poverty and Deprivations in Ethiopia",
    sourceUrl:
      "http://www.psi.org.et/index.php/blog/237-the-state-of-multidimensional-child-poverty-and-deprivations-in-ethiopia-a-research-proposal",
    sourceLabel: "PSI research page",
    projectSlug: "multidimensional-child-poverty",
  },
  {
    year: 2024,
    title:
      "Leveraging a Systems Approach for a Healthier and Sustainable Diet Policy in Ethiopia",
    sourceUrl:
      "https://idrc-crdi.ca/en/project/leveraging-systems-approach-healthier-and-sustainable-diet-policy-ethiopia",
    sourceLabel: "IDRC project page",
    projectSlug: "sustainable-diet-policy",
  },
  {
    year: 2024,
    title:
      "IT Governance In Ethiopia Public Sectors: The Need For Policy Intervention",
    sourceUrl:
      "https://psi.org.et/index.php/blog/268-it-governance-in-ethiopia-public-sectors-the-need-for-policy-intervention",
    sourceLabel: "PSI research page",
    projectSlug: "it-governance-public-sectors",
  },
  {
    year: 2024,
    title:
      "Digital Credit and Borrowers’ Welfare in Ethiopia: A Pilot Random Control Trial Study",
    sourceUrl: "https://www.socialscienceregistry.org/trials/13130",
    sourceLabel: "AEA RCT Registry",
    projectSlug: "digital-credit-borrowers-welfare",
  },
  {
    year: 2024,
    title:
      "Promoting Resilience and Food Security through Risk-Contingent Credit (RCC) in Africa",
    sourceUrl: "https://www.ifpri.org/project/risk-contingent-credit-resilience/",
    sourceLabel: "IFPRI project page",
    projectSlug: "risk-contingent-credit",
  },
  {
    year: 2024,
    title:
      "The Impact of Community-Based Health Insurance on Health Service Utilization (CBHI): An Experimental Evidence from Ethiopia",
    sourceUrl:
      "https://nieraglobal.org/niera_projects/details/demand-driven-research-initiative-ddri",
    sourceLabel: "NIERA project page",
    projectSlug: "cbhi-health-service-utilization",
  },
]

export const contributionYears = [2024, 2023, 2022] as const

export function getContributionsByYear(year: ContributionItem["year"]) {
  return contributions.filter((item) => item.year === year)
}
