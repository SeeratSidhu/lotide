const tail = function(array) {
  if(!array || !Array.isArray(array)) {
    return;
  }
  let result = [];
  if (array.length > 1) {
    for (let i = 1; i < array.length; i++) {
      result.push(array[i]);
    }
  }
  return result;
};

module.exports = tail;