/* exported omit */
/*
- create a function that returns a new object containeing all of the porpties of source that
are not listed in keys. If a key is listed in keys, then it should not be included in the new object.
- this function will have two parameters (source, keys)
- ex input it({ foo: 1, bar: 2, baz: 3 }, ['foo', 'baz']) output { bar: 2 }
- create a new object
- cycle through the object source
-  IF the array keys does not include a property in source add it to the final object
    IF a key does match do NOT add it to the final object
- return the object
*/

function omit(source, keys) {
  var finalObject = {};
  for (var i = 0; i < keys.length; i++) {
    for (var prop in source) {
      if (keys.includes(prop) === false) {
        finalObject[prop] = source[prop];
      }
    }
  }
  return finalObject;
}
