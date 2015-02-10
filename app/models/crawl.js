import DS from 'ember-data';

export default DS.Model.extend({
  stops: DS.hasMany('stop', {async: true}),
  userId: DS.attr('number'),
  stopCount: DS.attr('number'),
  city: DS.attr('string'),
  featured: DS.attr('boolean'),
  name: DS.attr('string')
});
