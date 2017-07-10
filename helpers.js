// Check value's data type (object,string,number,function)
function checkType(data) {
  var typeString = Object.prototype.toString.call(data).split(' ');
  var type = typeString[1].slice(0, -1);

  return type;
}

// Self explanatory
function hasOwn(obj, key) {
  return obj.hasOwnProperty(key);
}

// Check if two values are deepEqual regardless of its type. 'key' here is an
// attribute name, because if we're comparing objects I want to return the
// differences from it but we need to know the name of the object itself.
function isEqual(value1, value2, callback, key) {
  // We only need to compare one because they will have the same type
  var type = checkType(value1);

  if(type === 'Array') {
    if (value1.length !== value2.length) { return false; }

    for (var x = 0; x < value1.length; x++) {
      if (checkType(value1[x]) === 'Object' && callback) {
        var result = callback(value1[x], value2[x], key);

        if(!result.one.length) { return true; }
      }

      else {
        for (var x = 0; x < value1.length; x++) {
          if (checkType(value1[x] === 'Function') && value1.toString() !== value2.toString()) {
            return false;
          }
           if (value1[x].toString() !== value2[x].toString()) {
             return false;
           };
        }
      }
    }
  }

  // If we're comparing objects, we need to go deep :kappa:
  else if (type === 'Object' && callback) {
    var result = callback(value1, value2, key);

    if(!result.one.length) { return true; }
  }

  else {
    if(value1.toString() !== value2.toString()) {
      return false;
    }
  }

  return true;
}

module.exports = {hasOwn, isEqual};
