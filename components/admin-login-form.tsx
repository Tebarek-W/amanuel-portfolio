"use client"

import { useActionState } from "react"
import { loginAction } from "@/app/admin/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function AdminLoginForm() {
  const [state, formAction, pending] = useActionState(loginAction, undefined)

  return (
    <form action={formAction} className="space-y-4">
      <div>
        <label htmlFor="password" className="text-sm font-medium text-ink">
          Admin password
        </label>
        <Input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          className="mt-2 h-10"
          placeholder="Enter password"
        />
      </div>
      {state?.error ? (
        <p className="text-sm text-destructive" role="alert">
          {state.error}
        </p>
      ) : null}
      <Button type="submit" size="lg" className="w-full" disabled={pending}>
        {pending ? "Signing in…" : "Sign in"}
      </Button>
    </form>
  )
}
