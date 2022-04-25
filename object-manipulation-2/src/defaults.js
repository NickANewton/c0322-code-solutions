/* exported defaults */
/*
- Create a function that Assigns properties of source object to the target object for all properties that are not defined on target. (no return)
- this function has 2 parameters (target, source)
- ex input const target = {
  foo: 1,
  baz: 3
};
const source = {
  bar: 2
};

- example output { foo: 1, bar: 2, baz: 3 }
- Cycle through each property in source
- IF prop is NOT = to a property in target, add that property and value to target */

function defaults(target, source) {
  for (var prop in source) {
    if (!Object.hasOwn(target, prop)) {
      target[prop] = source[prop];
    }
  }
}
