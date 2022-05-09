import IonicE2EWdioReporter from '@ionic/wdio-reporter';
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
      maxInstances: 1,
      // Needs to run headless in CI
      'appium:isHeadless': true,
      // For W3C the appium capabilities need to have an extension prefix
      // This is `appium:` for all Appium Capabilities which can be found here
      // http://appium.io/docs/en/writing-running-appium/caps/
      'appium:deviceName': process.env.CI_TEST_DEVICE_NAME,
      'appium:platformName': process.env.CI_TEST_PLATFORM_NAME,
      'appium:platformVersion': process.env.CI_TEST_PLATFORM_VERSION,
      // This will automatically start the iOS app in a webview context,
      // if your app starts in a native context then please put this to false and handle your own
      // context switching
      'appium:autoWebview': true,
      // The path to the app
      // 'appium:app': 'platforms/ios/build/app-debug.ipa',
      // Read the reset strategies very well, they differ per platform, see
      // http://appium.io/docs/en/writing-running-appium/other/reset-strategies/
      'appium:app': process.env.CI_TEST_PATH_TO_BINARY,
      'appium:wdaLaunchTimeout': 600000,
      'appium:orientation': 'PORTRAIT',
      'appium:automationName': 'XCUITest',
      'appium:newCommandTimeout': 240,
    }
];


config.reporters = [
    ['spec', {realtimeReporting: true}],
    [IonicE2EWdioReporter as any, {}]
];

config.maxInstances = 1;

exports.config = config;
