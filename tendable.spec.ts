import { test, expect } from '@playwright/test';

test.describe('Tendable Website Tests', () => {
  const baseUrl = 'https://www.tendable.com';

  
  test('Confirm accessibility of top-level menus', async ({ page }) => {
    await page.goto(baseUrl);

    const menuItems = ['Home', 'Our Story', 'Our Solution', 'Why Tendable'];
    for (const item of menuItems) {
      await expect(page.locator(`text=${item}`)).toBeVisible();
    }
  });

  
  test('Verify "Request a Demo" button on top-level menu pages', async ({ page }) => {
    const menuItems = ['Home', 'Our Story', 'Our Solution', 'Why Tendable'];
    for (const item of menuItems) {
      await page.goto(`${baseUrl}/${item.toLowerCase().replace(' ', '-')}`);
      await expect(page.locator('text=Request a Demo')).toBeVisible();
    }
  });

 
  test('Validate error on empty "Message" field in "Contact Us" form', async ({ page }) => {
    await page.goto(`${baseUrl}/contact-us`);

    await page.selectOption('select[name="department"]', 'Marketing');
    await page.fill('input[name="name"]', 'Test User');
    await page.fill('input[name="email"]', 'test@example.com');
    await page.click('button[type="submit"]');

    const errorMessage = await page.locator('.error-message');
    await expect(errorMessage).toBeVisible();
  });
});
