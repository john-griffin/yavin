import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Controller.extend(EmberValidations.Mixin, {
  validations: {
    "photoId": {
      presence: { message: 'photo must be selected' }
    }
  },
  actions: {
    photoSelected: function(photo) {
      this.set('photoId', photo.get('id'));
      return true;
    }
  },
});
