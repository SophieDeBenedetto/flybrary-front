import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:resources/resource/index', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  var controller = this.subject();
  assert.ok(controller);
});

test('it toggles isEditing state on editResource action', function(assert) {
  assert.expect(2);
  const controller = this.subject();
  assert.equal(controller.get('isEditing'), false, 'isEditing initialized');
  controller.send('editResource');
  assert.equal(controller.get('isEditing'), true, 'isEditing successfully toggled');
})

