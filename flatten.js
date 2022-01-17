const assertArraysEqual = require('./assertArraysEqual');

const flatten = function(array) {
  let results = [];

  for (const item of array) {
    if(Array.isArray(item)) {
      for(let val of flatten(item)) {
        results.push(val);
      }
    } else {
      results.push(item);
    }
    
  }

  return results;
};

assertArraysEqual(flatten([1,2,3,[4,5], [6]]), [1,2,3,4,5,6]);