import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var stops = this.modelFor('crawls/show').get('stops');
    return stops;
  }
});
