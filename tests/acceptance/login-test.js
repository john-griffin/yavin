import Ember from 'ember';
import startApp from '../helpers/start-app';
import Pretender from 'pretender';
import sessionMaps from "../maps/sessions";

var application, server;

module('Acceptance: Login', {
  setup: function(assert) {
    application = startApp();
    server = new Pretender(sessionMaps);

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

test('visiting /login', function() {
  visit('/login').then(function() {
    fillIn('.email', 'j@j.com');
    fillIn('.password', 'C0mplexP4ss');
    click('button.login').then(function() {
      equal(find('.top-bar-section a')[0].textContent, "Logout");
    });
  });
});
