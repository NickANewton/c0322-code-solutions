var student = {
  firstName: 'Nick',
  lastName: 'Newton',
  age: 31
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Regional Sales Manager';
console.log('value of livesInIrvine:', student.livesInIrvine);
console.log('value of previousOccupation:', student.previousOccupation);
console.log('value of student', student);

var vehicle = {
  make: 'Honda',
  model: 'Civic',
  year: 2018
};

vehicle['color'] = 'red';
vehicle['isConvertible'] = false;

console.log('value of color:', vehicle.color);
console.log('value of isConvertible:', vehicle.isConvertible);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Maisie',
  type: 'cat'
};

delete pet.name;
delete pet.type;
console.log('value of pet:', pet);
