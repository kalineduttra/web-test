const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'rtntr4',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://adopet-frontend-cypress.vercel.app',
    experimentalRunAllSpecs: true,
    video: true,
  },
  viewportWidth: 1600,
  viewportHeight: 715
});
