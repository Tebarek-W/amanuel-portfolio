"use server"

import { Resend } from "resend"
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
  const to =
    process.env.CONTACT_TO_EMAIL?.trim() || getPreferredEmail().address

  const apiKey = process.env.RESEND_API_KEY?.trim()
  if (!apiKey) {
    return {
      error: `Email delivery is not configured yet. Please email ${to} directly.`,
    }
  }

  const from =
    process.env.CONTACT_FROM_EMAIL?.trim() ||
    "Portfolio Contact <onboarding@resend.dev>"

  const subject = `Portfolio inquiry from ${data.name}${
    data.organization ? ` (${data.organization})` : ""
  }`

  const text = [
    data.message,
    "",
    "—",
    data.name,
    data.email,
    data.organization ? data.organization : null,
  ]
    .filter(Boolean)
    .join("\n")

  try {
    const resend = new Resend(apiKey)
    const result = await resend.emails.send({
      from,
      to: [to],
      replyTo: data.email,
      subject,
      text,
    })

    if (result.error) {
      console.error("Resend error:", result.error)
      return {
        error:
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
