export type SkillGroup = {
  id: string
  title: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    id: "visualization",
    title: "Data visualization",
    items: [
      "Power BI",
      "Looker Studio",
      "Python (Matplotlib / Seaborn)",
      "R (ggplot2, Shiny)",
    ],
  },
  {
    id: "statistics",
    title: "Statistical programming & analysis",
    items: ["R", "Python", "Stata", "SPSS"],
  },
  {
    id: "ml",
    title: "Machine Learning & Deep Learning",
    items: ["scikit-learn", "PyTorch", "TensorFlow"],
  },
  {
    id: "geospatial",
    title: "Geospatial analysis",
    items: ["ArcGIS Pro", "QGIS", "Python geospatial libraries"],
  },
  {
    id: "collection",
    title: "Digital data collection",
    items: ["SurveyCTO", "ODK (Open Data Kit)", "KoboToolbox", "CSPro"],
  },
  {
    id: "productivity",
    title: "Productivity suites",
    items: ["MS Office Suite", "Google Workspace"],
  },
]

export type ExpertiseArea = {
  id: string
  title: string
  description: string
}

export const expertiseAreas: ExpertiseArea[] = [
  {
    id: "digital-collection",
    title: "Digital Data Collection and Survey Programming",
    description:
      "Programming and deploying CAPI/CATI instruments in SurveyCTO, KoboToolbox, ODK, and related platforms — including multilingual questionnaires and complex workflows.",
  },
  {
    id: "dqa",
    title: "Data Quality Assurance and Management",
    description:
      "High-frequency checks, automated validation, field coordination, cleaning, and documentation so teams receive analysis-ready datasets.",
  },
  {
    id: "statistical-research",
    title: "Statistical Analysis and Research",
    description:
      "Quantitative analysis with R, Python, Stata, and SPSS to support research questions, preliminary findings, and evidence generation.",
  },
  {
    id: "ml-dl",
    title: "Machine Learning and Deep Learning",
    description:
      "Supervised machine learning workflows with scikit-learn, PyTorch, and TensorFlow — including thesis work on predicting incomplete under-five vaccination schedules in Ethiopia.",
  },
  {
    id: "health-ds",
    title: "Health Data Science",
    description:
      "Applied interest in health-related analytical problems, reflected in graduate thesis research on incomplete vaccination schedules among under-five children.",
  },
  {
    id: "viz-reporting",
    title: "Data Visualization and Reporting",
    description:
      "Interactive monitoring dashboards and analytical reporting with Power BI, Looker Studio, Python, and R for field and stakeholder use.",
  },
  {
    id: "gis",
    title: "Geospatial Analysis and GIS",
    description:
      "Spatial analysis with ArcGIS Pro, QGIS, and geospatial Python libraries, building on undergraduate GIS work on health service accessibility in Addis Ababa.",
  },
]

export const workflowSteps = [
  {
    id: "program",
    title: "Survey programming",
    description: "Build and test CAPI/CATI instruments for field deployment.",
  },
  {
    id: "monitor",
    title: "Field monitoring",
    description: "Track submissions and support enumerators and supervisors in real time.",
  },
  {
    id: "validate",
    title: "Validation & HFC",
    description: "Run high-frequency checks and automated validation during collection.",
  },
  {
    id: "clean",
    title: "Cleaning & documentation",
    description: "Resolve inconsistencies and document decisions for reproducibility.",
  },
  {
    id: "deliver",
    title: "Analysis-ready data",
    description: "Deliver clean datasets, dashboards, and preliminary analytical inputs.",
  },
] as const
