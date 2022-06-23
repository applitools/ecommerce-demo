module.exports = {
    testConcurrency: 4,
    apiKey: 'Wv2P101qKYvDcJ2vJE8XJ1aIbjo107yZo6oIrOiFRzHoKvs110',
    browser: [
        // Add browsers with different viewports
        {width: 1600, height: 1200, name: 'chrome'},
        {width: 1200, height: 800, name: 'firefox'},
        // Add mobile emulation devices in Portrait mode
        {deviceName: 'iPhone X', screenOrientation: 'portrait'},
        {deviceName: 'iPhone X', screenOrientation: 'landscape'}
    ],
    // set batch name to the configuration
    batchName: 'EyeStore eCommerce App'
}