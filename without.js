const eqArrays = function(array1, array2) {
  if (!array1 || !array2 || array1.length !== array2.length) {
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

const without = function(source, itemsToRemove) {
  let output = [];
  const itemsSet = new Set(itemsToRemove);
  for (let element of source) {
    if (!itemsSet.has(element)) {
      output.push(element);
    }
  }
  return output;
};


assertArraysEqual(without([1,2,3], [1]), [2,3]);
assertArraysEqual(without(["1","2","3"], ["3", 4,5]), ["1","2"]);
assertArraysEqual(without([1,2,3], []), [1,2,3]);


