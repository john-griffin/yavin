import DS from 'ember-data';

export default DS.Model.extend({
  stops: DS.hasMany('stop', {async: true}),
  userId: DS.attr('number'),
  city: DS.attr('string'),
  name: DS.attr('string')
});
