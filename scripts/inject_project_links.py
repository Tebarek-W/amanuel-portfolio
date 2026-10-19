from pathlib import Path

path = Path("data/projects.ts")
text = path.read_text(encoding="utf-8")

replacements = [
    (
        'summary:\n      "Household survey research on multidimensional child poverty and deprivations in Ethiopia.",',
        """summary:
      "Household survey research on multidimensional child poverty and deprivations in Ethiopia.",
    externalUrl:
      "http://www.psi.org.et/index.php/blog/237-the-state-of-multidimensional-child-poverty-and-deprivations-in-ethiopia-a-research-proposal",
    externalLabel: "PSI research page",
    source: "both",""",
    ),
    (
        'summary:\n      "Firm survey research examining digital credit and implications for borrowers\' welfare.",',
        """summary:
      "Firm survey research examining digital credit and implications for borrowers' welfare.",
    externalUrl: "https://www.socialscienceregistry.org/trials/13130",
    externalLabel: "AEA RCT Registry",
    source: "both",""",
    ),
    (
        'summary:\n      "Study investigating barriers to accessing and using housing finance in Ethiopia.",',
        """summary:
      "Study investigating barriers to accessing and using housing finance in Ethiopia.",
    externalUrl:
      "http://www.psi.org.et/index.php/blog/250-launching-validation-workshop-on-investigating-barriers-to-access-and-usage-of-housing-finance-in-ethiopia-held",
    externalLabel: "PSI workshop page",
    source: "both",""",
    ),
    (
        'summary:\n      "Firm survey research related to lease financing.",',
        """summary:
      "Firm survey research related to lease financing.",
    externalUrl:
      "https://idrc-crdi.ca/en/project/effects-lease-financing-small-and-medium-sized-enterprises-and-inclusion-ethiopia",
    externalLabel: "IDRC project page",
    source: "both",""",
    ),
    (
        'summary:\n      "IFPRI household survey on risk-contingent credit.",',
        """summary:
      "IFPRI household survey on risk-contingent credit.",
    externalUrl: "https://www.ifpri.org/project/risk-contingent-credit-resilience/",
    externalLabel: "IFPRI project page",
    source: "both",""",
    ),
    (
        'summary:\n      "Firm survey on digital payment adoption and access to finance among MSMEs.",',
        """summary:
      "Firm survey on digital payment adoption and access to finance among MSMEs.",
    externalUrl:
      "https://pedl.cepr.org/content/adoption-digital-payment-technologies-and-access-finance-among-msmes-ethiopia-exploratory-0",
    externalLabel: "PEDL project page",
    source: "both",""",
    ),
    (
        'summary:\n      "Experimental research on rehabilitating livelihoods in conflict-affected communities.",',
        """summary:
      "Experimental research on rehabilitating livelihoods in conflict-affected communities.",
    externalUrl:
      "https://essp.ifpri.info/2023/10/05/survey-watch-actionable-research-to-inform-rehabilitation-and-rebuilding-of-livelihoods-in-conflict-affected-communities-in-ethiopia/",
    externalLabel: "IFPRI ESSP survey watch",
    source: "both",""",
    ),
    (
        'summary:\n      "Experimental research on gender norms and female-owned enterprises in Ethiopia.",',
        """summary:
      "Experimental research on gender norms and female-owned enterprises in Ethiopia.",
    externalUrl:
      "https://pedl.cepr.org/content/impact-social-norms-and-household-dynamics-female-owned-enterprises-0",
    externalLabel: "PEDL project page",
    source: "both",""",
    ),
    (
        'summary:\n      "IFAD impact analysis and reporting for Ethiopia’s Rural Poor Stimulus Facility (RPSF-1).",',
        """summary:
      "IFAD impact analysis and reporting for Ethiopia’s Rural Poor Stimulus Facility (RPSF-1).",
    externalUrl: "https://webapps.ifad.org/members/eb/136/docs/EB-2022-136-R-21.pdf",
    externalLabel: "IFAD Executive Board document (PDF)",
    source: "both",""",
    ),
]

for old, new in replacements:
    if old not in text:
        print("MISSING:", old[:80])
    else:
        text = text.replace(old, new, 1)
        print("OK:", old[20:60])

new_projects = r'''
,
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
    source: "google-sites",
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
    source: "google-sites",
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
    source: "google-sites",
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
    source: "google-sites",
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
    source: "google-sites",
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
    source: "google-sites",
  },
'''

marker = "]\n\nexport function getFeaturedProjects"
if marker not in text:
    raise SystemExit("marker not found")
if "urban-land-lease-markets" not in text:
    text = text.replace(marker, new_projects + "]\n\nexport function getFeaturedProjects", 1)
    print("Appended new Google Sites projects")
else:
    print("New projects already present")

path.write_text(text, encoding="utf-8")
print("Wrote", path)
