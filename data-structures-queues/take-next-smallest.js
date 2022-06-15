/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  let check = queue.dequeue();
  if (queue.peek() === undefined) {
    return check;
  }
  while (check > queue.peek()) {
    queue.enqueue(check);
    check = queue.dequeue();
  }
  return check;
}
