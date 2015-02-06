import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.resource("crawls", function() {
    this.route("new");
    this.route("edit", {path: ":crawl_id/edit"});
    this.route("show", {
      path: ":crawl_id"
    }, function() {
      this.resource("stops", function() {
        this.route("new", function() {
          this.resource("venues.new", {path: 'venues'}, function() {
            this.route("show", {
              path: ":venue_id"
            });
          });
        });
        this.route("edit", {path: ':stop_id/edit'}, function() {
          this.resource("venues.edit", {path: 'venues'}, function() {
            this.route("show", {
              path: ":venue_id"
            });
          });
        });
      });
    });
  });
  this.route("fourOhFour", { path: "*path"});
});

export default Router;
