/* exported union */
/* A new Array containing unique values from both first and second in the order they appear.
has two parameters (first, second)
ex input union([2, 1], [2, 3]);
ex output [2, 1, 3]
create a new variable with an empty array to hold the final array
loop over the first array and
  push each index into the array if it is unique
    check each index, if the final array already includes that index, dont push
loop over the second array
  push each index into the array if it is unique
    check each index, if the final array already includes that index, dont push
return the final array */

function union(first, second) {
  var uniqueIndexes = [];
  for (var i = 0; i < first.length; i++) {
    if (!uniqueIndexes.includes(first[i])) {
      uniqueIndexes.push(first[i]);
    }
  }
  for (var e = 0; e < second.length; e++) {
    if (!uniqueIndexes.includes(second[e])) {
      uniqueIndexes.push(second[e]);
    }
  }
  return uniqueIndexes;
}
