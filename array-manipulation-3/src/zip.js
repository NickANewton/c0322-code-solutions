/* exported zip */
/* An Array of Arrays. Each sub-Array is a pair containing an element from first, and an element from second,
 each from the same index of their respective source Array.
The "zipped" result is only as long as the shorter of first and second.
- The function has 2 parameters (first, second)
- ex input zip(
  ['dog', 'lion', 'hawk', 'tiger'],
  ['cat', 'lamb', 'dove']
  Output [["dog", "cat"], ["lion", "lamb"], ["hawk", "dove"]]
  - create a new variable with an empty array that holds the final array.
  - create a new variable with an empty array that will hold the array pairs
  if first length is > second
    empty the pair array
    loop over second and push values of first and second into pair array
    push the pair array into the final array
  if second length is > first
    empty the pair array
    loop over first and push values of first and second into pair array
    push the pair array into the final array
- return final array
*/

function zip(first, second) {
  var pairArray = [];
  var finalArray = [];

  if (first.length > second.length) {
    for (var i = 0; i < second.length; i++) {
      pairArray = [];
      pairArray.push(first[i]);
      pairArray.push(second[i]);
      finalArray.push(pairArray);
    }
  } else {
    for (var e = 0; e < first.length; e++) {
      pairArray = [];
      pairArray.push(first[e]);
      pairArray.push(second[e]);
      finalArray.push(pairArray);
    }
  }
  return finalArray;
}
