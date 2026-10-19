"use client"

import { useSyncExternalStore } from "react"

function subscribe() {
  return () => {}
}

function getYear() {
  return String(new Date().getFullYear())
}

function getServerYear() {
  return "2026"
}

/** Client-resolved year so prerender (cacheComponents) does not block on `new Date()`. */
export function CopyrightYear() {
  const year = useSyncExternalStore(subscribe, getYear, getServerYear)
  return <>{year}</>
}
