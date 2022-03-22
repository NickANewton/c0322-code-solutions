function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

var convertMinutesToSecondsResult = convertMinutesToSeconds(5);
console.log('value of convertMinutesToSecondsResult:', convertMinutesToSecondsResult);

function greet(name) {
  var greeting = 'Hey ' + name;
  return greeting;
}

var greetResult = greet('Beavis');
console.log('value of greetResult:', greetResult);

function getArea(width, height) {
  var rectangle = width * height;
  return rectangle;
}

var getAreaResult = getArea(17, 42);
console.log('value of getAreaResult:', getAreaResult);

function getFirstName(person) {
  var name = person;
  return name.firstName;
}

var getFirstNameResult = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });
console.log('value of getFirstNameResult:', 'All hail, ' + getFirstNameResult + '!');

function getLastElement(array) {
  var list = array;
  return array[list.length - 1];
}

var getLastElementResult = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('value of getLastElementResult:', getLastElementResult);
