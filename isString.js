/**
 * @description Check if the argument is a string
 * @param {any} arg Value with any type
 *
 * @return {boolean} True if it's a string, False otherwise
 */
const isString = arg => typeof arg === 'string';

module.exports = isString;
