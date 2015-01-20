import Ember from 'ember';

export default Ember.Component.extend({
  photos: Ember.computed('items', 'selected', function(){
    var selected = this.get('selected');
    return this.get('items').map(function(item){
      item.set('isSelected', selected === item.get('id'));
      return item;
    });
  }),
  actions: {
    click: function(photo) {
      this.set('selected', photo.get('id'));
      this.sendAction('action', photo);
    }
  }
});
