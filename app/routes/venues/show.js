import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.fetch('fq-venue', params.venue_id);
  },
  resetController: function (controller, isExiting) {
    if (isExiting) {
      controller.set('photoId', null);
    }
  },
  afterModel: function() {
    var stop = this.modelFor('stops/new');
    this.set('stop', stop);
  },
  setupController: function(controller, post) {
    controller.set('stop', this.get('stop'));
    this._super(controller, post);
  }
});
