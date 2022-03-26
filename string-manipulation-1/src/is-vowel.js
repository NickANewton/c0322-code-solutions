/* exported isVowel */
/*
- create a function indicating wheather a character is a vowel.
- ex input 'a' output true
- the function will have one parameter (char)
- determine if char is === to vowel (a, e, i, o, u)
  - if yes return true
  - if not return false

  ***update:(too many if statements would be needed)***
*/

/* ----> revised:
- create a variable to store all possible vowels var vowels
- check whether or not each of those vowels (5) matches char
  - make sure the character type that checked is the same character type as each index in
    var vowels - toLowerCase
    if char is a vowel return true
    if char is not return false
*/

function isVowel(char) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  for (var i = 0; i < vowels.length; i++) {
    if (char.toLowerCase(0) === vowels[i]) {
      return true;
    }
  }
  return false;
}
