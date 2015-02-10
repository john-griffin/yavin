import Ember from 'ember';

export default Ember.Controller.extend({
  featuredCrawls: Ember.computed.filterBy('model', 'featured', true),
  ownedCrawls: Ember.computed.filter('model', function(crawl){
    return crawl.get('userId') === this.get('session.id');
  }),
  emptyOwnedCrawls: Ember.computed.empty('ownedCrawls')
});
