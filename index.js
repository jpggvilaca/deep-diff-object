var h = require('./helpers');

var result = {
  one: [],
  two: []
};

var deepDiff = function(objA, objB, key) {
  var keysA = Object.keys(objA);

  for (var i = 0; i < keysA.length; i++) {
    if (h.hasOwn(objB, keysA[i]) && !h.isEqual(objA[keysA[i]], objB[keysA[i]], deepDiff, keysA[i])) {
      if (key) {
        result.one.push({ [key]: { [keysA[i]]: objA[keysA[i]] }});
        result.two.push({ [key]: { [keysA[i]]: objB[keysA[i]] }});
      } else {
        result.one.push({ [keysA[i]]: objA[keysA[i]] });
        result.two.push({ [keysA[i]]: objB[keysA[i]] });
      }
    }
  }

  return result;
}

module.exports = deepDiff;
