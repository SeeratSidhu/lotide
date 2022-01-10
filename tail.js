const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  let result = [];
  if (array.length > 1) {
    for (let i = 1; i < array.length; i++) {
      result.push(array[i]);
    }
  }
  return result;
};

const random = ["Hello", "You", "Are", "Awesome"];
const randomTail = tail(random);
console.log(randomTail);
console.log(tail([1]));
assertEqual(randomTail.length, 3);
assertEqual(randomTail[0], "You");
assertEqual(randomTail[1], "Are");
assertEqual(randomTail[2], "Awesome");
assertEqual(random.length, 4);