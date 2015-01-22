import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.fetch('fq-venue', params.venue_id);
  },
  resetController: function (controller, isExiting) {
    if (isExiting) {
      controller.set('photoId', null);
    }
  }
});
