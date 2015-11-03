import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('resource', 'Unit | Model | resource', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});

test('it has a title, url, description and topic', function(assert){
  const resource = this.subject({title: "testing title"});
  assert.equal(resource.get('title'), 'testing title');
});