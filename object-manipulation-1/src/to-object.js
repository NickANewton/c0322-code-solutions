/* exported toObject */
/*
- create a function that returns a new object with the input key value pair
- ex toObject(['firstName', 'David']); output { firstName: "David" }
- this function has one parameter (keyValuePair)
- create an new object
- set the new property to keyValuePair at index 0
  - set that propertys value to keyValuePair at index 2.
- add the input key value pair to the new object
- return the object form the function
*/

function toObject(keyValuePair) {
  var newObj = {};
  newObj[keyValuePair[0]] = keyValuePair[1];
  return newObj;
}
