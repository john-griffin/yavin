import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['stops/new/venue-show'],
  hasName: Ember.computed.notEmpty('model.name'),
  isValid: Ember.computed.and('hasName'),
  actions: {
    saveStop: function(){
      this.set('errorMessage', null); // clear existing errors
      var venueController = this.get('controllers.stops/new/venue-show');
      if (venueController.get('isValid')) {
        if (this.get('isValid')) {
          return true;
        } else {
          this.set('errorMessage', 'Stop name required');
        }
      }
      return false;
    }
  }
});
