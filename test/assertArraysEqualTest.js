const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1,2,3], [1,2,3]);
assertArraysEqual(["s", "e", "e","t"], ["s", "e", "e", "t"]);
assertArraysEqual(["s", 1, null], ["s", 1, null]);