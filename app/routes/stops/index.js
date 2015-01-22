import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var stops = this.modelFor('crawls/show').get('stops');
    return stops;
  },
  actions: {
    moveStop: function(stop, direction){
      stop.set('rowOrderPosition', direction);
      stop.save();
    },
    delete: function(stop) {
      stop.destroyRecord();
    }
  }
});
