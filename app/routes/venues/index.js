import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    query: {
      refreshModel: true
    }
  },
  actions: {
    loading: function() {
      // loading state would sometimes make the search bar flash
      // so the action is interrupted here to prevent the transition.
      return false;
    }
  },
  model: function(params) {
    var venues;
    if (params.query) {
      var city = this.modelFor('crawls.show').get('city');
      params.near = city;
      // limit to 'Nightlife Spots' and 'Food'
      params.categoryId = '4d4b7105d754a06376d81259,4d4b7105d754a06374d81259';
      venues = this.store.find('fq-venue', params);
    }
    return venues;
  }
});
