var $click = document.querySelector('.task-list');

function handleClickEvent(event) {
  console.log('event.target:', event.target);
  console.log('event.target.tagName:', event.target.tagName);
  var closest = event.target.closest('.task-list-item');
  if (event.target.tagName === 'BUTTON') {
    console.log('closest:', closest);
    closest.remove();
  }
}

$click.addEventListener('click', handleClickEvent);
