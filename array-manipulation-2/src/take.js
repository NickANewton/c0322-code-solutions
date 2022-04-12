/* exported take */
/*
- create a new function with the return being a new array containing the indexes up to a certain index.
- this function has two parameters (array, count)
- ex input take(['foo', 'bar', 'baz', 'qux'], 2); output ["foo", "bar"]
- create an empty array
- if the count is greater than the array, return an empty array
- cycle through the input array up until the index count
  - push indexes to new array
- return new array
*/
function take(array, count) {
  var short = [];
  if (count > array.length - 1) {
    return [];
  }
  for (var i = 0; i < count; i++) {
    short.push(array[i]);
  }
  return short;
}
