const deepDiff = require('../index');
const {
  OneLevel_2,
  OneLevel_2_Copy,
  OneLevel_2_Different,
} = require('./mockObjects');

describe('deepDiff', () => {
  describe('Complex objects with one level', () => {
    /**
     * Result object
     * result = { one: [], two: [] }
     */

    it('should return the result with no differences', () => {
      const result = deepDiff(OneLevel_2, OneLevel_2_Copy);

      expect(result).toEqual({ one: [], two: [] });
    });

    it('should return the result with the correct differences', () => {
      const result = deepDiff(OneLevel_2, OneLevel_2_Different);

      expect(result).toEqual({
        one: [
          { score: 10.4 },
          { description: 'yo' },
          { request: {} }
        ],
        two: [
          { score: 15 },
          { description: 'yo diff' },
          { request: { score: 1 } },
        ],
      });
    });
  });
});
