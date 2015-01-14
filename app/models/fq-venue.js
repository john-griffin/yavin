import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  referralId: DS.attr('string'),
  url: DS.attr('string'),
  storeId: DS.attr('string'),
  contact: DS.attr('hash'),
  location: DS.attr('hash'),
  stats: DS.attr('hash'),
  hereNow: DS.attr('hash'),
  menu: DS.attr('hash'),
  venuePage: DS.attr('hash'),
  delivery: DS.attr('hash'),
  reservations: DS.attr('hash'),
  specials: DS.attr('hash'),
  hasMenu: DS.attr('boolean', { defaultValue: false }),
  verified: DS.attr('boolean', { defaultValue: false }),
  categories: DS.hasMany('fq-category')
});
