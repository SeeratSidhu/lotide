const eqArrays = function(array1, array2) {
  if (!array1 || !array2) {
    return "Pass two arrays as arguments";
  }
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅ Assertion Passed: [${array1}] === [${array2}]`);
  } else {
    console.log(`❌ Assertion Failed: [${array1}] !== [${array2}]`);
  }
};

const middle = function(array) {
  let length = array.length;
  let midLength = Math.floor(length / 2);
  if (length < 3) {
    return [];
  }
  if (length % 2 !== 0) {
    return array.slice(midLength, midLength + 1);
  } else {
    return array.slice(midLength - 1, midLength + 1);
  }
};

//Test Code
assertArraysEqual(middle([1,2,3,4]),[2,3]);
assertArraysEqual(middle([1,2,3,4,5,6,7]),[4]);
assertArraysEqual(middle([1,2]),[]);
assertArraysEqual(middle(["Coffee","Tea","Coke"]),["Tea"]);