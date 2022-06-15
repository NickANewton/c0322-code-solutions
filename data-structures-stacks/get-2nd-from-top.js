/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  if (stack.print() !== 'Stack { <empty> }') {
    const first = stack.pop();
    const second = stack.peek();
    stack.push(first);
    return second;
  }
}
