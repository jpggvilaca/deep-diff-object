const testObjects = require('./testObjects'); // Remove this
const filter = require('lodash/filter');
const includes = require('lodash/includes');
const checkType = require('./checkType');

// Takes two objects and outputs the same objects but with only the
// common properties, ordered
const formatter = function(obj_1, obj_2) {
  let result = {
    one: {},
    two: {},
    isDeep: false
  };

  const keys = Object.keys(obj_1).concat(Object.keys(obj_2));

  const commonKeys = filter(keys, function (value, index, iteratee) {
    return includes(iteratee, value, index + 1);
  });

  for(let i = 0; i < commonKeys.length; i++) {
    result.one[commonKeys[i]] = obj_1[commonKeys[i]];
    result.two[commonKeys[i]] = obj_2[commonKeys[i]];
  }

  const resultKeys = Object.keys(result.one);

  for(let i = 0; i < resultKeys.length; i++) {
    if (checkType(resultKeys[i]) === 'Object') {
      result.isDeep = true;
      // find a performant way of creating object levels and recursively
      // call formatter. Or maybe do this on the main func?
    }
  }

  console.log(result);

  return result;
};

formatter(testObjects.obj_7, testObjects.obj_8);

module.exports = formatter;
