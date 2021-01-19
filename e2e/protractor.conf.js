// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter, StacktraceOption } = require("jasmine-spec-reporter");

/**
 * @type { import("protractor").Config }
 */
exports.config = {
  allScriptsTimeout: 11000,
  specs: ["./src/**/*.e2e-spec.ts"],
  multiCapabilities: [
    {
      browserName: "chrome",
      chromeOptions: {
        binary:
          "C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe",
      },
    },
    {
      browserName: "firefox",
    },
  ],
  directConnect: true,
  SELENIUM_PROMISE_MANAGER: false,
  baseUrl: "http://localhost:4200/",
  framework: "jasmine",
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function () {},
  },
  onPrepare() {
    require("ts-node").register({
      project: require("path").join(__dirname, "./tsconfig.json"),
    });
    jasmine.getEnv().addReporter(
      new SpecReporter({
        spec: {
          displayStacktrace: StacktraceOption.PRETTY,
        },
      })
    );
    // obtain browser name (says `browser` is undefined, but works)
    // @ts-ignore
    browser.getBrowserName = function () {
      // @ts-ignore
      return browser.getCapabilities().then(function (caps) {
        // @ts-ignore
        browser.browserName = caps.get("browserName");
      });
    };
    // resolve the promised so the browser name is obtained.
    // @ts-ignore
    browser.getBrowserName();
  },
};
