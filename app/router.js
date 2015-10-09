import Ember from 'ember';  
import config from './config/environment';

var Router = Ember.Router.extend({  
  location: config.locationType
});

export default Router.map(function() {  
  this.resource('resources', function() {
    this.resource('resource', { path: '/:resource_id' });
  });
});