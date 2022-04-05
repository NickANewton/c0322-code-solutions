/* exported dropRight */

/* - create a function that returns are new array containing the elements before count.
- this function will have two inputs(array, count)
- ex input takeRight(['foo', 'bar', 'baz', 'qux'], 2); ouput["baz", "qux"]
- create an empty array to hosue the last elemetns of the array
- if the the input array is empty, return an empty array
- cycle through the array starting at position 0
- push the each index into the new array up untill count
- return the new array to the function */

function dropRight(array, count) {
  var finalArray = [];
  if (array === []) {
    return [];
  }
  for (var e = 0; e < array.length - count; e++) {
    finalArray.push(array[e]);
  }
  return finalArray;
}
