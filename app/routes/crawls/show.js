import Ember from 'ember';

export default Ember.Route.extend({
  afterModel: function(resolvedModel, transition) {
    if (transition.targetName === 'crawls.show.index') {
      this.transitionTo('stops');
    }
  }
});
