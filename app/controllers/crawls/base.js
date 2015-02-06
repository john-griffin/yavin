import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Controller.extend(EmberValidations.Mixin, {
  validations: {
    "model.name": {
      presence: true
    },
    "model.city": {
      presence: true
    }
  }
});
