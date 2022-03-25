/* exported capitalize */
/*
- Create a function that pinpoints and capitalizes the first character of a word
  AND ensures the rest of the word is lowercase.
- ex input 'pAst' output 'Past'
- the function should have one parameter - (word)
- create two variables one to store capital, one to store rest of word.
Capitalize the first character of word - toUpperCase()
    - pinpoint the first character of word - .slice(0, 1)
    - assign to variable cap.
- enure all remaining characters are lowercase - toLowerCase()
    - pinpoint the remaining characters in word - .slice(1, string.length)
    - assign to variable low.
- concatentate the two results and return the result of the expression from the function
*/

function capitalize(word) {
  var cap = word.slice(0, 1);
  var low = word.slice(1, word.length);
  return cap.toUpperCase() + low.toLowerCase();
}
