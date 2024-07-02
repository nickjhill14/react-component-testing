import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./e2eTests",
  fullyParallel: true,
  reporter: "html",
  use: {
    baseURL: "http://localhost:5173/",
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
  webServer: {
    command: "npm start",
    url: "http://localhost:5173/",
    reuseExistingServer: true,
  },
});
