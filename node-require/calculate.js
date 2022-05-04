const add = require('./add');
const divide = require('./divide');
const multiply = require('./multiply');
const subtract = require('./subtract');

const inputToArray = [process.argv[2], process.argv[3], process.argv[4]];

const [num1, operation, num2] = inputToArray;

if (operation === 'plus') {
  console.log(add(Number(num1), Number(num2)));
} else if (operation === 'minus') {
  console.log(subtract(Number(num1), Number(num2)));
} else if (operation === 'times') {
  console.log(multiply(Number(num1), Number(num2)));
} else if (operation === 'over') {
  console.log(divide(Number(num1), Number(num2)));
} else {
  console.log('Enter a valid operation');
}
