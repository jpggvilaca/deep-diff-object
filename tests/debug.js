const deepDiff = require('../index');
const {
  OneLevel_1,
  OneLevel_1_Copy,
  OneLevel_1_Different,
  OneLevel_2,
  OneLevel_3,
  TwoLevels_1,
  TwoLevels_1_Copy,
  TwoLevels_1_Different,
} = require('./mockObjects');

console.log('====================================');
console.log('TwoLevels_1');
console.log(TwoLevels_1);
console.log('====================================');
console.log('TwoLevels_1_Different');
console.log(TwoLevels_1_Different);
console.log('====================================');
console.log('Result:');
console.log(
  deepDiff(TwoLevels_1, TwoLevels_1_Different)
);
