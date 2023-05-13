import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('Vite + React + TS');

  const header = await page.getByRole('heading', { name: 'Hello World' });
  expect(header).toBeVisible();
});
