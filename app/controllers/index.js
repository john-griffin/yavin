import Ember from 'ember';

export default Ember.Controller.extend({
  featuredCrawls: Ember.computed.filterBy('model', 'featured', true).property('model.@each.featured'),
  ownedCrawls: Ember.computed.filter('model', function(crawl){
    return crawl.get('userId') === this.get('session.id');
  }).property('model.@each.userId', 'session.id')
});
