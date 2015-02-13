import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';
import Pretender from '../helpers/pretender';
import sessionMaps from "../maps/sessions";
import crawlMaps from "../maps/crawls";

var application, server;

module('Acceptance: Login', {
  beforeEach: function(assert) {
    application = startApp();
    server = new Pretender(assert);
    server.map(sessionMaps);
    server.map(crawlMaps);
  },
  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /login', function(assert) {
  visit('/login').then(function() {
    fillIn('.email', 'j@j.com');
    fillIn('.password', 'C0mplexP4ss');
    click('button.login').then(function() {
      assert.equal(find('.top-bar-section a')[0].textContent, "j@j.com - Logout");
    });
  });
});
