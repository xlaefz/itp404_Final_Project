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
  var ENV2 = {
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
  var ENV3 = {
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
    ENV.APP.apiEndpoint = 'https://jason-zheng-api.herokuapp.com/coffee/newyork'
    ENV2.APP.apiEndpoint = 'https://jason-zheng-api.herokuapp.com/coffee/montreal'
    ENV3.APP.apiEndpoint = 'https://jason-zheng-api.herokuapp.com/coffee/losangeles'

  }
  if (environment === 'development') {
    ENV['ember-cli-mirage'] = {
      enabled: false
    }
  }
  if (environment === 'test') {
    ENV.APP.apiEndpoint = 'https://jason-zheng-api.herokuapp.com/coffee/newyork'
    ENV2.APP.apiEndpoint = 'https://jason-zheng-api.herokuapp.com/coffee/montreal'
    ENV3.APP.apiEndpoint = 'https://jason-zheng-api.herokuapp.com/coffee/losangeles'
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
    ENV.APP.apiEndpoint = 'https://jason-zheng-api.herokuapp.com/coffee/newyork'
    ENV2.APP.apiEndpoint = 'https://jason-zheng-api.herokuapp.com/coffee/montreal'
    ENV3.APP.apiEndpoint = 'https://jason-zheng-api.herokuapp.com/coffee/losangeles'

    ENV['ember-cli-mirage'] = {
      enabled: false
    }
  }

  return ENV;
};
