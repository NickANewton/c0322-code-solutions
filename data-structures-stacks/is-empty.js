/* exported isEmpty */

function isEmpty(stack) {
  if (stack.print() === 'Stack { <empty> }') {
    return true;
  }
  return false;
}
