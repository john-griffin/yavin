import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  referralId: DS.attr('string'),
  url: DS.attr('string'),
  storeId: DS.attr('string'),
  canonicalUrl: DS.attr('string'),
  shortUrl: DS.attr('string'),
  ratingColor: DS.attr('string'),
  timeZone: DS.attr('string'),
  description: DS.attr('string'),
  contact: DS.attr('hash'),
  location: DS.attr('hash'),
  stats: DS.attr('hash'),
  hereNow: DS.attr('hash'),
  menu: DS.attr('hash'),
  venuePage: DS.attr('hash'),
  delivery: DS.attr('hash'),
  reservations: DS.attr('hash'),
  specials: DS.attr('hash'),
  price: DS.attr('hash'),
  likes: DS.attr('hash'),
  photos: DS.attr('hash'),
  reasons: DS.attr('hash'),
  page: DS.attr('hash'),
  mayor: DS.attr('hash'),
  tips: DS.attr('hash'),
  tags: DS.attr('hash'),
  listed: DS.attr('hash'),
  phrases: DS.attr('hash'),
  hours: DS.attr('hash'),
  popular: DS.attr('hash'),
  pageUpdates: DS.attr('hash'),
  inbox: DS.attr('hash'),
  attributes: DS.attr('hash'),
  rating: DS.attr('number'),
  ratingSignals: DS.attr('number'),
  createdAt: DS.attr('number'),
  hasMenu: DS.attr('boolean', { defaultValue: false }),
  verified: DS.attr('boolean', { defaultValue: false }),
  like: DS.attr('boolean', { defaultValue: false }),
  dislike: DS.attr('boolean', { defaultValue: false }),
  ok: DS.attr('boolean', { defaultValue: false }),
  categories: DS.hasMany('fq-category'),
  firstPhoto: Ember.computed('photos', function(){
    var photos = this.get('photos');
    if (photos) {
      var photo = photos.groups[0].items[0];
      return photo.prefix + 'width300' + photo.suffix;
    }
  })
});
