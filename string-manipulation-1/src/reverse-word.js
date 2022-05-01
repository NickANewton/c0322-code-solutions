/* exported reverseWord */
/* create a function that returns a string containing the characters of the input
  in reverse order.
  - ex. input 'foo' ouput 'oof'
  - the function will have one parameter (word).
  - create a variable that will hold the reverse word
  - separate each character from word
  - add each character in reverse order
*/

function reverseWord(word) {
  var backwards = '';
  for (var i = word.length - 1; i >= 0; i--) {
    backwards += word.charAt(i);
  }
  return backwards;
}
