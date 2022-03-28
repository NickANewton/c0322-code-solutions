/* exported firstChars */
/*
- Create a function that returns a specific amount of characters in a string
- this fuction with have two parameters (length, string)
- ex input firstChars(8, 'All Code All Day')  output "All Code"
- create a variable with an empty string
- if the length input is greater than the string length return the string
- cycle through the string
- chop the string off at the length of characters specified
- return the result
*/

/* function firstChars(length, string) {
  var chop = '';
  if (length > string.length) {
    return string;
  }
  for (var i = 0; i < length; i++) {
    chop += string[i];
  }
  return chop;
} */

/* reviesed function:
   slice string at length
   return result
*/

function firstChars(length, string) {
  return string.slice(0, length);
}
