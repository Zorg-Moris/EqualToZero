const { performance } = require('perf_hooks');
const assert = require('assert');
const { equalToZero } = require('../src/index');
const { firstArray, secondArray, thirdArray } = require('./testArray');
describe('is equal to zero ', function() {
  it('Test case First should return "YES"', function() {
    let time = performance.now();
    const result = equalToZero(firstArray);
    console.log(performance.now() - time);
    assert.equal(result, "YES")
  });
  it('Test case Second should return "NO"', function() {
    let time = performance.now();
    const result = equalToZero(secondArray);
    console.log(performance.now() - time);
    assert.equal(result, "NO")
  });
  it('Test case Third should return "YES"', function() {
    let time = performance.now();
    const result = equalToZero(thirdArray);
    console.log(performance.now() - time);
    assert.equal(result, "YES")
  });
});