import DS from 'ember-data';

export default DS.Model.extend({
  stops: DS.hasMany('stop', {async: true}),
  name: DS.attr('string')
});
