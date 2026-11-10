import { defineConfig, devices } from '@playwright/test';

const port = 4322;

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  reporter: 'list',
  use: {
    baseURL: `http://localhost:${port}`,
  },
  projects: [
    {
      name: 'desktop',
      use: { ...devices['Desktop Chrome'], viewport: { width: 1280, height: 800 } },
    },
    {
      name: 'mobile',
      use: { ...devices['Desktop Chrome'], viewport: { width: 375, height: 812 }, isMobile: true, hasTouch: true },
    },
  ],
  webServer: {
    // The Vercel adapter does not support `astro preview`, so the tests run against the dev server.
    command: `pnpm astro dev --port ${port}`,
    url: `http://localhost:${port}`,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
