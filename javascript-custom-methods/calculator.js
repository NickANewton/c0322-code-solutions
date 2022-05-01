/* exported calculator */

var calculator = {
  add: function add(x, y) {
    return x + y;
  },
  subtract: function subtract(x, y) {
    return x - y;
  },
  multiply: function multiply(x, y) {
    return x * y;
  },
  divide: function divide(x, y) {
    return x / y;
  },
  square: function square(x) {
    return Math.pow(x, 2);
  },
  sumAll: function sumAll(numbers) {
    var add = 0;
    for (var i = 0; i < numbers.length; i++) {
      add += numbers[i];
    }
    return add;
  },
  getAverage: function getAverage(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    var average = (sum / numbers.length);
    return average;
  }
};
