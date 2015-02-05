import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['crawls/show'],
  crawl: Ember.computed.alias('controllers.crawls/show'),
  hasName: Ember.computed.notEmpty('model.name'),
  isValid: Ember.computed.and('hasName'),
  actions: {
    saveStop: function(){
      this.set('errorMessage', null); // clear existing errors
      if (this.get('venueController').checkValid()) {
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
