const head = require('../head');
const { assert, expect } = require('chai');

describe('#head', () => {
  it("returns 1 for [1,2,3", () => {
    assert.strictEqual(head([1,2,3]), 1);
  });
  it("return '5' for ['5']", () => {
    expect(head(['5'])).to.equal('5');
  });
  it("should return 'hi' for ['hi', 'Bob']", () => {
    expect(head(['hi', 'Bob'])).to.equal('hi');
  });
  it("should return undefined for empty array", () => {
    assert.strictEqual(head([]), undefined);
  });
  it("should return undefined if there is no array", () => {
    assert.strictEqual(head(), undefined);
  });
  it("should return undefined if argument is not an array", () => {
    assert.strictEqual(head("hello"), undefined);
  });
});