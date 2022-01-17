const head = function(array) {
  if(!array || !Array.isArray(array)) {
    return;
  }
  return array[0];
}

module.exports = head;