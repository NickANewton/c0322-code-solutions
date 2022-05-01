/* exported takeRight */
/*
- create a function taht returns are new array containing the last counted elements of an input array.
  if the count is larger than the array length retun the entire array.
- this function will have two inputs (array, count)
- ex input takeRight(['foo', 'bar', 'baz', 'qux'], 2); ouput ["baz", "qux"]
- create an empty array to hosue the last elemetns of the array
- IF the count is larger than the input array length, return the original array
- cycle through the array starting at position - the count
  -push the each index into the new array
- return the new array to the function */

function takeRight(array, count) {
  var finalArray = [];
  if (count >= array.length) {
    return array;
  }
  for (var e = array.length - count; e < array.length; e++) {
    finalArray.push(array[e]);
  }
  return finalArray;
}
