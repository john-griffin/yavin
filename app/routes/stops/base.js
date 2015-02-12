import Ember from 'ember';
import AuthRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import DataRoute from 'ember-data-route/mixins/data-route';

export default Ember.Route.extend(AuthRouteMixin, DataRoute, {
  beforeModel: function(transition, queryParams){
    var result = this._super(transition, queryParams);
    // for some reason the id sometimes comes back as a string
    var ownerId = parseInt(this.modelFor('crawls/show').get("userId"));
    if (ownerId !== this.get("session.id")) {
      var indexController = this.controllerFor('index');
      indexController.set("isRejected", true);
      this.transitionTo('index');
    }
    return result;
  },
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
      stop.set('point',        fqVenue.get('point'));
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
