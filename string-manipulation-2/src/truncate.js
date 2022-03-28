/* exported truncate */
/*
- create a function that returns a shortened version of a string at a certain point and adds an ellipsis
- ex input (8, 'All Code All Day') output "All Code..."
- this function has two parameters (length, string)
- create a variable to house the shortend string
- cut the input string down from character 0 to the input length (.slice)
  - assign the result to the new variable
- concatenate the new variable with the string "..."
*/

function truncate(length, string) {
  var shortWord = string.slice(0, length);
  return shortWord + '...';
}
