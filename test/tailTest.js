const tail = require('../tail');
const { expect } = require('chai');

describe('#tail', () => {
  it("should return [2,3] for [1,2,3]", () => {
    const result = tail([1,2,3]);
    const expectedResult = [2,3];
    expect(result).to.deep.equal(expectedResult);
  });
  it("should return ['is', 'snowing'] for ['it', 'is', 'snowing']", () => {
      const result = tail(['it', 'is', 'snowing']);
      expect(result).to.deep.equal(['is', 'snowing']);
  });
  it("should return undefined if there is no array", () => {
    expect(tail()).to.equal(undefined);
  });
  it("should return undefined if argument is not an array", () => {
    expect(tail("hello")).to.equal(undefined);
  });
  it("should return length as 4 for [1,2,3,4]", function() {
    const originalArray = [1,2,3,4]
    const result = tail(originalArray);
    expect(originalArray.length).to.equal(4);
  });
  it("should return 'you' for the first element of tail of ['Hello', 'you', 'are', 'awesome']", () => {
    const originalArray = ['Hello', 'you', 'are', 'awesome'];
    const result = tail(originalArray);
    expect(result[0]).to.equal('you');
  });
});