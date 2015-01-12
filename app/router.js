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
      this.resource("stops", function() {});
    });
  });
});

export default Router;
