/**
 * @description Check if the argument is an array
 * @param {any} arg Value with any type
 *
 * @return {boolean} True if it's an array, False otherwise
 */
const isArray = arg => Object.prototype.toString.call(arg) === '[object Array]';

module.exports = isArray;
