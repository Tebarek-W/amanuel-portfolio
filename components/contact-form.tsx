"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { getPreferredEmail } from "@/data/site"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  email: z.email({ error: "Please enter a valid email address." }),
  organization: z.string().trim().optional(),
  message: z
    .string()
    .trim()
    .min(20, "Please include a short message (at least 20 characters)."),
})

type ContactValues = z.infer<typeof contactSchema>

function validate(values: ContactValues) {
  const result = contactSchema.safeParse(values)
  if (result.success) return {}
  const fieldErrors: Partial<Record<keyof ContactValues, string>> = {}
  for (const issue of result.error.issues) {
    const key = issue.path[0]
    if (typeof key === "string" && !(key in fieldErrors)) {
      fieldErrors[key as keyof ContactValues] = issue.message
    }
  }
  return fieldErrors
}

export function ContactForm() {
  const preferredEmail = getPreferredEmail()
  const [preparedMailto, setPreparedMailto] = useState<string | null>(null)
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactValues>({
    defaultValues: {
      name: "",
      email: "",
      organization: "",
      message: "",
    },
  })

  const onSubmit = handleSubmit((values) => {
    const fieldErrors = validate(values)
    const keys = Object.keys(fieldErrors) as (keyof ContactValues)[]
    if (keys.length > 0) {
      for (const key of keys) {
        const message = fieldErrors[key]
        if (message) setError(key, { message })
      }
      return
    }

    const subject = encodeURIComponent(
      `Portfolio inquiry from ${values.name}${
        values.organization ? ` (${values.organization})` : ""
      }`
    )
    const body = encodeURIComponent(
      `${values.message}\n\n—\n${values.name}\n${values.email}${
        values.organization ? `\n${values.organization}` : ""
      }`
    )
    const href = `mailto:${preferredEmail.address}?subject=${subject}&body=${body}`
    setPreparedMailto(href)
    const anchor = document.createElement("a")
    anchor.href = href
    anchor.rel = "noopener noreferrer"
    document.body.appendChild(anchor)
    anchor.click()
    anchor.remove()
    reset()
  })

  return (
    <div className="space-y-3">
      <form
        onSubmit={onSubmit}
        className="surface-panel space-y-5 p-5 sm:p-7"
        noValidate
      >
        <div>
          <p className="font-mono text-[0.65rem] tracking-[0.14em] text-teal uppercase">
            Message
          </p>
          <h3 className="mt-1 font-heading text-lg font-semibold text-ink">
            Send a message
          </h3>
          <p className="mt-1.5 text-sm text-ink-muted">
            Tell me briefly about your project or research need.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-ink">
              Name
            </label>
            <Input
              id="name"
              autoComplete="name"
              className="h-10"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "name-error" : undefined}
              {...register("name")}
            />
            {errors.name ? (
              <p id="name-error" className="text-xs text-destructive" role="alert">
                {errors.name.message}
              </p>
            ) : null}
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-ink">
              Email
            </label>
            <Input
              id="email"
              type="email"
              autoComplete="email"
              className="h-10"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
              {...register("email")}
            />
            {errors.email ? (
              <p id="email-error" className="text-xs text-destructive" role="alert">
                {errors.email.message}
              </p>
            ) : null}
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="organization" className="text-sm font-medium text-ink">
            Organization{" "}
            <span className="font-normal text-ink-muted">(optional)</span>
          </label>
          <Input
            id="organization"
            autoComplete="organization"
            className="h-10"
            {...register("organization")}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-ink">
            Message
          </label>
          <Textarea
            id="message"
            rows={5}
            className="min-h-28"
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
            {...register("message")}
          />
          {errors.message ? (
            <p id="message-error" className="text-xs text-destructive" role="alert">
              {errors.message.message}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <Button type="submit" size="lg" disabled={isSubmitting}>
            {isSubmitting ? "Opening…" : "Open email draft"}
          </Button>
          <p className="text-xs text-ink-muted">
            Opens your email app to{" "}
            <a
              href={`mailto:${preferredEmail.address}`}
              className="font-medium text-teal underline-offset-2 hover:underline"
            >
              {preferredEmail.address}
            </a>
          </p>
        </div>

        {preparedMailto ? (
          <p className="text-sm text-ink-muted" role="status">
            If nothing opened,{" "}
            <a
              href={preparedMailto}
              className="font-medium text-teal underline-offset-2 hover:underline"
            >
              use this email link
            </a>
            .
          </p>
        ) : null}
      </form>
    </div>
  )
}
