import Ember from 'ember';
import AuthRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthRouteMixin, {
  actions: {
    save: function(crawl){
      var _this = this;
      crawl.save().then(function(){
        _this.transitionTo('stops', crawl);
      });
    }
  },
});
