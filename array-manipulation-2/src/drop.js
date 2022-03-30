/* exported drop */
/*
- create a function with the return being a new array containg the indexes after a certain index
- this function will have two parameters (array, count)
- ex input drop(['foo', 'bar', 'baz', 'qux'], 2); output ["baz", "qux"]
- create an empty array
- if the count is greater than the array length, return an empty array
- cycle through the input array after the input count
- push each element to the new array
- return the new array to the function
*/

function drop(array, count) {
  var after = [];
  if (count >= array.length) {
    return [];
  }
  for (var i = count; i < array.length; i++) {
    after.push(array[i]);
  }
  return after;
}
