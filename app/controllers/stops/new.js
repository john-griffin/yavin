import Ember from 'ember';
import StopsBaseController from './base';

export default StopsBaseController.extend({
  needs: ['venues/new/show'],
  venueController: Ember.computed.alias('controllers.venues/new/show')
});
