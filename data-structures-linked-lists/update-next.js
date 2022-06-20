/* exported updateNext */

function updateNext(list, value) {
  if (list.next !== null) {
    const newlist = list;
    newlist.next.data = value;
  }
}
