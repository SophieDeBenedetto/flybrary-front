import DS from 'ember-data';
import ActiveModelAdapter from 'active-model-adapter';

export default ActiveModelAdapter.extend({
  namespace: 'v1',
  host: 'http://localhost:4000'
});