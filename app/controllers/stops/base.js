import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Controller.extend(EmberValidations.Mixin, {
  needs: ['crawls/show'],
  crawl: Ember.computed.alias('controllers.crawls/show'),
  isAllValid: Ember.computed.and('isValid', 'venueController.isValid'),
  isAllInvalid: Ember.computed.not('isAllValid'),
  validations: {
    "model.name": {
      presence: true
    }
  },
  actions: {
    saveStop: function(){
      return this.get("isValid") && this.get("venueController.isValid");
    }
  }
});
