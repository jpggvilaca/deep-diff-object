const hasOwn = require('../hasOwn');
const isEqual = require('../isEqual');
const isArray = require('../isArray');
const isObject = require('../isObject');

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

    describe('isObject', () => {
      it('should return false if the argument is not an object', () => {
        expect(isObject(null)).toBe(false);
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

  describe('isEqual', () => {
    it('should compare strings properly', () => {
      expect(isEqual('', '')).toEqual(true);
      expect(isEqual('stringone', 'stringtwo')).toEqual(false);
      expect(isEqual('stringone', '')).toEqual(false);
      expect(isEqual('', 'stringtwo')).toEqual(false);
      expect(isEqual('string', 'string')).toEqual(true);
    });

    it('should compare numbers properly', () => {
      expect(isEqual(1, 1)).toEqual(true);
      expect(isEqual(1, 2)).toEqual(false);
    });

    it('should compare arrays properly', () => {
      expect(isEqual([], [])).toEqual(true);
      expect(isEqual([1, 2, 3], [1, 2, 3])).toEqual(true);
      expect(isEqual([1, 2, 3, 4], [1, 2, 3])).toEqual(false);
      expect(isEqual([4, 3, 2, 1], [4, 2, 3, 1])).toEqual(false);
      expect(isEqual([2, 5, 6, 7], [7, 6, 5, 4])).toEqual(false);
    });
  });
});
