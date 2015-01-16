import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveStop: function(){
      console.log("venue show route");
      return true;
    }
  },
  model: function(params) {
    return this.store.fetch('fq-venue', params.venue_id);
  }
});
