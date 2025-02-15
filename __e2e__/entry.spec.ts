import { test, expect } from '@playwright/test';

const url = 'http://localhost:5173';

test('has title', async ({ page }) => {
  await page.goto(url);

  // Expect a title "to contain" a substring.
  await expect(page.getByText('macOS 3')).toBeVisible();
});
