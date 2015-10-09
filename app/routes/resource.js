import Ember from 'ember';

export default Ember.Route.extend({  
  model: function(params) {
    return this.store.find('resource', params.resource_id);
  }
});