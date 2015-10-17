Resources.ResourcesController = Ember.ArrayController.extend({
  actions: {
    createResource: function() {
      // Get the todo title set by the "New Todo" text field
      var title = this.get('newTitle');
      if (!title.trim()) { return; }

      // Create the new Todo model
      var resource = this.store.createRecord('resource', {
        title: title,
        isCompleted: false
      });

      // Clear the "New Todo" text field
      this.set('newTitle', '');

      // Save the new model
      resource.save();
    }
  }
});