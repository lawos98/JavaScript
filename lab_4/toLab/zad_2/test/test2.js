var assert = require('assert');
var check = require('../module');

describe('The file/directory existing...', function () {
  it('Returns 0 for index.js', function () {
    var ans = check("index.js");
    assert.strictEqual(ans, 0)
  });
  it('Returns 0 for package.json', function () {
    var ans = check("package.json");
    assert.strictEqual(ans, 0)
  });
  it('Returns -1 for missing.js', function () {
    var ans = check("missing.js");
    assert.strictEqual(ans, -1)
  });
  it('Returns 1 for test', function () {
    var ans = check("test");
    assert.strictEqual(ans, 1)
  });
  it('Returns -1 for missing', function () {
    var ans = check("missing");
    assert.strictEqual(ans, -1)
  });
});