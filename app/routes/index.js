import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    deleteCrawl: function(crawl) {
      crawl.destroyRecord();
    }
  },
  model: function(){
    return this.store.find('crawl').catch(() => {
      this.controllerFor('index').set('isNotFound', true);
      return [];
    });
  },
  deactivate: function() {
    var controller = this.controllerFor('index');
    controller.set('isRejected', false);
    controller.set('isNotFound', false);
  }
});
