/* exported includes */

function includes(list, value) {
  let newList = list;
  while (newList) {
    newList = list.next;
    if (newList.data === value) {
      return true;
    }
  }
  return false;
}
