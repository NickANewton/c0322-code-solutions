/* exported filterOutStrings */
function filterOutStrings(values) {
  var sift = [];
  for (var i = 0; i <= values.length - 1; i++) {
    if (typeof (values[i]) !== typeof ('string')) {
      sift.push(values[i]);
    }
  }
  return sift;
}
