const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');

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

const ab = { a: "1", b: "2" , c: "4"};
const ba = { b: "2", a: "1" , c: "4"};
const abc = { a: "1", b: "2", c: "3" };

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3, 4] };
const dc = { d: "2", c: "1" };
const cd3 = {c: "1", d: ["2",3,4]};
console.log(eqObjects(cd, cd3)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false

assertEqual(eqObjects(cd, dc), false);
assertEqual(eqObjects(cd, cd2), true);

module.exports = eqObjects;
  