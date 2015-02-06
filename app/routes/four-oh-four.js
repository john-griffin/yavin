import Ember from 'ember';

export default Ember.Route.extend({
  activate: function() {
    var controller = this.controllerFor('index');
    controller.set('isNotFound', true);
    this.transitionTo('index');
  }
});
