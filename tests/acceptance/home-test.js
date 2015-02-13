import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';
import Pretender from '../helpers/pretender';
import crawlMaps from "../maps/crawls";

var application, server;

module('Acceptance: Home', {
  beforeEach: function(assert) {
    application = startApp();
    server = new Pretender(assert);
    server.map(crawlMaps);
    invalidateSession();
  },
  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting / shows featured crawls', function(assert) {
  invalidateSession();
  visit('/').then(function() {
    assert.equal(find('.featured-crawls .crawl-name').length, 3, "Page contains featured crawls");
    assert.equal(find('.featured-crawls .crawl-name')[0].textContent, "The best");
  });
});

test('visiting / shows featured and owned crawls', function(assert) {
  authenticateSession();
  currentSession().set('id', 2);
  visit('/').then(function() {
    assert.equal(find('.featured-crawls .crawl-name').length, 3, "Page contains featured crawls");
    assert.equal(find('.featured-crawls .crawl-name')[0].textContent, "The best");
    assert.equal(find('.owned-crawls .crawl-name').length, 2, "Page contains owned crawls");
    assert.equal(find('.owned-crawls .crawl-name')[0].textContent, "My crawl");
  });
});

test('can delete a crawl', function(assert) {
  authenticateSession();
  currentSession().set('id', 2);
  visit('/').then(function() {
    click('.owned-crawls .crawl-row:first .delete').then(function(){
      click('.owned-crawls .crawl-row:first .delete-confirm').then(function(){
        assert.equal(find('.owned-crawls .crawl-name').length, 1, "crawl deleted");
      });
    });
  });
});
