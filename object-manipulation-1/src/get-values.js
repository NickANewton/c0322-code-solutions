/* exported getValues */
/*
- create a function that returns an array of the object's property values
- ex const dave = {firstName: 'David',lastName: 'Thomas'};
    getValues(dave) output ["David", "Thomas"]
- this function will have one parameter (object)
- create an empty array
- cycle through each of the properties of an object and push the keys to the array (for in)
- return the array from the function
*/
function getValues(object) {
  var onlyValues = [];
  for (var prop in object) {
    onlyValues.push(object[prop]);
  }
  return onlyValues;
}
