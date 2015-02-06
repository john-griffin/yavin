import Ember from 'ember';
import AuthRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import DataRoute from 'ember-data-route/mixins/data-route';

export default Ember.Route.extend(AuthRouteMixin, DataRoute, {
  actions: {
    save: function(crawl){
      var _this = this;
      crawl.save().then(function(){
        _this.transitionTo('stops', crawl);
      });
    }
  },
});
