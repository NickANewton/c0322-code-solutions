/* exported removeTail */

function removeTail(list) {
  if (list.next === null) return list;
  var current = list;
  var next = current.next;
  while (next.next) {
    current = next;
    next = next.next;
  }
  current.next = null;
  return list;
}
