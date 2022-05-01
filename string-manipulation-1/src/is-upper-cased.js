/* exported isUpperCased */
/*
- create a function to indicate whether or not all characters in a word are uppercased
- ex. input 'HTML' output true
- the function will have one parameter word
- determine whether or not word is uppercased from first char to last char
     - word === word.toUpperCase(0, word.length )
  - if it is return true
  - if not, return false
*/

function isUpperCased(word) {
  if (word === word.toUpperCase(0, word.length)) {
    return true;
  }
  return false;
}
