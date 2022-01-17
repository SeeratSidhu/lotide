const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  let counts = {};
  let str = string.split(' ').join('').toLowerCase();

  for (const letter of str) {
    if (counts[letter]) {
      counts[letter] += 1;
    } else {
      counts[letter] = 1;
    }
  }

  return counts;
};

const result = countLetters("lighthouse labs");

assertEqual(result["l"], 2);
assertEqual(result["s"], 2);
assertEqual(result["t"], 1);

module.exports = countLetters;