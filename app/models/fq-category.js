import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr('string'),
  pluralName: DS.attr('string'),
  shortName: DS.attr('string'),
  icon: DS.attr('raw'),
  primary: DS.attr('boolean', { defaultValue: false }),
  iconUrl: Ember.computed('icon', function(){
    return `${this.get("icon").prefix}bg_32${this.get("icon").suffix}`;
  })
});
