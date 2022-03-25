/* exported tail */
/*
- create an function that returns a new array containing all elements of the array
  AFTER the first element
- ex input ['foo', 'bar', 'baz'] output ['bar', 'baz']
- the function will have one parameter (array)
- create a new array to hold elements
- cycle through the array starting at the second element
- push each element into the new array
- return new array
*/

function tail(array) {
  var end = [];
  for (var i = 1; i < array.length; i++) {
    end.push(array[i]);
  }
  return end;
}
