import { neon } from "@neondatabase/serverless"
import { drizzle, type NeonHttpDatabase } from "drizzle-orm/neon-http"
import * as schema from "@/db/schema"

type Db = NeonHttpDatabase<typeof schema>

let cached: Db | null = null

export function isDatabaseConfigured() {
  return Boolean(process.env.DATABASE_URL?.trim())
}

export function getDb() {
  if (cached) return cached

  const url = process.env.DATABASE_URL?.trim()
  if (!url) {
    throw new Error(
      "DATABASE_URL is not set. Add a Neon Postgres connection string to .env.local."
    )
  }

  // HTTP driver does not use channel binding; stripping avoids odd client quirks.
  const httpUrl = url.replace(/([?&])channel_binding=require&?/i, "$1").replace(/[?&]$/, "")
  const sql = neon(httpUrl)
  cached = drizzle(sql, { schema })
  return cached
}
