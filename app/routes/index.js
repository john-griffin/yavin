import Ember from 'ember';

export default Ember.Route.extend({
  deactivate: function() {
    var controller = this.controllerFor('index');
    controller.set('isRejected', false);
  }
});
