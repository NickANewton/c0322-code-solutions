/* exported filterOutNulls */
function filterOutNulls(values) {
  var remove = [];
  for (var i = 0; i <= values.length - 1; i++) {
    if (values[i] !== null) {
      remove.push(values[i]);
    }
  }
  return remove;
}
