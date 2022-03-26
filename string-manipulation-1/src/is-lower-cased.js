/* exported isLowerCased */
/*
- create a function to that returns a boolean indicating whether or not all characters
  in a string are lowercased.
- the function will have one parameter (word)
- determine whether word is === to lowercase characters  - word.tolowercase(0, word.length)
  - if they are, return true
  - if they aren't return false
  */

function isLowerCased(word) {
  if (word === word.toLowerCase(0, word.length)) {
    return true;
  }
  return false;
}
