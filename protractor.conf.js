//jshint strict: false
exports.config = {

  allScriptsTimeout: 11000,

  specs: [
    'e2e-tests/scenarios.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:8000/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }

};
