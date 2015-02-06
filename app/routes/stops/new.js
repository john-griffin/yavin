import StopsBaseRoute from './base';

export default StopsBaseRoute.extend({
  model: function() {
    return this.store.createRecord('stop', {
      crawl: this.modelFor('crawls/show')
    });
  },
  redirect: function(model, transition){
    if (transition.targetName === 'stops.new.index') {
      this.transitionTo('venues.new');
    }
  }
});
