/* exported getLength */

function getLength(list) {
  let newList = list;
  let count = 0;
  while (newList !== null) {
    newList = newList.next;
    count++;
  }
  return count;
}
