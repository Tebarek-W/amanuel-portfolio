import { neon } from "@neondatabase/serverless"
import { drizzle } from "drizzle-orm/neon-http"
import * as schema from "@/db/schema"

export function isDatabaseConfigured() {
  return Boolean(process.env.DATABASE_URL?.trim())
}

export function getDb() {
  const url = process.env.DATABASE_URL?.trim()
  if (!url) {
    throw new Error(
      "DATABASE_URL is not set. Add a Neon Postgres connection string to .env.local."
    )
  }
  const sql = neon(url)
  return drizzle(sql, { schema })
}
