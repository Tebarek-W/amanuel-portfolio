export type PublicationCategory = "journal" | "data"

export type Publication = {
  id: string
  type: PublicationCategory
  title: string
  authors: string[]
  venue: string
  dateLabel: string
  doi?: string
  note?: string
  url?: string
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
    venue: "Policy Studies Institute (PSI) — Research Data Management",
    dateLabel: "Sep 23, 2026",
    doi: "10.5072/FK2/ZSVJ4B",
    note: "National household survey dataset and research data documentation (9,200 household interviews).",
    url: "https://doi.org/10.5072/FK2/ZSVJ4B",
  },
]

export function getPublicationsByCategory(
  category: PublicationCategory
): Publication[] {
  return publications.filter((publication) => publication.type === category)
}

export function formatAuthorList(
  authors: string[],
  highlightName = "Amanuel Tadele"
): string {
  return authors
    .map((author) => (author === highlightName ? author : author))
    .join(", ")
}
