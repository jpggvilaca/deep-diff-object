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

module.exports = hasOwn;
