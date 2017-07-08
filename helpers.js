// Check value's data type (object,string,number,function)
function checkType(data) {
  const typeString = Object.prototype.toString.call(data).split(' ');
  const type = typeString[1].slice(0, -1);

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
  if (!value1 || !value2) { return false; }

  // We only need to compare one because they will have the same type
  let type = checkType(value1);

  if(type === 'Array') {
    for (let x = 0; x < value1.length; x++) {
      if (checkType(value1[x]) === 'Object' && callback) {
        let result = callback(value1[x], value2[x], key);
      }

      else {
        for (let x = 0; x < value1.length; x++) {
           if (value1[x] !== value2[x]) {
            return false;
          }
        }
      }
    }
  }

  // If we're comparing objects, we need to go deep :kappa:
  else if (type === 'Object' && callback) {
    let result = callback(value1, value2, key);

    if(!result.one.length) { return true; }
  }

  else {
    if( value1.toString() !== value2.toString()) {
        return false;
    }
  }

  return true;
}

module.exports = {hasOwn, isEqual};
