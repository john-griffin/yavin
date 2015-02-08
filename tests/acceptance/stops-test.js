import Ember from 'ember';
import startApp from '../helpers/start-app';
import Pretender from '../helpers/pretender';
import stopMaps from "../maps/stops";
import venueMaps from "../maps/foursquare-venues";
import crawlMaps from "../maps/crawls";

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

test('visiting stops for a crawl unauthenticated', function() {
  visit('/crawls/2/stops').then(function(){
    equal(find('.stop').length, 3, "Page contains list of stops");
    var results = find('.venue-name');
    equal(results[0].textContent, "O'Reilly's Irish Pub");
    equal(results[1].textContent, "The Donut Pub");
    equal(results[2].textContent, "Twins Pub");
    ok(find("a.down").length === 0, 'Page should not have down buttons');
    ok(find("a.up").length === 0, 'Page should not have up buttons');
    ok(find(".edit").length === 0, 'Page should not have edit buttons');
  });
});

test('visiting stops for a crawl as non owner', function() {
  authenticateSession();
  currentSession().set('id', 2);
  visit('/crawls/2/stops').then(function(){
    equal(find('.stop').length, 3, "Page contains list of stops");
    ok(find("a.down").length === 0, 'Page should not have down buttons');
    ok(find("a.up").length === 0, 'Page should not have up buttons');
    ok(find(".edit").length === 0, 'Page should not have edit buttons');
  });
});

test('reorder stops as crawl owner', function() {
  authenticateSession();
  currentSession().set('id', 1);
  visit('/crawls/2/stops').then(function(){
    click('a.down:first');
    click('a.up:last').then(function() {
      var results = find('.venue-name');
      equal(results[0].textContent, "The Donut Pub");
      equal(results[1].textContent, "Twins Pub");
      equal(results[2].textContent, "O'Reilly's Irish Pub");
    });
  });
});

test('cannot add stop while unauthenticated', function() {
  visit('/crawls/2/stops/new').then(function(){
    equal(currentURL(), '/login');
  });
});

test('cannot add stop as other user', function() {
  authenticateSession();
  currentSession().set('id', 3);
  visit('/crawls/2/stops/new').then(function(){
    equal(currentURL(), '/');
    equal(find('.alert-box')[0].textContent, 'You do not have permission to access that page.');
  });
});


test('adding a stop as owner', function() {
  authenticateSession();
  currentSession().set('id', 1);
  visit('/crawls/2/stops/new').then(function(){
    equal(currentURL(), '/crawls/2/stops/new/venues');
    fillIn('#stop-name', 'Additional stop');
    fillIn('.foursquare-search', 'pub').then(function(){
      click('.venue-link:first').then(function(){
        var id = '48821a51f964a52033511fe3';
        equal(currentURL(), '/crawls/2/stops/new/venues/'+id);
        click('.photo-select:first');
        click('button.save').then(function(){
          equal(currentURL(), '/crawls/2/stops');
          equal(find('.stop').length, 4, "Page includes new stop");
        });
      });
    });
  });
});
