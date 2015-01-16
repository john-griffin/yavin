import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveStop: function(){
      var _this = this;
      var stop = this.modelFor('stops/new');
      var fqVenue = this.modelFor('stops/new/venue-show');
      stop.set('venueName',    fqVenue.get('name'));
      stop.set('description',  fqVenue.get('description'));
      stop.set('photoUrl',     fqVenue.get('firstPhoto'));
      stop.set('location',     fqVenue.get('location').formattedAddress);
      stop.set('foursquareId', fqVenue.get('id'));
      stop.save().then(function(){
        _this.transitionTo('stops');
      });
    }
  },
  model: function() {
    return this.store.createRecord('stop', {
      crawl: this.modelFor('crawls/show')
    });
  },
  beforeModel: function(transition) {
    if (transition.targetName === 'stops.new.index') {
      this.transitionTo('stops.new.venue_search');
    }
  },
  deactivate: function(){
    var model = this.modelFor('stops/new');
    if (model.get('isNew')) {
      model.destroyRecord();
    }
  }
});
