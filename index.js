function unique(array, predicate) {
  var seen = {};
  var result = [];
  var len = array.length;
  var i;
  var value;
  if (len === 0) return array;
  if (typeof predicate !== 'function') {
    throw new TypeError('predicate must be a function');
  }

  for (i = 0; i < len; i++) {
    value = predicate.call(this, array[i], i, array)
    if (seen[value] !== true) {
      result.push(array[i]);
      seen[value] = true;
    }
  }
  return result;
}

module.exports = unique;
