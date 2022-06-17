/* exported swapFront */

function swapFront(list) {
  if (list.next === null) return list;
  const newList = list;
  newList.data = newList.next.data;
}
