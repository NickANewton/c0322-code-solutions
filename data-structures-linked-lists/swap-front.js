/* exported swapFront */

function swapFront(list) {
  if (list.next === null) return list;
  const newList = list;
  const first = list.data;
  const second = list.next.data;
  newList.data = second;
  newList.next.data = first;
  return newList;
}
