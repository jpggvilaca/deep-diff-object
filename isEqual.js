const isArray = require('./isArray');
const isObject = require('./isObject');
const hasOwn = require('./hasOwn');

/** 
 * @description Check if two values are deepEqual regardless of their types. 'key' here is an
  attribute name, because if we're comparing objects we want to return the
  differences from them but we also need to know the name of the attribute itself.
 * @param {any} element1 Value with any type
 * @param {any} element2 Value with any type
 * @param {function} callback For recursive calls
 * @param {string} key Value with any type
 * 
 * @return {boolean} If the object has or not a certain key
 */
const isEqual = function(value1, value2, callback, key) {
  // We only need to compare one because they will have the same type
  if (isArray(value1)) {
    // If the arrays differ in size, it's considered different
    if (value1.length !== value2.length) {
      return false;
    }

    // If they dont differ in size, we need to compare all the elements
    for (let x = 0; x < value1.length; x++) {
      if (isArray(value1[x])) {
        isEqual(value1[x], value2[x], callback, key);
      }

      // If the element is an object, we need to recursively check that object
      else if (isObject(value1[x])) {
        callback(value1[x], value2[x], key);
      }

      else if (value1.toString() !== value2.toString()) {
        return false;
      }
    }
  }

  // If we're comparing objects, we need to go deep :kappa:
  else if (isObject(value1)) {
    callback(value1, value2, key);
  } else {
    // Last case where it's neither an array or an object
    if (value1.toString() !== value2.toString()) {
      return false;
    }
  }

  return true;
};

module.exports = isEqual;
