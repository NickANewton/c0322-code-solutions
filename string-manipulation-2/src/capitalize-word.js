/* exported capitalizeWord */
/*
- create a function that returns a string with the first letter uppercased
    and the rest of the letters lowercased. EXCPETION JavaScript always has the 'S'
    capitalized.
- ex input capitalizeWord('broKeN') output "Broken"
- this function has one parameter (word)
  create two variables
    to hold 1st letter
    to hold rest of word
- pinpoint the 1st character of the string
  - make sure the 1st character is upper case assign it to a variable
  - pinpoint the rest of the characters in the string
    - make sure they are all lower case assign it to the other variable
   IF the string is equal to javascript
      Capitalize the first letter
      Lowercase the rest of the word
      Capitalize the s
      Concatenate and return the the result to the function
  - if not,
      Concatenate varialbles and return the result to the expression

*/
function capitalizeWord(word) {
  var firstLetter = word.charAt(0);
  var restOfWord = word.slice(1, word.length);
  if (word.toLowerCase() === 'javascript') {
    restOfWord = restOfWord.toLowerCase();
    return firstLetter.toUpperCase() + restOfWord.replace('s', 'S');
  } else {
    return firstLetter.toUpperCase() + restOfWord.toLowerCase();
  }
}
