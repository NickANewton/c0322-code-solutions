/* exported includes */
/*
- create a function that returns a boolean indication the presence of a value at any index of an array
- this function will have two parameters (array, value)
- ex input ncludes(['foo', 'bar', 'baz', 'qux'], 'baz'); output true
- cycle through the array indexes
  IF value input equals the array index return true
  If not, return false */

function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
