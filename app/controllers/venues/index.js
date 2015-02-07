import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['query'],
  isEmpty: Ember.computed.empty('model'),
  hasQuery: Ember.computed.notEmpty('query'),
  noResults: Ember.computed.and('hasQuery', 'isEmpty')
});
