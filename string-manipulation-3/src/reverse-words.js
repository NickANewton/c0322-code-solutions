/* exported reverseWords */
/* A version of String with every character of each word reversed, but the words in their original order.
- create a variable to hold the final output string
- create a variable to hold the string split into an array
- Loop over each array index and
    at each index loop over each string index backwards and push the index into the final string
    push a space after every array index, except the last one
- return the final ouput vaiable
*/

function reverseWords(string) {
  var wordsArray = string.split(' ');
  var wordsBackwards = '';
  for (var i = 0; i < wordsArray.length; i++) {
    for (var e = wordsArray[i].length - 1; e >= 0; e--) {
      wordsBackwards += wordsArray[i][e];
    }
    if (i < wordsArray.length - 1) {
      wordsBackwards += ' ';
    }
  }
  return wordsBackwards;
}
