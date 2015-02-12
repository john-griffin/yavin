import Ember from 'ember';

export default Ember.ArrayController.extend({
  needs: ['crawls/show'],
  crawl: Ember.computed.alias('controllers.crawls/show'),
  isOwner: Ember.computed('session.id', 'crawl.userId', function(){
    return this.get("session.id") === this.get('crawl.userId');
  }),
  isEmpty: Ember.computed.empty('model'),
  stops: Ember.computed.filterBy('arrangedContent', 'isNew', false),
  sortProperties: ['rowOrder']
});
