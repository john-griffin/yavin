import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('stop', 'Stop', {
  // Specify the other units that are required for this test.
  needs: ['model:crawl']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(!!model);
});
