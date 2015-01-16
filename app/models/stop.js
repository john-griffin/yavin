import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  crawl: DS.belongsTo('crawl'),

  // venue data
  description: DS.attr('string'),
  foursquareId: DS.attr('string'),
  photoUrl: DS.attr('string'),
  location: DS.attr('raw'),
  venueName: DS.attr('string')
});
