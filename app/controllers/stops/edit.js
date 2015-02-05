import Ember from 'ember';
import StopsBaseController from './base';

export default StopsBaseController.extend({
  needs: ['venues/edit/show'],
  venueController: Ember.computed.alias('controllers.venues/edit/show')
});
