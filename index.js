const hasOwn = require('./hasOwn');
const isEqual = require('./isEqual');
const isArray = require('./isArray');
const isObject = require('./isObject');

const initialResult = {
  one: [],
  two: []
};

const deepDiff = function(One, Two, result = initialResult) {
  // Get all the keys from both objects
  const ObjectOneKeys = Object.keys(One);

  ObjectOneKeys.forEach(key => {
    if (isObject(One[key]) && isObject(Two[key])) {
      if (!Object.keys(One[key]).length && !Object.keys(Two[key]).length) {
        return result;
      }

      let { one, two } = deepDiff(One[key], Two[key], result);

      console.log('one: ', one);
      console.log('two: ', two);

      result.one.push({ [key]: Object.keys(One[key]) ? One[key] : {} });
      result.two.push({ [key]: Object.keys(Two[key]) ? Two[key] : {} });
    }

    if (hasOwn(Two, key) && !isEqual(One[key], Two[key])) {
      result.one.push({ [key]: One[key] });
      result.two.push({ [key]: Two[key] });
    }
  });

  return result;
}

module.exports = deepDiff;
