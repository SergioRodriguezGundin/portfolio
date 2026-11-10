import { expect, test } from '@playwright/test';

const sections = [
  { id: 'intro', name: 'Intro' },
  { id: 'about', name: 'About' },
  { id: 'journey', name: 'Journey' },
];

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('the page is the three sections, in order, each with its anchor', async ({ page }) => {
  const ids = await page.locator('main > section').evaluateAll((els) => els.map((el) => el.id));
  expect(ids).toEqual(sections.map((s) => s.id));

  for (const { id, name } of sections) {
    await expect(page.getByRole('region', { name })).toHaveAttribute('id', id);
  }
});

test('every section is at least one screen tall', async ({ page }) => {
  const viewport = page.viewportSize()!;
  for (const { name } of sections) {
    const box = await page.getByRole('region', { name }).boundingBox();
    expect(box!.height).toBeGreaterThanOrEqual(viewport.height);
  }
});

test('an anchor scrolls its section into view', async ({ page }) => {
  await page.goto('/#journey');
  await expect(page.getByRole('region', { name: 'Journey' })).toBeInViewport({ ratio: 0.9 });
});

test('there is no theme switch', async ({ page }) => {
  await expect(page.getByRole('button', { name: /theme/i })).toHaveCount(0);
  await expect(page.locator('html')).not.toHaveAttribute('data-theme', /.*/);
});
