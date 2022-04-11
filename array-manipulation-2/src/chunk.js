/* exported chunk */
/*
- create a function that returns a new array full of arrays. each sub array has a length equal to size.
  remaining elements are gathered into a final sub-array.
- this function will have two parameters (array, size)
- ex input chunk(['foo', 'bar', 'baz', 'qux'], 2); ouput // -> [["foo", "bar"], ["baz", "qux"]]
- create two arrays
  one to hold each sub array and push each sub array into:
- the final array holding all sub arrays.
- cycle through the input array splitting the array up in chunks defined by the size input
- cycle through the array starting at where the last loop left off and the remainder of the input to the final array
- return the final array
*/

/* function chunk(array, size) {
  var finalArray = [];
  var subArray = [];
  if (array === []) {
    return [];
  } else {

    for (var sub = 0; sub < size - 1; sub++) {
      subArray.push(array[sub]);
    }
    finalArray.push(subArray);

    for (var final = size; final < array.length; final++) {
      subArray.push(array[final]);
    }
    finalArray.push(subArray);
    return finalArray;
  }
} */

/* function chunk(array, size) {
  var arrayOfArrays = [];
  if (array === []) {
    return [];
  } if (size === 1) {
    for (var i = 0; i < array.length; i++) {
      arrayOfArrays.push(array.slice(i, (i + 1)));
    } return arrayOfArrays;
  } else {
    arrayOfArrays.push(array.slice(0, (size)));
    if (size < (array.length / 2)) {
      arrayOfArrays.push(array.slice(size, (size + size)));
      arrayOfArrays.push(array.slice((size + size, (array.length - 1))));
    } else {
      arrayOfArrays.push(array.slice(size, array.length));
    }
    return arrayOfArrays;
  }
} */

function chunk(array, size) {
  var arrayOfArrays = [];
  for (var i = 0; i < array.length; i += size) {
    var chunkOfArray = array.slice(i, i + size);
    arrayOfArrays.push(chunkOfArray);
  }
  return arrayOfArrays;
}
