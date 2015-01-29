import Ember from 'ember';
import startApp from '../helpers/start-app';
import Pretender from 'pretender';
import stopMaps from "../maps/stops";

var application, server;

module('Acceptance: Stops', {
  setup: function(assert) {
    application = startApp();
    server = new Pretender(stopMaps);

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

test('visiting stops for a crawl', function() {
  visit('/crawls/1/stops').then(function(){
    equal(find('.stop').length, 3, "Page contains list of stops");
    var results = find('.venue-name');
    equal(results[0].textContent, "O'Reilly's Irish Pub");
    equal(results[1].textContent, "The Donut Pub");
    equal(results[2].textContent, "Twins Pub");
  });
  click('.button.down:first');
  click('.button.up:last').then(function() {
    var results = find('.venue-name');
    equal(results[0].textContent, "The Donut Pub");
    equal(results[1].textContent, "Twins Pub");
    equal(results[2].textContent, "O'Reilly's Irish Pub");
  });
});
