/* exported maxValue */

function maxValue(stack) {
  if (stack.peek() === undefined) {
    return -Infinity;
  }
  let high = stack.peek();
  let num;
  while (stack.peek() !== undefined) {
    num = stack.pop();
    if (num > high) {
      high = num;
    }
  }
  return high;
}
