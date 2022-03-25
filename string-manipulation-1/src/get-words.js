/* exported getWords */
/*
- create a function that creates an array with
  each index being a separate word from the input string
- ex input 'Web Development" output ['Web', 'Development']
- the function will ahve one parameter (string)
- create an empty array to hold each word of the string .split automatically does this
- split up each word of the string
- push each separate word into the array
  - if an empty string is entered, return empty array
  - return the array from the function
*/

function getWords(string) {
  if (string === '') {
    return [];
  }
  return string.split(' ');
}
