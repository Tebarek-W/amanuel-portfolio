import { expect, test } from "@playwright/test"

const routes = [
  "/",
  "/about",
  "/projects",
  "/projects/national-survey-persons-with-disabilities",
  "/services",
  "/publications",
  "/blog",
  "/contact",
  "/admin/login",
]

test.describe("portfolio smoke", () => {
  for (const route of routes) {
    test(`loads ${route}`, async ({ page }) => {
      const response = await page.goto(route)
      expect(response?.ok()).toBeTruthy()
      await expect(page.locator("header")).toBeVisible()
      await expect(page.locator("footer")).toBeVisible()
    })
  }

  test("projects filter narrows results", async ({ page }) => {
    await page.goto("/projects")
    const status = page.getByText(/Showing \d+ of \d+ projects/)
    await expect(status).toBeVisible()
    await page.getByRole("button", { name: /Disability/i }).click()
    await expect(page.getByText(/Showing \d+ of \d+ projects/)).toBeVisible()
    const cards = page.locator("article")
    await expect(cards.first()).toBeVisible()
  })

  test("mobile navigation opens", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 })
    await page.goto("/")
    await page.getByRole("button", { name: "Open navigation menu" }).click()
    await expect(page.getByRole("navigation", { name: "Mobile" })).toBeVisible()
    await expect(page.getByRole("link", { name: "Projects" }).last()).toBeVisible()
  })

  test("contact form validates required fields", async ({ page }) => {
    await page.goto("/contact")
    await page.getByRole("button", { name: "Prepare email" }).click()
    await expect(page.getByRole("alert").first()).toBeVisible()
  })

  test("404 page is branded", async ({ page }) => {
    const response = await page.goto("/this-route-does-not-exist")
    expect(response?.status()).toBe(404)
    await expect(page.getByRole("heading", { name: "Page not found" })).toBeVisible()
    await expect(page.getByRole("link", { name: "Back to homepage" })).toBeVisible()
  })
})
