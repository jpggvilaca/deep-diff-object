const testObjects = require('./testObjects');
const formatter = require('./formatter');

// Gets the changes between 2 objects
// param1: object
// param2: object
// param3: boolean --- if the developer wants to know the values that changed
function deepDiff(obj_1, obj_2, detailed) { // 3rd param is boolean
  let result = {diff: false, changes: []};

  // Format the objects
  const { one, two } = formatter(obj_1, obj_2);

  // BEGIN MAIN LOOP
  for (i in one) {
    // Array
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

    // Function
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

    // String or number
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

  console.log(result.changes);

  return result;
}

// TESTING
deepDiff(testObjects.obj_5, testObjects.obj_6);

// TODO LIST:
// Format both objects so they have the same properties and in the same order - done
// Compare all the primitive types - done
// Compare recursively
