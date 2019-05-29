const deepDiff = require('../index');
const { hasOwn, isEqual } = require('../helpers');
const {
  OneLevel_1,
  OneLevel_1_Copy,
  OneLevel_2,
  OneLevel_3
} = require('./mockObjects');

describe('Helpers', () => {
  describe('hasOwn', () => {
    it('should thrown an error if no sufficent parameters are passed', ()=> {
      // No arguments
      expect(() => hasOwn()).toThrow();

      // One argument
      expect(() => hasOwn({})).toThrow();
    });

    it('should thrown an error if no valid parameters are passed', ()=> {
      expect(() => hasOwn("string", "string")).toThrow();

      expect(() => hasOwn({ age: 3 }, 3)).toThrow();

      expect(() => hasOwn(3, { age: 3 })).toThrow();

      expect(() => hasOwn({ age: 3 }, [1, 3, 4])).toThrow();
    });

    it('should return false if the object does not have the specified key', ()=> {
      const mockObject = { age: 3 };

      expect(hasOwn(mockObject, "not a key")).toEqual(false);
    });

    it('should return true if the object has the specified key', ()=> {
      const mockObject = { age: 3 };

      expect(hasOwn(mockObject, "age")).toEqual(true);
    });
  });
});

describe('Helpers', () => {
  describe('isEqual', () => {
    it('string', () => {

    });
  });
});
