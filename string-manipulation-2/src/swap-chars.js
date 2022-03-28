/* exported swapChars */
/*
- create a function that swaps two letters of a string at the index specified
- this function with have three parameters (firstIndex, secondIndex, string)
- ex input swapChars(0, 1, 'lodash') output oldash"
- split the string into an array within a new variable
- create a new variable to hold the 1st index
  - make the first index equal to the second index
  - make the second index = to new variable
- return the array as a string

*/
function swapChars(firstIndex, secondIndex, string) {
  var toArray = string.split('');
  var change = toArray[firstIndex];
  toArray[firstIndex] = toArray[secondIndex];
  toArray[secondIndex] = change;
  return toArray.join('').toString();
}
