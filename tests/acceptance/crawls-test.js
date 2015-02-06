import Ember from 'ember';
import startApp from '../helpers/start-app';
import Pretender from '../helpers/pretender';
import crawlMaps from '../maps/crawls';

var application, server;

module('Acceptance: Crawls', {
  setup: function(assert) {
    application = startApp();
    invalidateSession();
    server = new Pretender(assert);
    server.map(crawlMaps);
  },
  teardown: function() {
    Ember.run(application, 'destroy');
  }
});

test('creating a crawl', function() {
  authenticateSession();
  currentSession().set('id', 1);
  visit('/').then(function(){
    click('.button.new-crawl').then(function() {
      equal(currentURL(), '/crawls/new');
      fillIn('.crawl-name', 'My Crawl 1');
      fillIn('.city', 'London');
      click('.button.save').then(function() {
        equal(currentURL(), '/crawls/2/stops');
        equal(find('h2')[0].textContent, "My Crawl 1 in London");
      });
    });
  });
});


test('editing a crawl', function() {
  authenticateSession();
  currentSession().set('id', 1);
  visit('/crawls/2/edit').then(function(){
    fillIn('.crawl-name', 'My Crawl 2');
    fillIn('.city', 'London');
    click('.button.save').then(function() {
      equal(currentURL(), '/crawls/2/stops');
      equal(find('h2')[0].textContent, "My Crawl 2 in London");
    });
  });
});
