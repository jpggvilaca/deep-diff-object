const deepDiff = require('../index');
const {
  TwoLevels_1,
  TwoLevels_1_Copy,
  TwoLevels_1_Different,
} = require('./mockObjects');

describe('deepDiff', () => {
  describe('Complex objects with two levels', () => {
    /**
     * Result object
     * result = { one: [], two: [] }
     */
    it('should return the result with no differences', () => {
      const result = deepDiff(TwoLevels_1, TwoLevels_1_Copy);

      expect(result).toEqual({ one: [], two: [] });
    });

    it('should return the result with the correct differences', () => {
      const result = deepDiff(TwoLevels_1, TwoLevels_1_Different);

      // expect(result).toEqual({
      //   one: [{ list: [[1, 2, 3], [4, 5, 6]] }],
      //   two: [{ list: [[44, 33, 11], [0, 0, 0]] }],
      // });
    });
  });
});
