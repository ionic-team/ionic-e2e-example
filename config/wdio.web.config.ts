import { config } from "./wdio.shared.config";

//
// =====
// Specs
// =====
//
// Normally the specs are written like
// specs: ["./tests/**/*.spec.ts"],
// but for watch mode we want to run all specs in 1 instance so
// the specs are an array in an array
config.specs = [config.specs];
config.filesToWatch = [config.specs];

//
// ================
// Services: Chrome
// ================
//
config.services = (config.services ? config.services : []).concat([
  [
    "chromedriver",
    {
      args: [
        "--use-fake-ui-for-media-stream",
        "--use-fake-device-for-media-stream",
      ],
    },
  ],
]);

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
    browserName: "chrome",
    "goog:chromeOptions": {
      prefs: {
        "profile.default_content_setting_values.media_stream_camera": 1,
        "profile.default_content_setting_values.media_stream_mic": 1,
        "profile.default_content_setting_values.notifications": 1,
      },
    },
  },
];

exports.config = config;
