/* exported getValue */
/*
- create a function that returns the value in an object at the key property
- ex input const dave = { firstName: 'David', lastName: 'Thomas' }
 getValue(dave, 'firstName'); // -> ouput "David"
 - the function will have two parameters (oject, key)
 - find the specific key in an object and return its value to the function
 */

function getValue(object, key) {
  return object[key];
}
