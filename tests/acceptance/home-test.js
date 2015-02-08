import Ember from 'ember';
import startApp from '../helpers/start-app';
import Pretender from '../helpers/pretender';
import crawlMaps from "../maps/crawls";

var application, server;

module('Acceptance: Home', {
  setup: function(assert) {
    application = startApp();
    server = new Pretender(assert);
    server.map(crawlMaps);
    invalidateSession();
  },
  teardown: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting / shows featured crawls', function() {
  invalidateSession();
  visit('/').then(function() {
    equal(find('.featured-crawls .crawl-name').length, 3, "Page contains featured crawls");
    equal(find('.featured-crawls .crawl-name')[0].textContent, "The best");
  });
});

test('visiting / shows featured and owned crawls', function() {
  authenticateSession();
  currentSession().set('id', 2);
  visit('/').then(function() {
    equal(find('.featured-crawls .crawl-name').length, 3, "Page contains featured crawls");
    equal(find('.featured-crawls .crawl-name')[0].textContent, "The best");
    equal(find('.owned-crawls .crawl-name').length, 2, "Page contains owned crawls");
    equal(find('.owned-crawls .crawl-name')[0].textContent, "My crawl");
  });
});
