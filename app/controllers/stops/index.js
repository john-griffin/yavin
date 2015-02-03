import Ember from 'ember';

export default Ember.ArrayController.extend({
  needs: ['crawls/show'],
  isOwner: Ember.computed('session.id', function(){
    return this.get("session.id") === this.get('controllers.crawls/show.userId');
  }),
  sortProperties: ['rowOrder']
});
