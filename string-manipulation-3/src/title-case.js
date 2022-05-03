/* exported titleCase */
/* The original title, but with APA Title Case Style applied.
has 1 param (title)
ex input: titleCase('speaking Javascript: an in-depth guide for programmers')
Output "Speaking JavaScript: An In-Depth Guide for Programmers"
- create a variable to store the input string with all lowercase letters
  turn the variable into an array as an array separated by spaces
- loop over each index in the array and:
    if the index length is >= 4
    check to see if the index inclues a -
    if true capitalize the first letter and the letter following the -
    else capitalize the first letter
change the array back to a stirng AND
Capitalize the index 0
if string includes a : Capitalize the index 2 after the :
return the string
*/

function titleCase(string) {
  var apaStyle = string.toLowerCase();
  apaStyle = apaStyle.split(' ');
  var nonCapWords = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
  for (var i = 0; i < apaStyle.length; i++) {
    var firstIndex = apaStyle[i][0];
    if (apaStyle[i].includes(':')) {
      apaStyle[i + 1] = apaStyle[i + 1].replace(apaStyle[i + 1][0], apaStyle[i + 1][0].toUpperCase());
    }
    if (!nonCapWords.includes(apaStyle[i])) {
      if (apaStyle[i].includes('-')) {
        apaStyle[i] = apaStyle[i].replace(firstIndex, firstIndex.toUpperCase());
        var containsDash = apaStyle[i].indexOf('-');
        var afterDash = apaStyle[i][containsDash + 1];
        apaStyle[i] = apaStyle[i].replace(afterDash, afterDash.toUpperCase());
      } else {
        apaStyle[i] = apaStyle[i].replace(firstIndex, firstIndex.toUpperCase());
      }
    }
  }
  var stringApaStyle = apaStyle.join(' ');
  var stringApaFirstIndex = stringApaStyle[0];
  stringApaStyle = stringApaStyle.replace(stringApaFirstIndex, stringApaFirstIndex.toUpperCase());

  if (stringApaStyle.includes('Javascript')) {
    stringApaStyle = stringApaStyle.replace('Javascript', 'JavaScript');
  }
  if (stringApaStyle.includes('Api')) {
    stringApaStyle = stringApaStyle.replace('Api', 'API');
  }
  return stringApaStyle;
}
