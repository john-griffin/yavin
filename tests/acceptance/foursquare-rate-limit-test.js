import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';
import Pretender from '../helpers/pretender';
import foursquareLimitMaps from "../maps/foursquare-limits";

var application, server;

module('Acceptance: FoursquareRateLimit', {
  beforeEach: function(assert) {
    application = startApp();
    server = new Pretender(assert);
    server.map(foursquareLimitMaps);
    invalidateSession();
  },
  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('hitting foursquare rate limit should show error', function(assert) {
  authenticateSession();
  currentSession().set('id', 1);
  visit('/crawls/2/stops/new').then(function(){
    assert.equal(currentURL(), '/crawls/2/stops/new/venues');
    fillIn('#stop-name', 'Additional stop');
    fillIn('.foursquare-search', 'pub').then(function(){
      assert.equal(find('.alert-box')[0].textContent, 'Problem connecting to Foursquare. Please try again later.');
    });
  });
});
