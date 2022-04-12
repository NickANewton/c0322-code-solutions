/* exported chunk */
/*
- create a function that returns a new array full of arrays. each sub array has a length equal to size.
  remaining elements are gathered into a final sub-array.
- this function will have two parameters (array, size)
- ex input chunk(['foo', 'bar', 'baz', 'qux'], 2); ouput // -> [["foo", "bar"], ["baz", "qux"]]
- create an empty array
- cycle through the input array splitting the array up in chunks defined by the size input
- return the final array
*/

function chunk(array, size) {
  var arrayOfArrays = [];
  for (var i = 0; i < array.length; i += size) {
    var chunkOfArray = array.slice(i, i + size);
    arrayOfArrays.push(chunkOfArray);
  }
  return arrayOfArrays;
}
