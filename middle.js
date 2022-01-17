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

module.exports = middle;