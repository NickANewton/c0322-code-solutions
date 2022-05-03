/* exported equal */
/* A Boolean indicating whether or not first and second are equal to each other, index-for-index.
the function has 2 parameters (first, Second)
ex input equal(['foo', 'bar', 'baz'], ['foo', 'bar', 'baz'])
output // -> true
if 1st length does not equal 2nd length return false
create a loop to cycle through each array and:
return true if each index is equal to each other
return false where the first occuracne is not
*/

function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  for (var i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}
