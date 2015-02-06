import BaseCrawlRoute from './base';

export default BaseCrawlRoute.extend({
  model: function() {
    return this.store.createRecord('crawl');
  },
});
