import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('controller:stops/new', 'StopsNewController', {
  // Specify the other units that are required for this test.
  needs: ['controller:venues/show']
});

// Replace this with your real tests.
test('it exists', function() {
  var controller = this.subject();
  ok(controller);
});
