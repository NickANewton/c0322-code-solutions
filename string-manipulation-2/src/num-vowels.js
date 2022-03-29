/* exported numVowels */
/* Create a function that returns the number of vowels in the input stirng
- this function will have one parameter (string)
- ex input numVowels('All Code All Day')  output 5
- create an array containing all vowels
- create a variable to hold the count of the vowels
- cycle through the input string looking for indexes in array that are vowels
- add one to count each time a vowel is found
- return count
*/
function numVowels(string) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var count = 0;
  for (var char of string) {
    if (vowels.includes(char.toLowerCase())) {
      count++;
    }
  }
  return count;
}
