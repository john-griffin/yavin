import StopsBaseRoute from './base';

export default StopsBaseRoute.extend({
  model: function() {
    return this.store.createRecord('stop', {
      crawl: this.modelFor('crawls/show')
    });
  },
  deactivate: function(){
    var model = this.modelFor('stops/new');
    if (model.get('isNew')) {
      model.destroyRecord();
    }
  },
  redirect: function(model, transition){
    if (transition.targetName === 'stops.new.index') {
      this.transitionTo('venues.new');
    }
  }
});
