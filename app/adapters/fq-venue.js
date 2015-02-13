import Ember from 'ember';
import DS from 'ember-data';
import config from "../config/environment";

export default DS.RESTAdapter.extend({
  host:      config.FS_API_HOST,
  namespace: config.FS_API_NS,
  ajax: function(url, type, hash) {
    if (Ember.isEmpty(hash)) {
      hash = {};
    }
    if (Ember.isEmpty(hash.data)) {
      hash.data = {};
    }
    hash.data.client_id     = config.FS_API_CI;
    hash.data.client_secret = config.FS_API_CS;
    hash.data.v = '20150113';
    return this._super(url, type, hash);
  },
  pathForType: function(type) {
    if (type === 'venues/search') {
      return type;
    }
    return this._super(type);
  },
  buildURL: function(type, id, record) {
    if (id) { // show action
      type = 'venue';
    } else {  // search action
      type = 'venues/search';
    }
    return this._super(type, id, record);
  }
});
