const deepDiff = require('../index');
const {
  OneLevel_1,
  OneLevel_1_Copy,
  OneLevel_1_Different,
} = require('./mockObjects');

describe('deepDiff', () => {
  /**
   * Result object
   * result = { one: [], two: [] }
   */

  describe('Objects with one level', () => {
    it('should return the result with no differences', () => {
      const result = deepDiff(OneLevel_1, OneLevel_1_Copy);

      expect(result).toEqual({ one: [], two: [] });
    });

    it('should return the result with the correct differences', () => {
      const result = deepDiff(OneLevel_1, OneLevel_1_Different);

      expect(result).toEqual({
        one: [{ age: 3 }],
        two: [{ age: 5 }],
      });
    });
  });
});
