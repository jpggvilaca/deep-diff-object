const checkType = function(data) {
  const typeString = Object.prototype.toString.call(data).split(' ');
  const type = typeString[1].substr(0, a.length - 1);

  return type;
}

module.exports = checkType
