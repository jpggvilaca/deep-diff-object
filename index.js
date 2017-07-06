const formatter = require('./formatter');

// Gets the changes between 2 objects
// Params:
// obj_1 | Type: object | Required
// obj_2 | Type: object | Required
// detailed | Type: boolean | Optional
//
// If detailed is set to true, then the changes object will show
// not only the keys but also the values that changed
function deepDiff(obj_1, obj_2, detailed) { // 3rd param is boolean
  // Error handling
  if (
    !obj_1 ||
    !obj_2 ||
    Object.keys(obj_1).length === 0 ||
    Object.keys(obj_2).length === 0
  ) { throw 'Invalid parameters, you need to provide two objects'; }

  // Initialize result object
  let result = {diff: false, changes: []};

  // Format the objects
  const { one, two } = formatter(obj_1, obj_2);

  // BEGIN MAIN LOOP
  for (i in one) {
    // Check if array
    if(Array.isArray(one[i])) {
      for (let x = 0; x < one[i].length; x++) {
        if ((one[i][x] !== two[i][x])) {
          if (detailed) {
            result.changes.push({ [i]: Array(one[i][x], two[i][x]) });
          } else {
              result.changes.push(i);
          }
        }
      }

      continue;
    }

    // Check if function
    if(typeof one[i] === 'function') {
      if( one[i].toString() !== two[i].toString()) {
          if (detailed) {
            result.changes.push({ [i]: Array(one[i], two[i]) })
          } else {
            result.changes.push(i);
          }
      }

      continue;
    }

    // Check if string or number
    if(one[i] !== two[i]) {
      if (detailed) {
        result.changes.push({ [i]: Array(one[i], two[i])});
      } else {
        result.changes.push(i)
      }

      continue;
    }

  }

  // If there is any changes, the diff will become true
  result.diff = !!result.changes.length;

  return result;
}

module.exports = deepDiff;
