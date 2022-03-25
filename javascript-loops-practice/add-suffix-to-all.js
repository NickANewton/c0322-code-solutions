/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var concat = [];
  for (var i = 0; i <= words.length - 1; i++) {
    concat.push(words[i] + suffix);
  }
  return concat;
}
