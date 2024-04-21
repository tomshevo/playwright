import { test, expect } from '@playwright/test';
test.use({ storageState: { cookies: [], origins: [] } });
test('codegen-test', async ({ page }) => {
    
  await page.goto('https://automationexercise.com/');
  await page.getByRole('link', { name: ' Signup / Login' }).click();
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').click();
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('testertdl@testertdl.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('testertdl');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: ' Products' }).click();
  await page.locator('.features_items > div:nth-child(4)').hover()
  await page.locator('div:nth-child(4) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn').click();
  await page.getByRole('link', { name: 'View Cart' }).click();
  await expect(page.getByRole('cell', { name: 'Men Tshirt Men > Tshirts' })).toBeVisible();
  await page.getByText('Proceed To Checkout').click();
  await page.getByRole('link', { name: 'Place Order' }).click();
  await page.locator('input[name="name_on_card"]').click();
  await page.locator('input[name="name_on_card"]').fill('testertdl');
  await page.locator('input[name="card_number"]').click();
  await page.locator('input[name="card_number"]').fill('12345');
  await page.getByPlaceholder('ex.').click();
  await page.getByPlaceholder('ex.').fill('123');
  await page.getByPlaceholder('MM').click();
  await page.getByPlaceholder('MM').fill('123');
  await page.getByPlaceholder('YYYY').click();
  await page.getByPlaceholder('YYYY').fill('123');
  await page.getByRole('button', { name: 'Pay and Confirm Order' }).click();
  await expect(page.locator('#form')).toContainText('Congratulations! Your order has been confirmed!');
});