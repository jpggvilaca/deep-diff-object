const testObjects = require('./testObjects');
const filter = require('lodash/filter');
const includes = require('lodash/includes');

// Takes two objects and outputs the same objects but with only the
// common properties, ordered
const formatter = function(obj_1, obj_2) {
  let result = {
    one: {},
    two: {}
  };

  const keys = Object.keys(obj_1).concat(Object.keys(obj_2));

  const commonKeys = filter(keys, function (value, index, iteratee) {
    return includes(iteratee, value, index + 1);
  });

  for(let i = 0; i < commonKeys.length; i++) {
    result.one[commonKeys[i]] = obj_1[commonKeys[i]];
    result.two[commonKeys[i]] = obj_2[commonKeys[i]];
  }

  return result;
};

module.exports = formatter;
