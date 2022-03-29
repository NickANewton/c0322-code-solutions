/* exported capitalizeWords */
/*
- Create a function that capitalizes the first letter of every word within a string
- the function will have one parameter (string)
- ex input capitalizeWords('needs solution') output "Needs Solution"
- create a variable that capiltalizes the first character of the stirng
- cycle through each character index of  string
    - capitalize the first character after a space assign to variable
    - lowercase all remaining characters
- return the result to the function
*/

function capitalizeWords(string) {
  var cap = string[0].toUpperCase();
  for (var i = 1; i < string.length; i++) {
    if (string[i - 1] === ' ') {
      cap += string[i].toUpperCase();
    } else {
      cap += string[i].toLowerCase();
    }
  }
  return cap;
}
