/* exported invert */
/*
- Create a function that returns a new object with the keys and values of the input object swapped.
- this function has 1 parameter (source)
- ex input age: NaN, occupation: 'programmer', language: 'JavaScript'
- ex ouput NaN: 'age', programmer: 'occupation', JavaScript: 'language'
- create a new object
- loop through through each key of the input object AND:
  - set each value equal a new variable
  - set each key equal to a new variable
- use bracket notation to pass in the new property ariable and set it = tp the new value variable.
return the new object.
*/

function invert(source) {
  var keyValuesInterted = {};
  for (var prop in source) {
    var newProp = source[prop];
    var newValue = prop;
    keyValuesInterted[newProp] = newValue;
  }
  return keyValuesInterted;
}
