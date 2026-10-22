"use server"

import { z } from "zod"
import { getPreferredEmail } from "@/data/site"

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  email: z.email({ error: "Please enter a valid email address." }),
  organization: z.string().trim().optional(),
  message: z
    .string()
    .trim()
    .min(20, "Please include a short message (at least 20 characters)."),
})

export type ContactActionState = {
  ok?: boolean
  error?: string
  fieldErrors?: Partial<
    Record<"name" | "email" | "organization" | "message", string>
  >
}

function getFormspreeEndpoint() {
  const raw = process.env.FORMSPREE_FORM_ID?.trim()
  if (!raw) return null
  if (raw.startsWith("http://") || raw.startsWith("https://")) return raw
  return `https://formspree.io/f/${raw}`
}

export async function sendContactMessage(
  _prev: ContactActionState | undefined,
  formData: FormData
): Promise<ContactActionState> {
  const parsed = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    organization: formData.get("organization") || undefined,
    message: formData.get("message"),
  })

  if (!parsed.success) {
    const fieldErrors: ContactActionState["fieldErrors"] = {}
    for (const issue of parsed.error.issues) {
      const key = issue.path[0]
      if (
        typeof key === "string" &&
        (key === "name" ||
          key === "email" ||
          key === "organization" ||
          key === "message") &&
        !fieldErrors[key]
      ) {
        fieldErrors[key] = issue.message
      }
    }
    return { fieldErrors, error: "Please fix the highlighted fields." }
  }

  const data = parsed.data
  const fallbackEmail = getPreferredEmail().address
  const endpoint = getFormspreeEndpoint()

  if (!endpoint) {
    return {
      error: `Email delivery is not configured yet. Please email ${fallbackEmail} directly.`,
    }
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        organization: data.organization || "",
        message: data.message,
        _replyto: data.email,
        _subject: `Portfolio inquiry from ${data.name}${
          data.organization ? ` (${data.organization})` : ""
        }`,
      }),
    })

    const payload = (await response.json().catch(() => null)) as {
      error?: string
      errors?: Array<{ message?: string }>
    } | null

    if (!response.ok) {
      console.error("Formspree error:", response.status, payload)
      const detail =
        payload?.error ||
        payload?.errors?.map((item) => item.message).filter(Boolean).join(" ")
      return {
        error:
          detail ||
          "Could not send your message right now. Please try again or email directly.",
      }
    }

    return { ok: true }
  } catch (error) {
    console.error("Contact form send failed:", error)
    return {
      error:
        "Could not send your message right now. Please try again or email directly.",
    }
  }
}
