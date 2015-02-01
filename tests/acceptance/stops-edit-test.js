import Ember from 'ember';
import startApp from '../helpers/start-app';
import Pretender from 'pretender';
import stopMaps from "../maps/stops-edit";
import venueMaps from "../maps/foursquare-venues";

var application, server;

module('Acceptance: Stops', {
  setup: function(assert) {
    application = startApp();
    server = new Pretender(stopMaps, venueMaps);

    server.prepareBody = function(body){
      return body ? JSON.stringify(body) : null;
    };

    server.unhandledRequest = function(verb, path) {
      console.error("Unhandled request", verb, path);
      assert.ok(false, "Request not handled: " + verb + " " + path);
      throw new Error("Unhandled request " + verb + path);
    };
  },
  teardown: function() {
    Ember.run(application, 'destroy');
    server.shutdown();
  }
});

test('editing a stop', function() {
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
