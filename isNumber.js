/**
 * @description Check if the argument is a number
 * @param {any} arg Value with any type
 *
 * @return {boolean} True if it's a number, False otherwise
 */
const isNumber = arg => typeof arg === 'number';

module.exports = isNumber;
