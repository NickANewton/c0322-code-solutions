/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported append */

function append(list, value) {
  const newNode = new LinkedList(value);
  let current = list;
  while (current.next) {
    current = current.next;
  }
  current.next = newNode;
  return list;
}
