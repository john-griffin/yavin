import Pretender from 'pretender';
import QUnit from 'qunit';

var pretender;
export default function(assert) {
  pretender = new Pretender();

  pretender.prepareBody = function(body){
    return body ? JSON.stringify(body) : null;
  };

  pretender.unhandledRequest = function(verb, path) {
    console.error("Unhandled request", verb, path);
    assert.ok(false, "Request not handled: " + verb + " " + path);
    throw new Error("Unhandled request " + verb + path);
  };

  return pretender;
}

QUnit.testDone(function () {
  if (pretender) {
    pretender.shutdown();
  }
});
