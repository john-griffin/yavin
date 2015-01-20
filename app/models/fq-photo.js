import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  createdAt: DS.attr('number'),
  width: DS.attr('number'),
  height: DS.attr('number'),
  source: DS.attr('raw'),
  user: DS.attr('raw'),
  visibility: DS.attr('string'),
  prefix: DS.attr('string'),
  suffix: DS.attr('string'),
  url: Ember.computed('prefix', 'suffix', function(){
    return this.get('prefix') + 'width300' + this.get('suffix');
  })
});
