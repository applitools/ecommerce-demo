module.exports = {
    testConcurrency: 5,
    apiKey: process.env.APPLITOOLS_API_KEY,
    browser: [
        // Add browsers with different viewports
        {width: 1600, height: 1200, name: 'chrome'},
        {width: 1600, height: 1200, name: 'safari'},
        {width: 1600, height: 1200, name: 'firefox'},
    ],
    // set batch name to the configuration
    batchName: 'Succulent Product'
}