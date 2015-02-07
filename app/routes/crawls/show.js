import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    error: function() {
      this.transitionTo('/fourOhFour');
    }
  },
  afterModel: function(resolvedModel, transition) {
    if (transition.targetName === 'crawls.show.index') {
      this.transitionTo('stops');
    }
  }
});
