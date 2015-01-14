import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    categories: {embedded: 'always'}
  },
  extractFind: function(store, type, payload, id, requestType) {
    payload = { "fq-venue": payload.response.venue };
    return this._super(store, type, payload, id, requestType);
  },
  extractArray: function(store, type, payload) {
    payload = { "fq-venues": payload.response.venues };
    return this._super(store, type, payload);
  }
});
