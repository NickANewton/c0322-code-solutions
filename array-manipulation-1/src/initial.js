/* exported initial */
/*
- create a function that returns a new array with all elements of the input array
except the last
- ex input ['foo', 'bar', 'baz'] output ["foo", "bar"]
- create a new variable to hold new elements
- cycle through each element of the input array, stopping before the last element
- push each element into new array
- return the new array from the function
*/

function initial(array) {
  var notLast = [];
  for (var i = 0; i < array.length - 1; i++) {
    notLast.push(array[i]);
  }
  return notLast;
}
