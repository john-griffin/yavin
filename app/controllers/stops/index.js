import Ember from 'ember';

export default Ember.ArrayController.extend({
  needs: ['crawls/show'],
  crawl: Ember.computed.alias('controllers.crawls/show'),
  isOwner: Ember.computed('session.id', function(){
    return this.get("session.id") === this.get('crawl.userId');
  }),
  sortProperties: ['rowOrder']
});
