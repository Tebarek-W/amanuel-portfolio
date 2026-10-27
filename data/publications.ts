export type PublicationCategory = "journal" | "data"

export type Publication = {
  id: string
  type: PublicationCategory
  title: string
  authors: string[]
  venue: string
  dateLabel: string
}

export const publicationCategoryLabels: Record<PublicationCategory, string> = {
  journal: "Journals",
  data: "Data",
}

export const publicationCategories: PublicationCategory[] = ["journal", "data"]

export const publications: Publication[] = [
  {
    id: "pwd-national-survey-data",
    type: "data",
    title: "National Survey on Persons with Disabilities in Ethiopia",
    authors: [
      "Kaleab K. Haile",
      "Desalegn Anshiso Sedebo",
      "Jemal M. Adem",
      "Daniel Nigatu",
      "Amanuel Tadele",
      "Henok Biazin",
      "Meskerem Waktola",
      "Valerie Karr",
      "Emily Kochetkova",
      "Niraj Poudyal",
      "Martha Kibur",
      "Abigale Degafie",
    ],
    venue: "Policy Studies Institute (PSI)-Research Data Management",
    dateLabel: "Sep. 23, 2026",
  },
]

export function getPublicationsByCategory(
  category: PublicationCategory
): Publication[] {
  return publications.filter((publication) => publication.type === category)
}

/** Citation-style author list: "A, B, and C" */
export function formatAuthorList(authors: string[]): string {
  if (authors.length === 0) return ""
  if (authors.length === 1) return authors[0]
  if (authors.length === 2) return `${authors[0]} and ${authors[1]}`
  return `${authors.slice(0, -1).join(", ")}, and ${authors[authors.length - 1]}`
}
