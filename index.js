var test_obj_1 = {
  name: 'joao',
  age: 3,
  miles: [2,5,7,8]
};

var test_obj_2 = {
  name: 'joao',
  age: 3,
  miles: [2,5,7,8]
};

var test_obj_3 = {
  name: 'rui',
  age: 3,
  miles: [2,5,7,3],
};

var test_obj_4 = {
  name: 'rui',
  age: 3,
  miles: [2,5,7,8],
};

function deepDiff(obj_1, obj_2) {
  var result = {diff: false, changes: []},
    one = Object.assign(obj_1, {}),
    two = Object.assign(obj_2, {});

  for (i in one) {
    // BEGIN MAIN LOOP
    if(Array.isArray(one[i])) {
      for (var x; x < one[i].length; x++) {
        if (one[i][x] !== two[i][x]) {
          result.changes.push(one[i][x], {});
        }
      }

      continue;
    }

    if(one[i] !== two[i]) {
      result.changes.push({ [i]: Array(one[i], two[i])});
    }

  }

  result.diff = !result.changes.length;

  console.log(result);

  return result;
}

// TESTING
deepDiff(test_obj_3, test_obj_4);
