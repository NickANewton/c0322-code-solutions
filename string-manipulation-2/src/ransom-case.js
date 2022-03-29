/* exported ransomCase */
/*
- Create a function that returns a string, with everyother character capiltalized
- this function will have one paramenter (string)
- ex input ransomCase('LearningFuze') output "lEaRnInGfUzE"
- create variable to house the new string
- cycle through the input string
  if character is even, lowecase character assign to variable
  if character is odd, uppercase assign to variable
  - return the new variable from the function
  */

function ransomCase(string) {
  var everyOther = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      everyOther += string[i].toLowerCase();
    } else {
      everyOther += string[i].toUpperCase();
    }
  }
  return everyOther;
}
