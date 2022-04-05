/* exported chunk */
/*
- create a function that returns a new array full of arrays. each sub array has a length equal to size.
  remaining elements are gathered into a final sub-array.
- this function will have two parameters (array, size)
- ex input chunk(['foo', 'bar', 'baz', 'qux'], 2); ouput // -> [["foo", "bar"], ["baz", "qux"]]
- create an empty array to hold the final array output
- use the array slice method to
*/

function chunk(array, size) {
  var finalArray = [];
  var subArray = [];

  if (array === []) {
    return [];
  }

  if (size === 1) {
    for (var i = 0; i < array.length; i++) {
      subArray.push(array[i]);
      finalArray.push(subArray);
      subArray.shift();
    }
    return finalArray;
  }
  /*
  for (var start = 0; start < size; start++) {
    subArray.push(array[start]);
  }
  finalArray.push(subArray);

  if (size > Math.floor((array.length - 1) / 2)) {
    for (var end = size; end < array.length; end++) {
      subArray.push(array[end]);
    }
    finalArray.push(subArray);

  } */
  return finalArray;
}
