/**
 * @description Check value's data type (object, string, number, function)
 * @param {any} data Value with any type
 *
 * @return {string} The type of the element
 */
const checkType = function(data) {
  const typeString = Object.prototype.toString.call(data).split(' ');
  const type = typeString[1].slice(0, -1);

  return type;
};

/**
 * @description Check if the object has a certain key
 * @param {object} obj A javascript object
 * @param {object} obj A javascript object
 *
 * @return {boolean} If the object has or not a certain key
 */
const hasOwn = function(obj, key) {
  if (!obj || !key) {
    throw new Error('Insufficient arguments passed to "hasOwn" func');
  }

  if (typeof obj !== 'object' || typeof key !== 'string') {
    throw new TypeError(
      `${obj} should be of type 'object' and ${key} should be of type 'string'`,
      'helpers.js',
      23
    );
  }

  return obj.hasOwnProperty(key);
};

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
  const type = checkType(value1);

  // If the element is an array
  if (type === 'Array') {
    // If the arrays differ in size, it's considered different
    if (value1.length !== value2.length) {
      return false;
    }

    for (let x = 0; x < value1.length; x++) {
      // If the element is an object, we need to recursively check that object
      if (checkType(value1[x]) === 'Object' && callback) {
        const result = callback(value1[x], value2[x], key);

        if (!result.one.length) {
          return true;
        }
      } else {
        for (let x = 0; x < value1.length; x++) {
          // If the element is a function, we just check the length of that function
          // when converted to a string
          if (
            checkType(value1[x] === 'Function') &&
            value1.toString() !== value2.toString()
          ) {
            return false;
          }

          if (value1[x].toString() !== value2[x].toString()) {
            return false;
          }
        }
      }
    }
  }

  // If we're comparing objects, we need to go deep :kappa:
  else if (type === 'Object' && callback) {
    const result = callback(value1, value2, key);

    if (!result.one.length) {
      return true;
    }
  } else {
    if (value1.toString() !== value2.toString()) {
      return false;
    }
  }

  return true;
};

module.exports = { hasOwn, isEqual };
