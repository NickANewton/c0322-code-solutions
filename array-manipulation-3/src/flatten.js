/* exported flatten */
/* A new Array with any direct child Arrays unwrapped. This function should only "flatten" array by one level.
has 1 param (array)
ex input flatten([['foo', 'bar'], ['baz', 'qux']]);
output ["foo", "bar", "baz", "qux"]
create a new variable with an empty array to hold the final array
loop through the input array
  push each index into the final array
  IF the index is also an array
    loop through it and push each index into the final array
return finalf array */

function flatten(array) {
  var arrayIsFlat = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (var e = 0; e < array[i].length; e++) {
        arrayIsFlat.push(array[i][e]);
      }
    } else {
      arrayIsFlat.push(array[i]);
    }
  }
  return arrayIsFlat;
}
