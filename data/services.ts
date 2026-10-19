export type Service = {
  slug: string
  title: string
  summary: string
  deliverables: string[]
  value: string
}

export const services: Service[] = [
  {
    slug: "digital-data-collection",
    title: "Digital Data Collection and Survey Programming",
    summary:
      "Design and program digital survey instruments for CAPI and CATI fieldwork, including multilingual questionnaires and complex skip logic.",
    deliverables: [
      "Digital data collection form development",
      "Multilingual questionnaires and complex survey workflows",
      "Form testing, deployment, and troubleshooting",
      "Support for SurveyCTO, KoboToolbox, ODK, and related CAPI/CATI setups",
    ],
    value:
      "Helps research teams launch reliable digital surveys faster and reduce instrument-related field errors.",
  },
  {
    slug: "data-quality-assurance",
    title: "Data Quality Assurance and Management",
    summary:
      "Put monitoring and validation systems in place so issues are caught during fieldwork — not after the survey window closes.",
    deliverables: [
      "High-frequency data quality monitoring",
      "Automated validation and error detection",
      "Data cleaning, consistency checks, and analysis-ready dataset preparation",
      "Field coordination support for supervisors and enumerators",
    ],
    value:
      "Improves dataset integrity and shortens the path from fieldwork to usable research data.",
  },
  {
    slug: "research-me-support",
    title: "Research, Monitoring and Evaluation Support",
    summary:
      "Support quantitative research operations with survey design collaboration, data management, and progress tracking.",
    deliverables: [
      "Quantitative research support",
      "Survey design and data management",
      "Monitoring dashboards and progress tracking",
      "Preliminary analysis inputs for project decision-making",
    ],
    value:
      "Gives M&E and research teams clearer visibility into fieldwork progress and data readiness.",
  },
  {
    slug: "statistical-ml",
    title: "Statistical Analysis and Machine Learning",
    summary:
      "Apply statistical programming and supervised machine learning to support evidence generation, including model development and comparison where appropriate.",
    deliverables: [
      "Statistical analysis using R, Python, Stata, and SPSS",
      "Model development and evaluation",
      "Model comparison and hyperparameter optimization",
      "Explainable AI approaches where useful for interpretation",
    ],
    value:
      "Turns cleaned research datasets into analytical outputs that can inform policy and program decisions.",
  },
  {
    slug: "reporting-visualization",
    title: "Reporting and Data Visualization",
    summary:
      "Build dashboards and analytical reports that make survey operations and findings easier to monitor and communicate.",
    deliverables: [
      "Dashboard development and performance monitoring",
      "Analytical reports",
      "Visualization with Power BI, Looker Studio, Python, and R",
    ],
    value:
      "Helps stakeholders track progress and communicate results without drowning in raw tables.",
  },
  {
    slug: "geospatial-analysis",
    title: "Geospatial Data Analysis",
    summary:
      "Support research with GIS workflows and geospatial visualization grounded in geography and environmental analysis experience.",
    deliverables: [
      "Geospatial analysis with ArcGIS Pro and QGIS",
      "Python-based geospatial processing where needed",
      "Spatial visualization to support accessibility and location-based research questions",
    ],
    value:
      "Adds a spatial lens to research questions that depend on place, access, and geographic context.",
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug)
}
