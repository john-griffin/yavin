import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    categories: {embedded: 'always'},
    photos: {embedded: 'always'}
  },
  extractFind: function(store, type, payload, id, requestType) {
    payload = { "fq-venue": payload.response.venue };
    if (payload["fq-venue"]["photos"].count > 0) {
      payload["fq-venue"]['photos'] = payload["fq-venue"]["photos"]['groups'][0]["items"];
    }
    return this._super(store, type, payload, id, requestType);
  },
  extractArray: function(store, type, payload) {
    payload = { "fq-venues": payload.response.venues };
    return this._super(store, type, payload);
  }
});
