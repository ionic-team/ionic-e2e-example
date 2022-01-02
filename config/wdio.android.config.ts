export const config = {
  autoCompileOpts: {
    autoCompile: true,
    // see https://github.com/TypeStrong/ts-node#cli-and-programmatic-options
    // for all available options
    tsNodeOpts: {
      transpileOnly: true,
      // project: "tsconfig.wdio.json",
    },
    // tsconfig-paths is only used if "tsConfigPathsOpts" are provided, if you
    // do please make sure "tsconfig-paths" is installed as dependency
    tsConfigPathsOpts: {
      paths: {},
      baseUrl: './',
    },
  },
  baseUrl: "https://localhost",
  //
  // ====================
  // Runner Configuration
  // ====================
  // WebdriverIO allows it to run your tests in arbitrary locations (e.g. locally or
  // on a remote machine).
  runner: 'local',
  //
  // ==================
  // Specify Test Files
  // ==================
  // The test-files are specified in:
  // - wdio.android.browser.conf.ts
  // - wdio.android.app.conf.ts
  // - wdio.ios.browser.conf.ts
  // - wdio.ios.app.conf.ts
  //
  /**
   * NOTE: This is just a place holder and will be overwritten by each specific configuration
   */
  specs: [['./tests/specs/**/*.spec.ts']],
  filesToWatch: ['./tests/**/*.ts'],
  //
  // ============
  // Capabilities
  // ============
  // The capabilities are specified in:
  // - wdio.android.browser.conf.ts
  // - wdio.android.app.conf.ts
  // - wdio.ios.browser.conf.ts
  // - wdio.ios.app.conf.ts
  //
  /**
   * NOTE: This is just a place holder and will be overwritten by each specific configuration
   */
  //
  // ===================
  // Test Configurations
  // ===================
  // Define all options that are relevant for the WebdriverIO instance here
  //
  // Level of logging verbosity: trace | debug | info | warn | error | silent
  logLevel: process.env.VERBOSE === 'true' ? 'debug' : 'error',
  // Set specific log levels per logger
  // loggers:
  // - webdriver, webdriverio
  // - @wdio/applitools-service, @wdio/browserstack-service, @wdio/devtools-service, @wdio/sauce-service
  // - @wdio/mocha-framework, @wdio/jasmine-framework
  // - @wdio/local-runner
  // - @wdio/sumologic-reporter
  // - @wdio/cli, @wdio/config, @wdio/utils
  // Level of logging verbosity: trace | debug | info | warn | error | silent
  // logLevels: {
  //     webdriver: 'info',
  //     '@wdio/applitools-service': 'info'
  // },
  //
  // If you only want to run your tests until a specific amount of tests have failed use
  // bail (default is 0 - don't bail, run all tests).
  bail: 0,
  // Set a base URL in order to shorten url command calls. If your `url` parameter starts
  // with `/`, the base url gets prepended, not including the path portion of your baseUrl.
  // If your `url` parameter starts without a scheme or `/` (like `some/path`), the base url
  // gets prepended directly.
  // baseUrl: 'https://localhost',
  // Default timeout for all waitFor* commands.
  /**
   * NOTE: This has been increased for more stable Appium Native app
   * tests because they can take a bit longer.
   */
  waitforTimeout: 45000,
  // Default timeout in milliseconds for request
  // if browser driver or grid doesn't send response
  connectionRetryTimeout: 120000,
  // Default request retries count
  connectionRetryCount: 3,
  // Test runner services
  // Services take over a specific job you don't want to take care of. They enhance
  // your test setup with almost no effort. Unlike plugins, they don't add new
  // commands. Instead, they hook themselves up into the test process.
  //
  // Services are empty here but will be defined in the
  // - wdio.shared.browserstack.conf.ts
  // - wdio.shared.local.appium.conf.ts
  // - wdio.shared.sauce.conf.ts
  // configuration files
  // Framework you want to run your specs with.
  // The following are supported: Mocha, Jasmine, and Cucumber
  // see also: https://webdriver.io/docs/frameworks
  //
  // Make sure you have the wdio adapter package for the specific framework installed
  // before running any tests.
  framework: 'mocha',
  // The number of times to retry the entire specfile when it fails as a whole
  // specFileRetries: 1,
  //
  // Delay in seconds between the spec file retry attempts
  // specFileRetriesDelay: 0,
  //
  // Whether or not retried specfiles should be retried immediately or deferred to the end of the queue
  // specFileRetriesDeferred: false,
  //
  // Test reporter for stdout.
  // The only one supported by default is 'dot'
  // see also: https://webdriver.io/docs/dot-reporter
  reporters: ['spec'],
  // Options to be passed to Jasmine.
  mochaOpts: {
    // Jasmine default timeout
    /**
     * NOTE: This has been increased for more stable Appium Native app
     * tests because they can take a bit longer.
     */
    timeout: 1200000,
  },

  port: 4723,
  //
  // =====
  // Hooks
  // =====
  // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
  // it and to build services around it. You can either apply a single function or an array of
  // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
  // resolved to continue.
  //
  /**
   * NOTE: No Hooks are used in this project, but feel free to add them if you need them.
   */
  services: [
    [
      'appium',
      {
        // This will use the globally installed version of Appium
        command: 'appium',
        args: {
          // This is needed to tell Appium that we can execute local ADB commands
          // and to automatically download the latest version of ChromeDriver
          relaxedSecurity: true,
        },
      },
    ],
    [
      'chromedriver',
      {
        args: [
          '--use-fake-ui-for-media-stream',
          '--use-fake-device-for-media-stream',
          // '--use-file-for-fake-video-capture=/Users/max/git/capacitor-testapp/tests/data/stefan_sif.y4m',
        ],
      },
    ],
  ],
  // From wdio.shared.local.appium.conf.ts
  capabilities: [{
    // The defaults you need to have in your config
    platformName: 'Android',
    maxInstances: 1,
    'appium:isHeadless': false,
    // For W3C the appium capabilities need to have an extension prefix
    // http://appium.io/docs/en/writing-running-appium/caps/
    // This is `appium:` for all Appium Capabilities which can be found here
    // 'appium:deviceName': 'Pixel_3_10.0',
    'appium:deviceName': 'Pixel 2 API 28',
    'appium:platformVersion': '9',
    'appium:orientation': 'PORTRAIT',
    'appium:automationName': 'UiAutomator2',
    // The path to the app
    'appium:app': 'platforms/android/app/build/outputs/apk/debug/app-debug.apk',
    'appium:appWaitActivity': 'com.ionicframework.conferenceapp.MainActivity',
    // Read the reset strategies very well, they differ per platform, see
    // http://appium.io/docs/en/writing-running-appium/other/reset-strategies/
    'appium:newCommandTimeout': 240,
  }]
};
