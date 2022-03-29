var clickCount = 1;

var $circle = document.querySelector('.circle');
var $body = document.querySelector('body');

function handleClickEvent(event) {
  clickCount++;
  if (clickCount % 2 === 0) {
    $circle.className = 'circle gray';
    $body.className = 'black';
  } else {
    $circle.className = 'circle';
    $body.className = 'off-yellow';
  }
}

$circle.addEventListener('click', handleClickEvent);
