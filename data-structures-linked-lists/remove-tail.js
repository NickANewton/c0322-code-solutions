/* exported removeTail */

function removeTail(list) {
  if (list.next === null) return list;
  let newList = list;
  let tail;
  while (newList) {
    tail = newList.data;
    newList = newList.next;
  }
  tail.data = null;
}
