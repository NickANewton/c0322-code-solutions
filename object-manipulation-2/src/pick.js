/* exported pick */
/*
- create a function that returns a new object contain all of the properties of the input object listed in the keys input
  if a key listed in keys is not defined in source , that property is NOT added.
  - this function will have two parameters (source, keys)
  - ex input ick({ foo: 1, bar: 2, baz: 3 }, ['foo', 'baz']) output { foo: 1, baz: 3 }
  - create an object literal
  - pinpoint each key within in input the object (dot notation)
    AND compare it to the input keys (dot notation)
    IF they match, add it to the final object
    IF a key does not match do NOT add it to the final object
   - return the final object */

function pick(source, keys) {
  var finalObject = {};
  for (var i = 0; i < keys.length; i++) {
    for (var prop in source) {
      if (keys[i] === prop) {
        finalObject[prop] = source[prop];
      }
    }
    /* for (var pop in source) {
      if (keys[i] !== pop) {
        return {};
      }
    } */
  }
  return finalObject;
}
