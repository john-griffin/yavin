import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.resource("crawls", function() {
    this.route("show", {
      path: ":crawl_id"
    }, function() {
      this.resource("stops", function() {
        this.route("new", function() {
          this.resource("venues", function() {
            this.route("show", {
              path: ":venue_id"
            });
          });
        });
      });
    });
  });
});

export default Router;
