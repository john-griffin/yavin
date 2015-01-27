import Ember from 'ember';

export default Ember.Route.extend({
  actionName: Ember.computed('routeName', function(){
    return this.get('routeName').split('.')[1];
  }),
  actions: {
    saveStop: function(stop){
      var _this = this;
      var fqVenue = this.modelFor('venues/'+this.get('actionName')+'/show');
      stop.set('venueName',    fqVenue.get('name'));
      stop.set('description',  fqVenue.get('description'));
      stop.set('location',     fqVenue.get('location').formattedAddress);
      stop.set('foursquareId', fqVenue.get('id'));
      stop.save().then(function(){
        _this.transitionTo('stops');
      });
    },
    photoSelected: function(photo) {
      var stop = this.modelFor(this.get('routeName'));
      stop.set('photoId',     photo.get('id'));
      stop.set('photoPrefix', photo.get('prefix'));
      stop.set('photoSuffix', photo.get('suffix'));
    }
  }
});
