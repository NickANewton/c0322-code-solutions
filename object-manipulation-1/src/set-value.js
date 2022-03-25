/* exported setValue */
/*
- create a function that creates a new key and value
- ex input const dave = { firstName: 'David' };
  setValue(dave, 'lastName', 'Thomas');
  output { firstName: "David", lastName: "Thomas" }
- this function has three parameters (oject, key, value)
- assign value to an object at the key property
-
*/

function setValue(object, key, value) {
  object[key] = value;
}
