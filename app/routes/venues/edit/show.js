import VenuesShowRoute from '../show';

export default VenuesShowRoute.extend({
  afterModel: function() {
    var stop = this.modelFor('stops.edit');
    this.set('stop', stop);
  },
});
