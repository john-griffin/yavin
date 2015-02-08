import Ember from 'ember';
import startApp from '../helpers/start-app';
import Pretender from '../helpers/pretender';
import sessionMaps from "../maps/sessions";
import crawlMaps from "../maps/crawls";

var application, server;

module('Acceptance: Login', {
  setup: function(assert) {
    application = startApp();
    server = new Pretender(assert);
    server.map(sessionMaps);
    server.map(crawlMaps);
  },
  teardown: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /login', function() {
  visit('/login').then(function() {
    fillIn('.email', 'j@j.com');
    fillIn('.password', 'C0mplexP4ss');
    click('button.login').then(function() {
      equal(find('.top-bar-section a')[0].textContent, "j@j.com - Logout");
    });
  });
});
