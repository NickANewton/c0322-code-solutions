/* exported getTail */

function getTail(list) {
  let newList = list;
  let tail;
  while (newList !== null) {
    tail = newList.data;
    newList = newList.next;
  }
  return tail;
}
