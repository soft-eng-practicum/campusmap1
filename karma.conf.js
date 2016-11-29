//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: '',

    files: [
      'bower_components/angular/angular.js',
      'bower_components/jquery/dist/jquery.js',
      'https://code.jquery.com/jquery-1.11.2.min.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/angular-bootstrap/ui-bootstrap.js',
      'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
      'bower_components/angular-bootstrap/ui-bootstrap.min.js',
      'app/components/**/*.js',
      'app/view1/**/*.js',
      'testScripts/*.js'
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter',
      'karma-phantomjs-launcher'
    ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    },

    singleRun: true

  });
};
