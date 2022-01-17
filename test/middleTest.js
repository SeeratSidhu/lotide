const middle = require('../middle');
const { expect } = require('chai');

describe("#middle", () => {
  it("should return [2,3] for [1,2,3,4]", () => {
    const mid = middle([1,2,3,4]);
    expect(mid).to.deep.equal([2,3]);
  });
  it("should return ['tea'] for ['coffee', 'tea', 'beer']", () => {
    expect(middle(['coffee', 'tea', 'beer'])).to.deep.equal(['tea']);
  });
  it("should return an empty array if length of input is less than 3", () => {
    expect(middle([1,2])).to.deep.equal([]);
  });
  it("should return undefined if input is not an array", () => {
    expect(middle('middle')).to.be.undefined;
  });
  it("should return an array", () => {
    expect(Array.isArray(middle([1,2,3]))).to.be.true;
  });
  it("should return undefined if no is passed", () => {
    expect(middle()).to.be.undefined;
  });
});