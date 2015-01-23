import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    query: {
      refreshModel: true
    }
  },
  model: function(params) {
    var venues;
    if (params.query) {
      params.near = "New York"; // hardcoded for now
      venues = this.store.find('fq-venue', params);
    }
    return venues;
  }
});
