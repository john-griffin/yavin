import Ember from 'ember';

export default Ember.Controller.extend({
  hasPhotoUrl: Ember.computed.notEmpty('photoUrl'),
  isValid: Ember.computed.and('hasPhotoUrl'),
  actions: {
    photoSelected: function(photo) {
      this.set('photoUrl', photo.get('url'));
      this.set('errorMessage', null);
      return true;
    }
  },
  checkValid: function() {
    if (this.get('isValid')) {
      this.set('errorMessage', null);
      return true;
    }
    this.set('errorMessage', 'Photo must be selected');
    return false;
  }
});
