import { test, expect } from '@playwright/test'

test('should contain api response in header', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('http://localhost:3000/')
  // Find an element with the text 'About Page' and click on it
  await expect(page.locator('h1')).toContainText('Another message')
})
