import Ember from 'ember';

export default Ember.Controller.extend({
  hasPhotoId: Ember.computed.notEmpty('photoId'),
  isValid: Ember.computed.and('hasPhotoId'),
  actions: {
    photoSelected: function(photo) {
      this.set('photoId', photo.get('id'));
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
