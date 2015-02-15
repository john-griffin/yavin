import Ember from 'ember';

export default Ember.Component.extend({
  items: [],
  photos: Ember.computed('items', 'selected', function(){
    var selected = this.get('selected');
    return this.get('items').map(function(item){
      item.set('isSelected', selected === item.get('id'));
      return item;
    });
  }),
  isEmpty: Ember.computed.empty('photos'),
  actions: {
    click: function(photo) {
      this.set('selected', photo.get('id'));
      this.sendAction('action', photo);
    }
  }
});
