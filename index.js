const hasOwn = require('./hasOwn');
const isEqual = require('./isEqual');
const isObject = require('./isObject');

const initialResult = {
  one: [],
  two: [],
};

const deepDiff = function(One, Two, parent, result = initialResult) {
  // Get all the keys from the first object
  const ObjectOneKeys = Object.keys(One);

  ObjectOneKeys.forEach(key => {
    // Comparing objects
    if (isObject(One[key]) && isObject(Two[key])) {
      // If they're empty, return an empty object
      if (!Object.keys(One[key]).length && !Object.keys(Two[key]).length) {
        return result;
      }

      deepDiff(One[key], Two[key], key, result);
    }

    if (hasOwn(Two, key) && !isEqual(One[key], Two[key])) {
      // If we're on a recursive call we need to preprend the parent object's name
      if (parent) {
        result.one.push({ [parent]: { [key]: One[key] } });
        result.two.push({ [parent]: { [key]: Two[key] } });
      } else {
        result.one.push({ [key]: One[key] });
        result.two.push({ [key]: Two[key] });
      }
    }
  });

  return result;
};

module.exports = deepDiff;
