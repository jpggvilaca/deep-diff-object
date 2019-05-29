/** 
 * TODO
 * - Abstract each type comparison
 * - Add tests
*/
const h = require('./helpers');

const result = {
  one: [],
  two: []
};

const deepDiff = function(objA, objB, key) {
  // Get all the keys from the first object
  // We will only compare the the same keys on the second object because all
  // the other keys that are not present on both objects are differences
  const keysA = Object.keys(objA);

  for (let i = 0; i < keysA.length; i++) {
    // If the second object has the current key
    // && If they are not equal
    if (
      h.hasOwn(objB, keysA[i]) &&
      !h.isEqual(objA[keysA[i]], objB[keysA[i]], deepDiff, keysA[i])
    ) {
      // If `key` is set it means it's a recursive call so we append the result
      // of the comparison to that `key`
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
