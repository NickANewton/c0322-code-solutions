/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  for (let i = 0; i < index; i++) {
    const take = queue.dequeue();
    queue.enqueue(take);
  }
  const value = queue.dequeue();
  return value;
}
