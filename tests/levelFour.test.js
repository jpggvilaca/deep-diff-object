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

      expect(result).toEqual({
        one: [{ age: 3 }, { score: { home: [1, 2, 3], away: 'cenas' } }],
        two: [{ age: 5 }, { score: { home: [4, 1, 0], away: 'cenas 2' } }],
      });
    });
  });
});
