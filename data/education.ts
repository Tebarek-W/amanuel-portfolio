export type EducationItem = {
  id: string
  degree: string
  institution: string
  dateLabel: string
  distinction?: string
  thesisOrEssay?: string
  statusNote?: string
  credentialImage?: string
  credentialTitle?: string
  credentialSerial?: string
}

export const education: EducationItem[] = [
  {
    id: "msc-data-science",
    degree: "MSc in Data Science",
    institution: "Addis Ababa University",
    dateLabel: "Oct 2024 – Sep 2026",
    distinction: "Grade awarded: Very Good",
    thesisOrEssay:
      "Predicting Incomplete Vaccination Schedule among Under-Five Children in Ethiopia Using Supervised Machine Learning",
    statusNote: "Thesis defended September 29, 2026.",
  },
  {
    id: "ba-geography",
    degree: "BA in Geography and Environmental Studies",
    institution: "Addis Ababa University",
    dateLabel: "Oct 2011 – Jul 2014",
    thesisOrEssay:
      "Visualization of Health Service Accessibility in Addis Ababa using GIS",
    statusNote: "Conferred by the Senate of Addis Ababa University on July 8, 2014.",
    credentialImage: "/credentials/aau-ba-geography-diploma.jpg",
    credentialTitle: "Bachelor of Arts Diploma — Addis Ababa University",
    credentialSerial: "Diploma No. 122369",
  },
]
