const directConnect = true;
const specs = ["spec/*.spec.js"];
const framework = "jasmine";
const jasmineNodeOpts = {
  isVerbose: true,
  realtimeFailure: true,
};

const headed = {
  directConnect,
  specs,
  capabilities: {
    browserName: "chrome",
  },
  framework,
  jasmineNodeOpts,
  onPrepare: () => {
    /* eslint-disable-next-line global-require */
    require("esm");
  },
};

const headless = {
  directConnect,
  specs,
  capabilities: {
    browserName: "chrome",
    chromeOptions: {
      args: ["--headless", "--no-sandbox", "--disable-gpu"],
    },
  },
  framework,
  jasmineNodeOpts,
  onPrepare: () => {
    /* eslint-disable-next-line global-require */
    require("esm");
  },
};

const config = process.env.GITHUB_ACTIONS ? headless : headed;

exports.config = config;
