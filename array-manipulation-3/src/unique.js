/* exported unique */
/* A new Array containing only the unique elements of array, in the order they first appear in array.
function has one parameter (array)
ex input unique(['foo', 'bar', 'baz', 'qux', 'bar', 'qux', 'corge', 'baz']);
output ["foo", "bar", "baz", "qux", "corge"]
create a variable with an empty array to hold the final array.
Loop through the input array and
  if the final array does not include the current index, push it into the final array.
  Return the final array.
*/

function unique(array) {
  var arrayUnique = [];
  for (var i = 0; i < array.length; i++) {
    if (!arrayUnique.includes(array[i])) {
      arrayUnique.push(array[i]);
    }
  }
  return arrayUnique;
}
