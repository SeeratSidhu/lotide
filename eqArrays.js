const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  if(!array1 || !array2) {
    return "Pass two arrays as arguments";
  }
  if (array1.length !== array2.length) {
    return false;
  }
  for(let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};

assertEqual(eqArrays([1,2,3], [1,2,3]), true);
assertEqual(eqArrays([1, 2, 3], []), false);
assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3, '4']), false);
assertEqual(eqArrays([['1'], '2', '3'], [['1'], '2', '3']), true);
assertEqual(eqArrays([1, 2, 3]), true);