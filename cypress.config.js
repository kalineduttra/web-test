const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'rtntr4',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: true,
  },
});
