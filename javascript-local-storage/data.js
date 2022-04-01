/* exported todos */

var todos = [];
var previousTodosJSON = localStorage.getItem('javascript-local-storage');
todos = JSON.parse(previousTodosJSON);

function beforeUnloadHandler(event) {
  var todosJSON = JSON.stringify(todos);
  localStorage.setItem('javascript-local-storage', todosJSON);
}

window.addEventListener('beforeunload', beforeUnloadHandler);
