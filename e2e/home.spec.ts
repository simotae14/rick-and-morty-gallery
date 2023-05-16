import { test, expect } from '@playwright/test';

test.describe('Show the Gallery', () => {
  test('should show the title on first rendering', async ({ page }) => {
    await page.goto('http://localhost:5173/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle('Rick and Morty Gallery');
  });

  test('should allow me to change page', async ({ page }) => {
    await page.goto('http://localhost:5173/');

    await page.locator('ul li:nth-child(2)').click();
  });

  test('should allow me to select a character', async ({ page }) => {
    await page.goto('http://localhost:5173/');

    await page.locator('text=Rick Sanchez').click();

    // Expect the details page.
    await expect(page).toHaveURL('http://localhost:5173/details');
  });
});
