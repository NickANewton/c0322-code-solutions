/* exported oddOrEven */
function oddOrEven(numbers) {
  var test = [];
  for (var i = 0; i <= numbers.length - 1; i++) {
    if (numbers[i] % 2 === 0) {
      test.push('even');
    } else {
      test.push('odd');
    }
  }
  return test;
}
