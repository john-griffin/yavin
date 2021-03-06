import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  categories: DS.hasMany('fq-category'),
  photos: DS.hasMany('fq-photo'),
  name: DS.attr('string'),
  referralId: DS.attr('string'),
  url: DS.attr('string'),
  storeId: DS.attr('string'),
  canonicalUrl: DS.attr('string'),
  shortUrl: DS.attr('string'),
  ratingColor: DS.attr('string'),
  timeZone: DS.attr('string'),
  description: DS.attr('string'),
  contact: DS.attr('raw'),
  location: DS.attr('raw'),
  stats: DS.attr('raw'),
  hereNow: DS.attr('raw'),
  menu: DS.attr('raw'),
  venuePage: DS.attr('raw'),
  delivery: DS.attr('raw'),
  reservations: DS.attr('raw'),
  specials: DS.attr('raw'),
  price: DS.attr('raw'),
  likes: DS.attr('raw'),
  reasons: DS.attr('raw'),
  page: DS.attr('raw'),
  mayor: DS.attr('raw'),
  tips: DS.attr('raw'),
  tags: DS.attr('raw'),
  listed: DS.attr('raw'),
  phrases: DS.attr('raw'),
  hours: DS.attr('raw'),
  popular: DS.attr('raw'),
  pageUpdates: DS.attr('raw'),
  inbox: DS.attr('raw'),
  attributes: DS.attr('raw'),
  rating: DS.attr('number'),
  ratingSignals: DS.attr('number'),
  createdAt: DS.attr('number'),
  hasMenu: DS.attr('boolean', { defaultValue: false }),
  verified: DS.attr('boolean', { defaultValue: false }),
  like: DS.attr('boolean', { defaultValue: false }),
  dislike: DS.attr('boolean', { defaultValue: false }),
  ok: DS.attr('boolean', { defaultValue: false }),
  point: Ember.computed('location', function(){
    var location = this.get('location');
    return [location.lat, location.lng];
  }),
  icon: Ember.computed('categories', function() {
    return this.get("categories.firstObject.iconUrl");
  })
});
