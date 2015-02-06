import BaseCrawlRoute from './base';

export default BaseCrawlRoute.extend({
  afterModel: function(crawl) {
    // for some reason the id sometimes comes back as a string
    var ownerId = parseInt(crawl.get("userId"));
    if (ownerId !== this.get("session.id")) {
      this.transitionTo('login');
    }
  },
});
