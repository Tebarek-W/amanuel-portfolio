"use client"

import { useActionState } from "react"
import { loginAction } from "@/app/admin/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function AdminLoginForm() {
  const [state, formAction, pending] = useActionState(loginAction, undefined)

  return (
    <form action={formAction} className="space-y-5">
      <div className="space-y-2">
        <label htmlFor="password" className="text-sm font-medium text-ink">
          Admin password
        </label>
        <Input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          autoFocus
          className="h-11"
          placeholder="Enter password"
          aria-invalid={Boolean(state?.error)}
          aria-describedby={state?.error ? "admin-login-error" : undefined}
        />
        <p className="text-xs text-ink-muted">
          Use the password set as <span className="font-mono">ADMIN_PASSWORD</span>{" "}
          in your environment.
        </p>
      </div>

      {state?.error ? (
        <p
          id="admin-login-error"
          className="rounded-md border border-destructive/25 bg-destructive/5 px-3 py-2 text-sm text-destructive"
          role="alert"
        >
          {state.error}
        </p>
      ) : null}

      <Button type="submit" size="lg" className="w-full" disabled={pending}>
        {pending ? "Signing in…" : "Sign in"}
      </Button>
    </form>
  )
}
