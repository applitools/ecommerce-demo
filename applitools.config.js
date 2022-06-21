module.exports = {
    testConcurrency: 4,
    apiKey: 'WoPMVgSCKcEAl7aHpFSdkgY6N16109h2Y5vXJKbE8ReSg110',
    browser: [
        // Add browsers with different viewports
        {width: 1600, height: 1200, name: 'chrome'},
        {width: 1200, height: 800, name: 'firefox'},
        // Add mobile emulation devices in Portrait mode
        {deviceName: 'iPhone X', screenOrientation: 'portrait'},
        {deviceName: 'iPhone X', screenOrientation: 'landscape'}
    ],
    // set batch name to the configuration
    batchName: 'eCommerce Demo'
}