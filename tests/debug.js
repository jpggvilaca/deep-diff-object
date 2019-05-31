const deepDiff = require('../index');
const { TwoLevels_1, TwoLevels_1_Different } = require('./mockObjects');

console.log('====================================');
console.log('TwoLevels_1');
console.log(TwoLevels_1);
console.log('====================================');
console.log('TwoLevels_1_Different');
console.log(TwoLevels_1_Different);
console.log('====================================');
console.log('Result:');
console.log(deepDiff(TwoLevels_1, TwoLevels_1_Different));
