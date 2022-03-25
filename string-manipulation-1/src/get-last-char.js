/* exported getLastChar */
/*
- Create a function that returns the last character of a string.
- input 'LearningFuze" expected output 'e'
- the function will have one parameter 'string'
- use the charAt() method to retreive the last character of the string
    - to pinpoint the last character use the length property of the string
      and subtract 1 (string.length - 1)
- Return the charAt(string.length-1) method call from the function
*/

function getLastChar(string) {
  return string.charAt(string.length - 1);
}
