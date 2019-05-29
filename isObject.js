/**
 * @description Check if the argument is an object
 * @param {any} arg Value with any type
 *
 * @return {boolean} True if it's an object, False otherwise
 */
const isObject = arg => {
  if (arg === null) return false;

  return arg.constructor.name === 'Object';
};

module.exports = isObject;
