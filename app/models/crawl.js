import DS from 'ember-data';

export default DS.Model.extend({
  stops: DS.hasMany('stop', {async: true}),
  user_id: DS.attr('number'),
  name: DS.attr('string')
});
