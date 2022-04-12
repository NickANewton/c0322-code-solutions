/* exported pick */
/*
- create a function that returns a new object contain all of the properties of the input object listed in the keys input
  if a key listed in keys is not defined in source , that property is NOT added.
  - this function will have two parameters (source, keys)
  - ex input ick({ foo: 1, bar: 2, baz: 3 }, ['foo', 'baz']) output { foo: 1, baz: 3 }
  - create an object literal
  - cycle through the object source
    IF the array keys includes a property in source and that propetry does not equal to undefined, add it to the final object
    IF a key does not match do NOT add it to the final object
   - return the final object */

function pick(source, keys) {
  var finalObject = {};
  for (var prop in source) {
    if (keys.includes(prop) && source[prop] !== undefined) {
      finalObject[prop] = source[prop];
    }
  }
  return finalObject;
}
