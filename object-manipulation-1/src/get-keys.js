/* exported getKeys */
/*
- create a function that returns an array with the object property keys
- ex input const dave = {firstName: 'David', lastName: 'Thomas'};
    getKeys(dave) output ["firstName", "lastName"]
- This function has one parameter (object)
- create an empty array
- cycle through the ojects properties and push them to the new array (for in)
- return the new array from the function
*/

function getKeys(object) {
  var onlyKeys = [];
  for (var prop in object) {
    onlyKeys.push(prop);
  }
  return onlyKeys;
}
