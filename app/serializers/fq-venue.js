import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    categories: {embedded: 'always'}
  },
  extractArray: function(store, type, payload) {
    payload = { "fq-venues": payload.response.venues };
    return this._super(store, type, payload);
  }
});
