/* exported isPalindromic */
/* Create a function that returns A Boolean indicating whether or not string is a palindrome.
- the function will have 1 parameter (string)
ex input/ Output
isPalindromic("bob")      // -> true
isPalindromic("alice")    // -> false
- create a variable to hold the input string
- create a variable to hold the reverse string
- remove spaces from the string
- loop over the string and concatenate each character in reverse
- check whether or not both variables equal each other
  If true, return true
  If false return false.
*/

function isPalindromic(string) {
  var noSpace = string;
  var reverseString = '';

  while (noSpace.includes(' ')) {
    noSpace = noSpace.replace(' ', '');
  }

  for (var i = noSpace.length - 1; i >= 0; i--) {
    reverseString += noSpace[i];
  }
  if (noSpace === reverseString) {
    return true;
  } else {
    return false;
  }
}
