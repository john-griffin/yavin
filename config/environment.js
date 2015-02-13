/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'yavin',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  ENV.FS_API_HOST = 'https://api.foursquare.com';
  ENV.FS_API_NS   = 'v2';
  ENV.FS_API_CI   = process.env.FS_API_CI;
  ENV.FS_API_CS   = process.env.FS_API_CS;

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  ENV['simple-auth'] = {
    authorizer: 'simple-auth-authorizer:devise'
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';

    ENV.FS_API_HOST = null;
    ENV.FS_API_NS   = 'foursquare_api_v2';

    ENV['simple-auth'].store = 'simple-auth-session-store:ephemeral';
  }

  if (environment === 'production') {

  }

  ENV.contentSecurityPolicy = {
    "connect-src": "'self' https://api.foursquare.com",
    "style-src": "'self' 'unsafe-inline'",
    "img-src": "*"
  };

  ENV['simple-auth-devise'] = {
    tokenAttributeName: 'token',
    identificationAttributeName: 'email',
    serverTokenEndpoint: '/api/v1/sessions'
  }

  return ENV;
};
