const eqArrays = function(array1, array2) {
  if (!array1 || !array2 || array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function(object1, object2) {
  let ob1Keys = Object.keys(object1);
  let ob2Keys = Object.keys(object2);
  if (!object1 || !object2 || ob1Keys.length !== ob2Keys.length) {
    return false;
  }
  for (const key of ob2Keys) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  if (eqObjects(object1, object2)) {
    console.log(`✅ Assertion Passed: [${inspect(object1)}] === [${inspect(object2)}]`);
  } else {
    console.log(`❌ Assertion Failed: [${inspect(object1)}] !== [${inspect(object2)}]`);
  }
};

assertObjectsEqual({a: "1", b: "2"}, {a:"1", b: "2"});
assertObjectsEqual({a: "1", b: "2"}, {a:"1", b: ["2"]});