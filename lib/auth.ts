import { SignJWT, jwtVerify } from "jose"
import { cookies } from "next/headers"

const COOKIE_NAME = "admin_session"
const SESSION_TTL_SECONDS = 60 * 60 * 24 * 7 // 7 days

function getSecret() {
  const secret = process.env.SESSION_SECRET?.trim()
  if (!secret || secret.length < 16) {
    throw new Error(
      "SESSION_SECRET must be set to a random string of at least 16 characters."
    )
  }
  return new TextEncoder().encode(secret)
}

export async function createAdminSession() {
  const token = await new SignJWT({ role: "admin" })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${SESSION_TTL_SECONDS}s`)
    .sign(getSecret())

  const cookieStore = await cookies()
  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: SESSION_TTL_SECONDS,
  })
}

export async function destroyAdminSession() {
  const cookieStore = await cookies()
  cookieStore.delete(COOKIE_NAME)
}

export async function isAdminAuthenticated() {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get(COOKIE_NAME)?.value
    if (!token) return false
    const { payload } = await jwtVerify(token, getSecret())
    return payload.role === "admin"
  } catch {
    return false
  }
}

export function verifyAdminPassword(password: string) {
  const expected = process.env.ADMIN_PASSWORD
  if (!expected) {
    throw new Error("ADMIN_PASSWORD is not configured.")
  }
  return password === expected
}

/** Simple delay-based throttle after failed logins (per-process). */
const failedAttempts = new Map<string, { count: number; until: number }>()

export function checkLoginThrottle(key: string) {
  const entry = failedAttempts.get(key)
  if (!entry) return { allowed: true as const }
  if (Date.now() < entry.until) {
    return {
      allowed: false as const,
      retryAfterMs: entry.until - Date.now(),
    }
  }
  failedAttempts.delete(key)
  return { allowed: true as const }
}

export function recordFailedLogin(key: string) {
  const entry = failedAttempts.get(key) ?? { count: 0, until: 0 }
  entry.count += 1
  const delayMs = Math.min(30_000, 1000 * 2 ** Math.min(entry.count, 4))
  entry.until = Date.now() + delayMs
  failedAttempts.set(key, entry)
}

export function clearFailedLogin(key: string) {
  failedAttempts.delete(key)
}
