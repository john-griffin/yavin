import DS from 'ember-data';

export default DS.Model.extend({
  stops: DS.hasMany('stop'),
  description: DS.attr('string'),
  photoUrl: DS.attr('string'),
  location: DS.attr('raw'),
  name: DS.attr('string')
});
