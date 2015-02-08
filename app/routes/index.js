import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    var _this = this;
    return this.store.find('crawl').catch(function(){
      _this.controllerFor('index').set('isNotFound', true);
      return [];
    });
  },
  deactivate: function() {
    var controller = this.controllerFor('index');
    controller.set('isRejected', false);
    controller.set('isNotFound', false);
  }
});
