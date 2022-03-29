/* exported lastChars */
/*
- Create a function that returns the last specific amount of characters in a string
- this fuction with have two parameters (length, string)
- ex input firstChars(8, 'All Code All Day')  output "All Code"
- if the length input is greater than the string length return the string
- cycle through the string in reverse
- chop the string off at the length of characters specified
  - subtract the length from the string.length to get the starting point
  - use the string length as the ending point
- return the result
*/

function lastChars(length, string) {
  if (length > string.length) {
    return string;
  }
  return string.slice(string.length - length, string.length);
}
