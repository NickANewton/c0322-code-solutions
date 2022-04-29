/* exported intersection */
/* A new Array containing unique values found in both first and second.
The order of result values is determined by the order they occur.
- has 2 parameters (first, second)
ex input intersection([2, 1], [2, 3]);
ex output [2]
create a variable with an empty array that will hold the final array
loop over the first array and
  at each index check if they are included in the second array
  if they are push them into the final array
return the final array */

function intersection(first, second) {
  var uniqueValues = [];
  for (var i = 0; i < first.length; i++) {
    if (second.includes(first[i])) {
      uniqueValues.push(first[i]);
    }
  }
  return uniqueValues;
}
