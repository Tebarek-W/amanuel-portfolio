export type Service = {
  slug: string
  title: string
  summary: string
  deliverables: string[]
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
      "Form testing, deployment and troubleshooting",
    ],
  },
  {
    slug: "data-quality-assurance",
    title: "Data Quality Assurance and Management",
    summary:
      "Put monitoring and validation systems in place so issues are caught during fieldwork — not after the survey window closes.",
    deliverables: [
      "High-frequency data quality monitoring",
      "Automated validation and error detection",
      "Data cleaning, consistency checks and analysis-ready dataset preparation",
    ],
  },
  {
    slug: "research-me-support",
    title: "Research, Monitoring and Evaluation",
    summary:
      "Support quantitative research operations with survey design collaboration, data management, and progress tracking.",
    deliverables: [
      "Quantitative research support",
      "Survey design and data management",
      "Monitoring dashboards and progress tracking",
    ],
  },
  {
    slug: "machine-learning",
    title: "Machine Learning",
    summary:
      "Apply supervised machine learning and related analytical workflows to support evidence generation from research datasets.",
    deliverables: [
      "Model development and evaluation",
      "Model comparison and hyperparameter optimization",
      "Explainable AI",
    ],
  },
  {
    slug: "reporting-visualization",
    title: "Reporting and Data Visualization",
    summary:
      "Build dashboards and analytical reports that make survey operations and findings easier to monitor and communicate.",
    deliverables: [
      "Dashboard development and performance monitoring",
      "Analytical reports",
    ],
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
  },
]
