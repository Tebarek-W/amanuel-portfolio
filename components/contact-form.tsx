"use client"

import { useActionState, useEffect, useRef, useState } from "react"
import {
  sendContactMessage,
  type ContactActionState,
} from "@/app/contact/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const initialState: ContactActionState = {}

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const [showSuccess, setShowSuccess] = useState(false)
  const [state, formAction, isPending] = useActionState(
    sendContactMessage,
    initialState
  )

  useEffect(() => {
    if (state.ok) {
      formRef.current?.reset()
      setShowSuccess(true)
    }
  }, [state.ok])

  if (showSuccess) {
    return (
      <div className="surface-panel space-y-3 p-5 sm:p-7" role="status">
        <p className="font-mono text-[0.65rem] tracking-[0.14em] text-teal uppercase">
          Sent
        </p>
        <h3 className="font-heading text-lg font-semibold text-ink">
          Message sent
        </h3>
        <p className="text-sm leading-relaxed text-ink-muted">
          Thanks for reaching out. I will get back to you as soon as I can.
        </p>
        <Button type="button" variant="outline" onClick={() => setShowSuccess(false)}>
          Send another message
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-3">
      <form
        ref={formRef}
        action={formAction}
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
              name="name"
              autoComplete="name"
              className="h-10"
              required
              aria-invalid={Boolean(state.fieldErrors?.name)}
              aria-describedby={
                state.fieldErrors?.name ? "name-error" : undefined
              }
            />
            {state.fieldErrors?.name ? (
              <p id="name-error" className="text-xs text-destructive" role="alert">
                {state.fieldErrors.name}
              </p>
            ) : null}
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-ink">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="h-10"
              required
              aria-invalid={Boolean(state.fieldErrors?.email)}
              aria-describedby={
                state.fieldErrors?.email ? "email-error" : undefined
              }
            />
            {state.fieldErrors?.email ? (
              <p
                id="email-error"
                className="text-xs text-destructive"
                role="alert"
              >
                {state.fieldErrors.email}
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
            name="organization"
            autoComplete="organization"
            className="h-10"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-ink">
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            rows={5}
            className="min-h-28"
            required
            aria-invalid={Boolean(state.fieldErrors?.message)}
            aria-describedby={
              state.fieldErrors?.message ? "message-error" : undefined
            }
          />
          {state.fieldErrors?.message ? (
            <p
              id="message-error"
              className="text-xs text-destructive"
              role="alert"
            >
              {state.fieldErrors.message}
            </p>
          ) : null}
        </div>

        {state.error ? (
          <p className="text-sm text-destructive" role="alert">
            {state.error}
          </p>
        ) : null}

        <Button type="submit" size="lg" disabled={isPending}>
          {isPending ? "Sending…" : "Send message"}
        </Button>
      </form>
    </div>
  )
}
