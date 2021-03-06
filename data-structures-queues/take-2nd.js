/* exported take2nd */

function take2nd(queue) {
  const first = queue.dequeue();
  if (queue.peek() === undefined) {
    return first;
  }
  const second = queue.dequeue();
  queue.enqueue(first);
  return second;
}
