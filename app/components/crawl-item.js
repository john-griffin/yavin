import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['crawl-row'],
  deletable: false,
  confirmDelete: false,
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
