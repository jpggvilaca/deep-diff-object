const isArray = require('./isArray');

/** 
 * @description Check if two values are deepEqual regardless of their types
 * @param {any} element1 Value with any type
 * @param {any} element2 Value with any type
 * 
 * @return {boolean} If the object has or not a certain key
 */
const isEqual = function(value1, value2) {
  // We only need to compare one because they will have the same type
  if (isArray(value1)) {
    // If the arrays differ in size, it's considered different
    if (value1.length !== value2.length) {
      return false;
    }

    // If they dont differ in size, we need to compare all the elements
    for (let x = 0; x < value1.length; x++) {
      if (value1.toString() !== value2.toString()) {
        return false;
      }
    }
  }
  
  else {
    // Last case where it's neither an array or an object
    if (value1.toString() !== value2.toString()) {
      return false;
    }
  }

  return true;
};

module.exports = isEqual;
