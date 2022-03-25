/* exported reverse */
/*
- create a function that contains all elements of an array in reverse order
- ex ['foo', 'bar', 'baz'] output ["baz", "bar", "foo"]
- the function will have one parameter (array)
- create a new array to hold elements
- cycle through input array in reverse order
- push each element into new array
- return array from the function
*/

function reverse(array) {
  var backwards = [];
  for (var i = array.length - 1; i >= 0; i--) {
    backwards.push(array[i]);
  }
  return backwards;
}
