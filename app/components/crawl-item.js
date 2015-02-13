import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['crawl-row'],
  deletable: false,
  confirmDelete: false,
  canUseImage: Ember.computed('crawl.imageUrl', 'deleteable', function(){
    return this.get('crawl.imageUrl') && !this.get('deleteable');
  }),
  actions: {
    tryDelete: function(){
      this.set('confirmDelete', true);
    },
    delete: function(crawl){
      this.sendAction('action', crawl);
    },
    cancel: function(){
      this.set('confirmDelete', false);
    }
  }
});
