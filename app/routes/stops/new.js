import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveStop: function(stop){
      var _this = this;
      var fqVenue = this.modelFor('venues/show');
      stop.set('venueName',    fqVenue.get('name'));
      stop.set('description',  fqVenue.get('description'));
      stop.set('location',     fqVenue.get('location').formattedAddress);
      stop.set('foursquareId', fqVenue.get('id'));
      stop.save().then(function(){
        _this.transitionTo('stops');
      });
    },
    photoSelected: function(photo) {
      var stop = this.modelFor('stops/new');
      stop.set('photoId', photo.get('id'));
      stop.set('photoPrefix', photo.get('prefix'));
      stop.set('photoSuffix', photo.get('suffix'));
    }
  },
  model: function(params, transition, queryParams) {
    if (params.stop_id === "new") {
      return this.store.createRecord('stop', {
        crawl: this.modelFor('crawls/show')
      });
    }
    return this._super(params, transition, queryParams);
  },
  redirect: function(model, transition){
    if (transition.targetName === 'stops.new.index') {
      if (model.get('isNew')) {
        this.transitionTo('venues');
      } else {
        this.transitionTo('venues.show', model.get('foursquareId'));
      }
    }
  },
  deactivate: function(){
    var model = this.modelFor('stops/new');
    if (model.get('isNew')) {
      model.destroyRecord();
    }
  }
});
