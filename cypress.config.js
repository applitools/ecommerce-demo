const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'c5x2ap',
  eyesIsDisabled: false,
  eyesFailCypressOnDiff: true,
  eyesDisableBrowserFetching: false,
  eyesTestConcurrency: 5,
  appliConfFile: {
    batch: {
      id: 'bf45888e-f030-49ca-af9a-014279c8574bz',
    },
  },
  eyesIsGlobalHooksSupported: false,
  eyesPort: 63146,
  e2e: {
    baseUrl: "https://applitools-demo-ecommerce.vercel.app/",
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})


require('@applitools/eyes-cypress')(module);
