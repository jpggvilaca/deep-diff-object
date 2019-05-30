const hasOwn = require('./hasOwn');
const isEqual = require('./isEqual');

const result = {
  one: [],
  two: []
};

const deepDiff = function(One, Two, key) {
  // Get all the keys from the first object
  // We will only compare the the same keys on the second object because all
  // the other keys that are not present on both objects are differences
  const ObjectOneKeys = Object.keys(One);
  const ObjectTwoKeys = Object.keys(Two);

  for (let i = 0; i < ObjectOneKeys.length; i++) {

    // This key only exists on the first object so they are automatically different
    if (!hasOwn(Two, ObjectOneKeys[i])) {
      result.one.push({ [ObjectOneKeys[i]]: One[ObjectOneKeys[i]] });
      result.two.push({ [ObjectTwoKeys[i]]: Two[ObjectTwoKeys[i]] });
    }

    // If the second object has the current key
    // && If they are not equal
    else if (
      !isEqual(One[ObjectOneKeys[i]], Two[ObjectOneKeys[i]], deepDiff, ObjectOneKeys[i])
    ) {
      // If `key` is set it means it's a recursive call so we append the result
      // of the comparison to that `key`
      if (key) {
        result.one.push({ [key]: { [ObjectOneKeys[i]]: One[ObjectOneKeys[i]] }});
        result.two.push({ [key]: { [ObjectOneKeys[i]]: Two[ObjectOneKeys[i]] }});
      } else {
        result.one.push({ [ObjectOneKeys[i]]: One[ObjectOneKeys[i]] });
        result.two.push({ [ObjectOneKeys[i]]: Two[ObjectOneKeys[i]] });
      }
    }
  }

  return result;
}

module.exports = deepDiff;
