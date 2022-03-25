/* exported compact */
/*
- create a function that only puts truthy values into a new array
- ex input ['', 'foo', 'bar', '', 'baz', 'qux'] output ['foo', 'bar', 'baz', 'qux']
- the function will have one parameter (array)
- create a new variable with an empty array
- cycle through the input array looking for truthy elements
  convert elements to boolean values
  if element === true
    push to new array
  return new array
*/
function compact(array) {
  var truth = [];
  for (var i = 0; i < array.length; i++) {
    if (Boolean(array[i]) === true) {
      truth.push(array[i]);
    }
  }
  return truth;
}
