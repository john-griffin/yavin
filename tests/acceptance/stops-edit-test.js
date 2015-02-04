import Ember from 'ember';
import startApp from '../helpers/start-app';
import Pretender from '../helpers/pretender';
import stopMaps from "../maps/stops-edit";
import venueMaps from "../maps/foursquare-venues";

var application, server;

module('Acceptance: Stops', {
  setup: function(assert) {
    application = startApp();
    server = new Pretender(assert);
    server.map(stopMaps);
    server.map(venueMaps);
    invalidateSession();
  },
  teardown: function() {
    Ember.run(application, 'destroy');
  }
});

test('editing a stop', function() {
  authenticateSession();
  currentSession().set('id', 1);
  visit('/crawls/1/stops/73/edit/venues').then(function(){
    var id = '4259be00f964a520ef201fe3';
    equal(currentURL(), '/crawls/1/stops/73/edit/venues/'+id);
    click('.change-venue').then(function() {
      fillIn('.foursquare-search', 'pub').then(function(){
        click('.venue-link:first').then(function(){
          fillIn('#stop-name', 'Stop name changed');
          click('.photo-select:first');
          click('button.save').then(function(){
            equal(find('.stop-name')[0].textContent, "Stop name changed");
          });
        });
      });
    });
  });
});
