const { hasOwn, isEqual } = require('../helpers');
const isArray = require('../isArray');
const isNumber = require('../isNumber');
const isString = require('../isString');
const isObject = require('../isObject');
const {
  OneLevel_1,
  OneLevel_1_Copy,
  OneLevel_2,
  OneLevel_3,
} = require('./mockObjects');

describe('Helpers', () => {
  describe('Type checkers', () => {
    describe('isArray', () => {
      it('should return false if the argument is not an array', () => {
        expect(isArray(2)).toBe(false);
        expect(isArray(2.5)).toBe(false);
        expect(isArray('string')).toBe(false);
        expect(isArray({})).toBe(false);
        expect(isArray(() => {})).toBe(false);
      });

      it('should return true if the argument is an array', () => {
        expect(isArray([])).toBe(true);
        expect(isArray([1, 2, 3, 4])).toBe(true);
      });
    });

    describe('isNumber', () => {
      it('should return false if the argument is not a number', () => {
        expect(isNumber([])).toBe(false);
        expect(isNumber('string')).toBe(false);
        expect(isNumber('235')).toBe(false);
        expect(isNumber('235.50')).toBe(false);
        expect(isNumber({})).toBe(false);
        expect(isNumber(() => {})).toBe(false);
      });

      it('should return true if the argument is a number', () => {
        expect(isNumber(213)).toBe(true);
        expect(isNumber(213.5)).toBe(true);
        expect(isNumber(-213.5)).toBe(true);
      });
    });

    describe('isString', () => {
      it('should return false if the argument is not a string', () => {
        expect(isString([])).toBe(false);
        expect(isString(235.5)).toBe(false);
        expect(isString(235)).toBe(false);
        expect(isString({})).toBe(false);
        expect(isString(() => {})).toBe(false);
      });

      it('should return true if the argument is a string', () => {
        expect(isString('')).toBe(true);
        expect(isString('string')).toBe(true);
      });
    });

    describe('isObject', () => {
      it('should return false if the argument is not an object', () => {
        expect(isObject([])).toBe(false);
        expect(isObject(235.5)).toBe(false);
        expect(isObject(235)).toBe(false);
        expect(isObject('string')).toBe(false);
        expect(isObject(() => {})).toBe(false);
      });

      it('should return true if the argument is an object', () => {
        expect(isObject({})).toBe(true);
        expect(isObject({ age: 3 })).toBe(true);
      });
    });
  });

  describe('hasOwn', () => {
    it('should thrown an error if no sufficent parameters are passed', () => {
      // No arguments
      expect(() => hasOwn()).toThrow();

      // One argument
      expect(() => hasOwn({})).toThrow();
    });

    it('should thrown an error if no valid parameters are passed', () => {
      expect(() => hasOwn('string', 'string')).toThrow();

      expect(() => hasOwn({ age: 3 }, 3)).toThrow();

      expect(() => hasOwn(3, { age: 3 })).toThrow();

      expect(() => hasOwn({ age: 3 }, [1, 3, 4])).toThrow();
    });

    it('should return false if the object does not have the specified key', () => {
      const mockObject = { age: 3 };

      expect(hasOwn(mockObject, 'not a key')).toEqual(false);
    });

    it('should return true if the object has the specified key', () => {
      const mockObject = { age: 3 };

      expect(hasOwn(mockObject, 'age')).toEqual(true);
    });
  });
});
