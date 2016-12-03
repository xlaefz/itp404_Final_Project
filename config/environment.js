/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ember-blog',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    ENV.APP.apiEndpoint = 'http://localhost:3000'
  }
  if (environment === 'development') {
    ENV['ember-cli-mirage'] = {
      enabled: false
    }
  }
  if (environment === 'test') {

    ENV['ember-cli-mirage'] = {
      enabled: false
    }
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    // ENV.APP.apiEndpoint =
    ENV['ember-cli-mirage'] = {
      enabled: false
    }
  }

  return ENV;
};
