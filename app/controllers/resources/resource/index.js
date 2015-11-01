import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    editResource: function() {
      this.toggleProperty('isEditing');
    },
    saveResource: function() {
      var resource = this.get('model');
      resource.save();
      this.toggleProperty('isEditing');
    },
  },

  isEditing: false
});
