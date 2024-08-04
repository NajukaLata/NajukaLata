import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  projects: [
    {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
    {
      name: 'google chrome',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
