import DS from 'ember-data';

export default DS.ActiveModelAdapter.extend({  
  namespace: 'v1',
  host: 'http://localhost:4000'
});
