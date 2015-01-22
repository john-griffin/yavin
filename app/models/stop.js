import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  crawl: DS.belongsTo('crawl'),
  rowOrder: DS.attr('number'),      // read only
  rowOrderPosition: DS.attr('raw'), // write only
  photoId: DS.attr('string'),
  photoPrefix: DS.attr('string'),
  photoSuffix: DS.attr('string'),

  photoUrl: Ember.computed('photoPrefix', 'photoSuffix', function(){
    return this.get('photoPrefix') + 'width300' + this.get('photoSuffix');
  }),

  // venue data
  description: DS.attr('string'),
  foursquareId: DS.attr('string'),
  location: DS.attr('raw'),
  venueName: DS.attr('string')
});
