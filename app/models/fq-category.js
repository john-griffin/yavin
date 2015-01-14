import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  pluralName: DS.attr('string'),
  shortName: DS.attr('string'),
  icon: DS.attr('hash'),
  primary: DS.attr('boolean', { defaultValue: false })
});
