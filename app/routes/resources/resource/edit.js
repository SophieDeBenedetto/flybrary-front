import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save: function() {
      var resource = this.currentModel;
      var that = this;
      resource.save().then(function() {
        that.transitionTo('resources.resource', resource.id);
      });
    }
  }
});