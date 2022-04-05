/* exported omit

function omit(source, keys) {
  var finalObject = {};
  var keysArray = source.keys();
  for (var i = 0; i < keysArray.length; i++) {
    if (keys) { var propName = keys[i]; }
    if (propName !== prop) {
      finalObject[propName] = source[prop];
    }
  }
  for (var pop in source) {
      if (keys[i] !== pop) {
        return {};
      }
    }
} */
