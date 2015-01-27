import VenuesShowRoute from '../show';

export default VenuesShowRoute.extend({
  afterModel: function() {
    var stop = this.modelFor('stops.new');
    this.set('stop', stop);
  },
});
