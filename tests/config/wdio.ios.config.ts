import config from './wdio.shared.appium.config';

// ============
// Capabilities
// ============
//
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
//
config.capabilities = [
  {
    platformName: 'iOS',
    maxInstances: 1,
    // For W3C the appium capabilities need to have an extension prefix
    // This is `appium:` for all Appium Capabilities which can be found here
    // http://appium.io/docs/en/writing-running-appium/caps/
    'appium:deviceName': 'iPhone 13 Pro Max',
    'appium:platformVersion': '15.2',
    'appium:orientation': 'PORTRAIT',
    'appium:automationName': 'XCUITest',
    // The path to the app
    'appium:app': './platforms/ios/build/emulator/Ionic Conference App.app',
    'appium:newCommandTimeout': 240,
    // This will automatically start the iOS app in a webview context,
    // if your app starts in a native context then please put this to false and handle your own
    // context switching
    'appium:autoWebview': true,
    // Read the reset strategies very well, they differ per platform, see
    // http://appium.io/docs/en/writing-running-appium/other/reset-strategies/
    // When enabling the noReset the App will NOT be re-installed between sessions
    // This means that every test needs to maintain it's own state
    // `"appium:noReset":false` means that the app is removed and installed
    // between each test
    'appium:noReset': true,
  },
];
config.maxInstances = 1;

exports.config = config;
