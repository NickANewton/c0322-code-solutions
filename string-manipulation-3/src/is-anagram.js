/* exported isAnagram */
/* create a function that returns A Boolean indicating whether or not secondString is an anagram of firstString.
- this function has two parameters (firstString, secondString)
- ex input isAnagram('restful', 'fluster')
- ex ouput true
- remove all spaces from each string if any and turn them into arrays
- if string 1 length is not equal to string 2, return false
- create two variables that will hold an array of each strings characters:
  - loop over each index of string 2 AND
    at each index, check to see if it matches a character in string 1
      if it does, remove the letter from string 1
      return true,
      else return false
*/

function isAnagram(firstString, secondString) {
  if (firstString.includes(' ')) {
    var firstNoSpace = firstString.replaceAll(' ', '');
    firstNoSpace = firstNoSpace.split('');
  } else {
    firstNoSpace = firstString.split('');
  }

  if (secondString.includes(' ')) {
    var secondNoSpace = secondString.replaceAll(' ', '');
    secondNoSpace = secondNoSpace.split('');
  } else {
    secondNoSpace = secondString.split('');
  }
  if (firstNoSpace.length !== secondNoSpace.length) {
    return false;
  } else {
    for (var i = 0; i < secondNoSpace.length; i++) {
      var firstContainsLetter = firstNoSpace.indexOf(secondNoSpace[i]);
      if (firstContainsLetter < 0) {
        return false;
      } else {
        firstNoSpace.splice(firstContainsLetter, 1);
      }
    }
    return true;
  }
}
