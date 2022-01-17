const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

//Test Code
assertArraysEqual(middle([1,2,3,4]),[2,3]);
assertArraysEqual(middle([1,2,3,4,5,6,7]),[4]);
assertArraysEqual(middle([1,2]),[]);
assertArraysEqual(middle(["Coffee","Tea","Coke"]),["Tea"]);