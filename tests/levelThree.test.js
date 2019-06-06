const deepDiff = require('../index');
const {
  OneLevel_3,
  OneLevel_3_Copy,
  OneLevel_3_Different,
} = require('./mockObjects');

describe('deepDiff', () => {
  describe('Complex objects with one level', () => {
    /**
     * Result object
     * result = { one: [], two: [] }
     */
    it('should return the result with no differences', () => {
      const result = deepDiff(OneLevel_3, OneLevel_3_Copy);

      expect(result).toEqual({ one: [], two: [] });
    });

    it('should return the result with the correct differences', () => {
      const result = deepDiff(OneLevel_3, OneLevel_3_Different);

      expect(result).toEqual({
        one: [{ list: [[1, 2, 3], [4, 5, 6]] }],
        two: [{ list: [[44, 33, 11], [0, 0, 0]] }],
      });
    });
  });
});
