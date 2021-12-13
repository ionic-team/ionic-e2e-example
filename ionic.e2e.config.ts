export default {
  baseUrl: 'https://localhost',
  reporters: [
    ["html-nice", {
      outputDir: './reports/html-reports/',
      filename: 'report.html',
      reportTitle: 'Test Report Title',
      linkScreenshots: true,
      //to show the report in a browser when done
      showInBrowser: true,
      collapseTests: false,
      //to turn on screenshots after every test
      useOnAfterCommandForScreenshot: false,

      //to initialize the logger
      // LOG: log4j.getLogger("default")
    }
    ]
  ],
  "ios:simulator": {},
  "ios:device": {},
  "ios:browser": {},
  "android:emulator": {},
  "android:device": {},
  "android:browser": {}
}
