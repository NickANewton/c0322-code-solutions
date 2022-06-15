/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  if (stack.print() !== 'Stack { <empty> }') {
    const first = stack.pop();
    stack.push(value);
    stack.push(first);
  }
}
