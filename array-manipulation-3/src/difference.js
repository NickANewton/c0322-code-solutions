/* exported difference */
/* A new Array containing the symmetric difference between first and second.
found in one array but not the other!
has two parameters (first, second)
ex input difference([2, 1], [2, 3]);
output [1, 3]
create a new variable with an empty array to hold the final array
loop over first array
  if index is not included in second array, push to final array
loop over second array
  if index is not included in first array, push to final array
return final array */

function difference(first, second) {
  var symmetricDiff = [];
  for (var i = 0; i < first.length; i++) {
    if (!second.includes(first[i])) {
      symmetricDiff.push(first[i]);
    }
  }
  for (var e = 0; e < second.length; e++) {
    if (!first.includes(second[e])) {
      symmetricDiff.push(second[e]);
    }
  }
  return symmetricDiff;
}
