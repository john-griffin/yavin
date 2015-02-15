import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.fetchById('fq-venue', params.venue_id);
  },
  afterModel: function(venue) {
    var stop = this.modelFor(this.get('stopRoute'));
    // venue has changed so reset photo fields
    if (stop.get("foursquareId") !== venue.get('id')) {
      stop.clearPhotoFields();
    }
    this.set('stop', stop);
  },
  setupController: function(controller, post) {
    controller.set('stop', this.get('stop'));
    this._super(controller, post);
  }
});
