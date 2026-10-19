export type Publication = {
  id: string
  type: "research-data"
  title: string
  authors: string[]
  venue: string
  dateLabel: string
  doi?: string
  doiStatus: "as-supplied" | "verified"
  note?: string
  url?: string
}

/**
 * Publications and research data outputs documented in the CV / website brief.
 * DOI is displayed as supplied. Independent verification was not confirmed
 * (doi.org resolution did not return a clear public landing page at build time).
 */
export const publications: Publication[] = [
  {
    id: "pwd-national-survey-data",
    type: "research-data",
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
    doiStatus: "as-supplied",
    note: "Research data record listed in the CV and website brief. DOI shown as supplied; independent verification pending.",
    url: "https://doi.org/10.5072/FK2/ZSVJ4B",
  },
]

export function formatAuthorList(authors: string[], highlightName = "Amanuel Tadele"): string {
  return authors
    .map((author) => (author === highlightName ? author : author))
    .join(", ")
}
